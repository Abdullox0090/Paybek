import React from "react";
import ImgRow from "./ImgRow";
import mainScss from "./main.module.scss";

import backend from "./imgs/backend.png";
import flutter from "./imgs/Flutter.png";
import iOS from "./imgs/ios.png";
import data from "./imgs/Data.png";
import Section from "../Section/Section";
import SectionBottom from "../SectionBox/SectionBottom";
import Footer from "../Footer/Footer";
function Main() {
  const course = [
    {
      id: 1,
      lang: "Backend Developing",
      img: backend,
      title: "Website and Mobile Pragramming",
      bgColor: "rgb(74, 140, 30)",
    },
    {
      id: 2,
      lang: "Flutter Developing",
      img: flutter,
      title: "Website and Mobile Pragramming",
      bgColor: "rgb(26, 81, 162)",
    },
    {
      id: 3,
      lang: "iOS Developing",
      img: iOS,
      title: "Website and Mobile Pragramming",
      bgColor: "rgb(198, 82, 26)",
    },
    {
      id: 4,
      lang: "Data Structure",
      img: data,
      title: "Website and Mobile Pragramming",
      bgColor: "rgb(105, 40, 131)",
    },
  ];
  return (
    <>
      <div className={mainScss.contener}>
        {course.map((value) => {
          return <ImgRow value={value} />;
        })}
      </div>
      <div>
        <Section />
      </div>
      <div>
        <SectionBottom />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Main;
