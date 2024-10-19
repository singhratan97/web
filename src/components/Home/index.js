import React, { useState, useEffect, useRef } from "react";
import "./home.scss";

const Home = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    let cardRef1Current = cardRef1.current;
    let cardRef2Current = cardRef2.current;
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateNumber1(0, 2000, 1000); // Start number animation
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateNumber2(0, 500, 1000); // Start number animation
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef1Current) {
      observer1.observe(cardRef1Current);
    }

    if (cardRef2Current) {
      observer2.observe(cardRef2Current);
    }

    return () => {
      if (cardRef1Current) {
        observer1.unobserve(cardRef1Current);
      }
      if (cardRef2Current) {
        observer2.unobserve(cardRef2Current);
      }
    };
  }, [hasAnimated]);

  // Function to animate the number
  const animateNumber1 = (start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setNumber1(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  const animateNumber2 = (start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setNumber2(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

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
      <section className="home-number-section">
        <div className="home-number-div">
          <div ref={cardRef1}>
            <p>Number of Projects</p>
            <p>{number1}+</p>
          </div>
          <div ref={cardRef2}>
            <p>Total Clients</p>
            <p>{number2}+</p>
          </div>
        </div>
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
