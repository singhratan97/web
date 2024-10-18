import Maps from "./Maps";
import AddressDetails from "./AddressDetails";
import ContactForm from "./ContactForm";
import "./contactUs.scss";

const ContactUs = () => {
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
