import { useState, useEffect, useRef } from "react";
import "./about.scss";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();
  const dom1Ref = useRef();
  const dom2Ref = useRef();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    });
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    if (dom1Ref.current) {
      observer.observe(domRef.current);
    }
    if (dom2Ref.current) {
      observer.observe(domRef.current);
    }
    return () => observer.disconnect(); // Clean up the observer on unmount
  }, []);

  return (
    <div className="about">
      <h2 className={`fade-in ${isVisible ? "show" : ""}`} ref={domRef}>
        About us
      </h2>
      <p
        className={`first-para fade-in ${isVisible ? "show" : ""}`}
        ref={dom1Ref}
      >
        WideTran is a startup with a close-knit professionals and qualified
        project managers. WideTran's capability enables to handle your diverse
        requirements such as Document Translation, Interpretation, Typing,
        Desktop Publishing, Virtual Language Training, Soft Skill training,
        Transcription, Voice Over & Subtitling, Notary Services, Market
        Research, Proofreading and Website Development & Designing. WideTran is
        closely built with various industry standards, market analysis, target
        audiences, etc. We aim at focussing at our professionalism of delivering
        a standardised output to our clients. We work around the clock to
        fulfill our client's needs. We care intensely on our client's data,
        requirement and timely delivery and most importantly their satisfaction.
      </p>
      <p
        className={`second-para fade-in ${isVisible ? "show" : ""}`}
        ref={dom2Ref}
      >
        With our best project management team, we handle all our projects with
        equal commitment and dedication. With the best professional services, we
        also focus on quality output. WideTran is efficient enough to cater the
        services to multiple sectors such as Automobile industry, Manufacturing
        industry, Healthcare Industry, Advertising & Marketing Industry, Banking
        & Finance, Legal, IT & ITES Industry, Publishing sector, E-Commerce &
        Retail Industry. If you are looking out for professional and efficient
        sevices, then you are at the right place.
      </p>
    </div>
  );
};

export default About;
