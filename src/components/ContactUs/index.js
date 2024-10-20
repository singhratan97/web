import Maps from "./Maps";
import AddressDetails from "./AddressDetails";
import ContactForm from "./ContactForm";
import "./contactUs.scss";
import { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  }, []);
  return (
    <div>
      <Maps />
      <div className="address-contact">
        <AddressDetails />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
