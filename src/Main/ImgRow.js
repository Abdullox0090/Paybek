import React from "react";
import slc from "./ImgRow.module.scss";

function ImgRow(Props) {
  const props = Props.value || {};
  return (
    <div
      className={slc.div}
      style={{ backgroundColor: props.bgColor }}
      key={props.id}
    >
      <div className={slc.title}>
        <h1>{props.lang}</h1>
        <p>{props.title}</p>
      </div>

      <div className={slc.contenerImg}>
        <img src={props.img} alt="404" />
      </div>
    </div>
  );
}

export default ImgRow;
