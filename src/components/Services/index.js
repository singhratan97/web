import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";
import { useEffect } from "react";
import {
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  text9,
  text10,
  text11,
} from "./texts";
import "./services.scss";

const getItems = (panelStyle) => [
  {
    key: "1",
    label: "Document Translation",
    children: text1,
    style: panelStyle,
  },
  {
    key: "2",
    label: "Typing",
    children: text2,
    style: panelStyle,
  },
  {
    key: "3",
    label: "Oral and Sign Language Interpretation",
    children: text3,
    style: panelStyle,
  },
  {
    key: "4",
    label: "Transciption",
    children: text4,
    style: panelStyle,
  },
  {
    key: "5",
    label: "Voice Over / Subtitling",
    children: text5,
    style: panelStyle,
  },
  {
    key: "6",
    label: "Desktop Publishing",
    children: text6,
    style: panelStyle,
  },
  {
    key: "7",
    label: "Virtual Language Training / Soft Skill training",
    children: text7,
    style: panelStyle,
  },
  {
    key: "8",
    label: "Conversion",
    children: text8,
    style: panelStyle,
  },
  {
    key: "9",
    label: "Website Development",
    children: text9,
    style: panelStyle,
  },
  {
    key: "10",
    label: "Proofreading / Formatting",
    children: text10,
    style: panelStyle,
  },
  {
    key: "11",
    label: "Market Research",
    children: text11,
    style: panelStyle,
  },
];

const Services = () => {
  const { token } = theme.useToken();

  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    // border: "2px solid #893999",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  }, []);

  return (
    <div className="services" id="services">
      <h1>Services</h1>
      <Collapse
        // bordered={false}
        size="large"
        // defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        style={{
          background: token.colorBgContainer,
        }}
        items={getItems(panelStyle)}
      />
    </div>
  );
};

export default Services;
