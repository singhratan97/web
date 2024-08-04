import "./home.scss";

const Home = () => {
  return (
    <div id="home">
      <div id="first">
        <h1>Select from below software services</h1>
        <p>The following are the services you can avail.</p>
        <h1>To know more about our services...</h1>
        <p>Click on one of the below cards.</p>
        <p>
          Get to know more about it to avail first 3 services absolutely free.
        </p>
        <div id="card-container">
          <div id="card">Language Translator</div>
          <div id="card">Language Translator</div>
          <div id="card">Language Translator</div>
          <div id="card">Language Translator</div>
          <div id="card">Language Translator</div>
          <div id="card">Language Translator</div>
        </div>
      </div>
      <div id="second">
        <div id="in-second-div">
          <h1>Select from below software services</h1>
          <p>The following are the services you can avail.</p>
          <h1>To know more about our services...</h1>
          <p>Click on one of the below cards.</p>
          <p>
            Get to know more about it to avail first 3 services absolutely free.
          </p>
          <div id="card-container">
            <div id="card">Language Translator</div>
            <div id="card">Language Translator</div>
            <div id="card">Language Translator</div>
            <div id="card">Language Translator</div>
            <div id="card">Language Translator</div>
            <div id="card">Language Translator</div>
          </div>
          <p>
            To know more and for direct consultation, click on below button.
          </p>
          <button className="consult">Consult me!</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
