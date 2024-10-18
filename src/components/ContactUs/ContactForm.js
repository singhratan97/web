import emailjs from "emailjs-com";
import { notification } from "antd";
import { useState } from "react";
import { INDMobileRegex, emailRegex } from "../../utils/constants";
import Loader from "../../dependencies/Loader";

const ContactForm = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    requirement: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "mobile") {
      if (e.target.value.length > 10) {
        return;
      }
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.mobile === ""
    ) {
      notification["info"]({
        message: "Info",
        description: "Please fill all the mandatory fields.",
      });
      return;
    }

    if (!INDMobileRegex.test(formData.mobile)) {
      notification["info"]({
        message: "Info",
        description: "Please enter valid mobile number.",
      });
      return;
    }

    if (!emailRegex.test(formData.email)) {
      notification["info"]({
        message: "Info",
        description: "Please enter valid Email Id.",
      });
      return;
    }

    let finalData = {
      to_name: "",
      ...formData,
    };

    setShowLoader(true);
    emailjs
      .send(
        "service_qm1301b", // Replace with your EmailJS Service ID
        "template_hpr06s1", // Replace with your EmailJS Template ID
        finalData,
        "oHMYMqISx1_GaGZAz" // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          notification["success"]({
            message: "Success",
            description: "Your message has been delivered.",
          });
          setShowLoader(false);
        },
        (err) => {
          console.log("FAILED...", err);
          notification["error"]({
            message: "Error",
            description:
              "Your message was not delivered. Please try after sometime.",
          });
          setShowLoader(false);
        }
      );

    setFormData({
      name: "",
      mobile: "",
      email: "",
      requirement: "",
    });
  };

  return (
    <div className="contact-form">
      {showLoader && <Loader />}
      <h2>Enquiry</h2>
      <form onSubmit={handleSubmit} className="form-contact" noValidate>
        <label htmlFor="name">Name*</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="number">Contact Number*</label>
        <input
          id="number"
          type="number"
          name="mobile"
          value={formData.mobile}
          placeholder="Enter your Mobile Number"
          onChange={handleChange}
        />
        <label htmlFor="email">Email Id*</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter your Email Id"
          onChange={handleChange}
        />
        <label htmlFor="requirement">Requirement</label>
        <textarea
          id="requirement"
          name="requirement"
          rows="4"
          cols="50"
          value={formData.requirement}
          placeholder="Type your requirement here..."
          onChange={handleChange}
        ></textarea>
        <button mailTo="">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
