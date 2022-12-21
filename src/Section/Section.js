import React from "react";
import StreamOps from "./img/StreamOps.png";
import cls from "./section.module.scss";
function Section() {
  return (
    <div className={cls.Section_contener}>
      <img src={StreamOps} alt="" />
      <div className={cls.Title_contener}>
        <div>
          <h1>Join the Paybek Labs</h1>
          <p>
            Our hub for documentation and discurssions on all things relating to
            Paybek product
          </p>
        </div>
        <div className={cls.btn_Contener}>
          <button>Join to Free</button>
        </div>
      </div>
    </div>
  );
}

export default Section;
