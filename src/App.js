import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loader from "./dependencies/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import JoinHeader from "./components/JoinHeader";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Domains = lazy(() => import("./components/Domains"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const JoinUs = lazy(() => import("./components/JoinUs"));

function App() {
  return (
    <div id="app" style={{ position: "relative" }}>
      <Router>
        <JoinHeader />
        <Header />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/domains" element={<Domains />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/join-us" element={<JoinUs />} />
          </Routes>
        </Suspense>
        <Footer />
        <ScrollToTop />
      </Router>
    </div>
  );
}

export default App;
