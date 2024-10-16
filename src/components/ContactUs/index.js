const ContactUs = () => {
  return (
    <div>
      <p>Address - Ranga school -dummy</p>
      <p>Need Map for Above address </p>
      <h3>Enquiry</h3>
      <form>
        <label>
          Name*
          <input type="text" />
        </label>
        <br />
        <br />
        <label>
          Contact Number*
          <input type="number" />
        </label>
        <br />
        <br />
        <label>
          Email Id*
          <input type="email" />
        </label>
        <br />
        <br />
        <label>
          Requirement
          <textarea col="10" row="10"></textarea>
        </label>
        <br />
        <br />
        <button mailTo="widetranwt@gmail.com">Submit</button>
        {/* test with my mail */}
        <br />
        <br />
      </form>
    </div>
  );
};

export default ContactUs;
