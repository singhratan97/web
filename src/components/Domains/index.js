import "./domains.scss";
import { useEffect } from "react";

const Domains = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  }, []);
  return (
    <div className="domains">
      <h2 className="domains-header">Domains</h2>
      <p className="domains-first-para">
        <span className="domain-first-letter">W</span>ideTran provides a clear
        perception to our clients. Whether it is a Automobile industry or any
        other industry, our services will make you satisfied throughout. We have
        highly qualified and professional translators who have enriched
        experience in the automative industry and have deep knowledge of their
        standards. Our translators and interpreters deal with the Technical
        manuals and stuffs, Newsletters, Email communication, Catalogues,
        Flyers, Advertisement and marketing contents and much more.
      </p>
      <h2>Domains we focus :</h2>
      <ul className="ul-section">
        <li>Automobile Industry</li>
        <li>Healthcare industry</li>
        <li>Advertising Agencies</li>
        <li>Manufacturing Industries</li>
        <li>Banking & Finance</li>
        <li>Legal</li>
        <li>ITES & IT Industry</li>
        <li>Publishing</li>
        <li>E-commerce & Retail</li>
      </ul>
    </div>
  );
};

export default Domains;
