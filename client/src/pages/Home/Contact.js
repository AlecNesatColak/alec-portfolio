import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {
  const { portfolioData } = useSelector((state) => state.root);
  const { contacts } = portfolioData;

  return (
    <div>
      <SectionTitle title="Contact" />
      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-secondary">{"{"}</h1>
          {Object.keys(contacts).map(
            (key) =>
              key !== "_id" && (
                <h1>
                  <span className="text-primary">{key}: </span>
                  <span className="text-darkblue">'{contacts[key]}',</span>
                </h1>
              )
          )}
          <h1 className="text-secondary">{"}"}</h1>
        </div>
        <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Any questions or comments? Feel free to reach out to me. I will get
          back to you as soon as possible.
        </p>
        <p className="text-lg">
          *Until a backend service is made, please contact me through my
          provided email, phone number, or social medias.
        </p>
      </div>
      <form className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" className="contact--input text-md">
            <option>Select One...</option>
            <option>Request Contact Information</option>
            <option>Recruting Inquiry</option>
            <option>General Question(s)</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
      </div>
    </div>
  );
}

export default Contact;
