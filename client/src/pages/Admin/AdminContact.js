import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

function AdminContact() {
  const { portfolioData } = useSelector((state) => state.root);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    console.log(values);
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-contact", {
        ...values,
        _id: portfolioData.contacts._id,
      });
      dispatch(HideLoading());
      form.resetFields();
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
  return (
    <div>
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        initialValues={portfolioData.contacts}
      >
        <Form.Item name="name" label="Name">
          <input placeholder="Name" />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <input placeholder="Email" />
        </Form.Item>
        <Form.Item name="phone" label="Phone">
          <input placeholder="Phone" />
        </Form.Item>
        <Form.Item name="github" label="Github">
          <input placeholder="Github" />
        </Form.Item>
        <Form.Item name="linkedin" label="Linkedin">
          <input placeholder="Linkedin" />
        </Form.Item>
        <div className="flex justify-end w-full">
          <button
            className="border border-secondary bg-primary text-secondary px-10 py-3 rounded"
            type="submit"
          >
            Save
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AdminContact;
