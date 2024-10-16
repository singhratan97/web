import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Domains from "./components/Domains";
import ContactUs from "./components/ContactUs";
import JoinUs from "./components/JoinUs";
import ScrollToTop from "./components/ScrollToTop";
import JoinHeader from "./components/JoinHeader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div id="app" style={{ position: "relative" }}>
      <Router>
        <JoinHeader />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route
            path="/services"
            element={<Services />}
            /*render={(props) => <Services {...props} a="sss" />}*/
          />
          <Route path="/domains" element={<Domains />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/join-us" element={<JoinUs />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </Router>
    </div>
  );
}

export default App;
