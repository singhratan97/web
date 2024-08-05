import "./scrollToTop.scss";
import top from "../../assets/top.png";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollScreen = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // const scrollDuration = 1;
    // const scrollStep = -window.scrollY / (scrollDuration / 15);

    // const scroll = () => {
    //   if (window.scrollY !== 0) {
    //     window.scrollBy(0, scrollStep);
    //     requestAnimationFrame(scroll);
    //   }
    // };

    // requestAnimationFrame(scroll);
  };

  return (
    <>
      {isVisible && (
        <div className="scrollToTop" onClick={scrollScreen}>
          <img src={top} alt="top" />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
