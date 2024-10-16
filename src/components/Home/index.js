import "./home.scss";

const Home = () => {
  return (
    <div id="home-container">
      <section className="inner-section-one">
        <div className="inner-div-one">
          <h1 className="first-h1">
            A Systematic Approach to <span className="your">YOUR</span> Business
            Needs
          </h1>
          <h1 className="second-h1">
            <em>"We Create Solutions"</em>
          </h1>
        </div>
      </section>
      <section>
        <p> Number of Projects</p>
        <p> Total Clients</p>
        <p> increase count when we scroll to it and stop at max. limit</p>
      </section>
      <section className="inner-section-two">
        <div className="inner-div-two">
          <h1 className="first-h1">Why Us?</h1>
          <ul className="ul-section">
            <li>Quality Output</li>
            <li>Timely Delivery</li>
            <li>Top Priority</li>
            <li>100% Assurance</li>
            <li>Confidentiality / Conceal</li>
            <li>Data Security</li>
            <li>24*7 Support</li>
            <li>Competitive Rates</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
