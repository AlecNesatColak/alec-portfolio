import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

function AdminAbout() {
  const { portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log(values);
    try {
      const tempFrontendSkills = values.frontendSkills.split(",");
      const tempBackendSkills = values.backendSkills.split(",");
      const tempOthersSkills = values.othersSkills.split(",");
      values.skills = [
        {
          frontend: tempFrontendSkills,
          backend: tempBackendSkills,
          others: tempOthersSkills,
        },
      ];

      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-about", {
        ...values,
        _id: portfolioData.about._id,
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
        initialValues={{
          ...portfolioData.about,
          frontendSkills: portfolioData.about.skills[0].frontend.join(" , "),
          backendSkills: portfolioData.about.skills[0].backend.join(" , "),
          othersSkills: portfolioData.about.skills[0].others.join(" , "),
        }}
      >
        <Form.Item name="lottieURL" label="Lottie URL">
          <input placeholder="Lottie URL" />
        </Form.Item>

        <Form.Item name="description1" label="Description 1">
          <textarea placeholder="Description 1" />
        </Form.Item>
        <Form.Item name="description2" label="Description 2">
          <textarea placeholder="Description 2" />
        </Form.Item>

        <Form.Item name="frontendSkills" label="Frontend Skills">
          <Input.TextArea placeholder="Frontend Skills" />
        </Form.Item>

        <Form.Item name="backendSkills" label="Backend Skills">
          <Input.TextArea placeholder="Backend Skills" />
        </Form.Item>

        <Form.Item name="othersSkills" label="Other Skills">
          <Input.TextArea placeholder="Other Skills" />
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

export default AdminAbout;
