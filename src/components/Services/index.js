import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";
import "./services.scss";

//  <p>Make it as collapse</p>
// <ul>
//   <li>Document </li>
//   <li>Typing </li>
//   <li>Oral and Sign Language Interpretation</li>
//   <li>Transciption</li>
//   <li>Voice Over / Subtitling</li>
//   <li>Desktop Publishing</li>
//   <li>Virtual Language Training / Soft Skill training</li>
//   <li>Conversion</li>
//   <li>Website Development</li>
//   <li>Proofreading / Formatting</li>
//   <li>Market Research</li>
// </ul>

const text1 = (
  <div>
    With WideTran's best translation team, we believe in the accuracy of our
    work. From our broad range of services, Translation is one of the services
    which is of the basic needs in any field nowadays. Basically, translation is
    the process of converting a document from one language to another. We offer
    Translation services in all the Indian and Foriegn Languages which cover up
    all the Asian, European, Middle East and African languages. One might
    require translation for the following purposes:
    <ol>
      <li>Immigration Purposes.</li>
      <li>Legal Purposes.</li>
      <li>Industrial Purposes.</li>
    </ol>
    Three reasons of WideTran being the best professional agency is because of
    our
    <ol>
      <li> Native Translators. </li>
      <li>Professional Translators.</li>
      <li>Domain specialized Translators.</li>
    </ol>
    We believe in focussing on quality translation which can be fulfilled by the
    native people only. All our language experts are Native people who work
    around the clock to meet our client's needs. We not only cater our services
    Pan India but also full fledgedly focus on Global Markets.
  </div>
);

const text2 = <div>1</div>;
const text3 = <div>1</div>;
const text4 = <div>1</div>;
const text5 = <div>1</div>;
const text6 = <div>1</div>;
const text7 = <div>1</div>;
const text8 = <div>1</div>;
const text9 = <div>1</div>;
const text10 = <div>1</div>;
const text11 = <div>1</div>;
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

  return (
    <div className="services">
      <h1>Services</h1>
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
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
