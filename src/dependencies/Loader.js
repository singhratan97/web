import { Spin } from "antd";
import "./loader.scss";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <Spin size="large" />
    </div>
  );
};

export default Loader;
