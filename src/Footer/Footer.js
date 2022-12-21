import React from "react";
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import cls from "./footer.module.scss";
import logo from "./img/logo.png";
function Footer() {
  return (
    <div className={cls.footer_container}>
      <div className={cls.about_top}>
        <img src={logo} alt="404" />

        <div className={cls.para}>
            <p>Curated__Paths </p> <p> Online__Training</p>
        </div>
        <div className={cls.icons}>
            <AiOutlineTwitter />
            <FiFacebook />
            <AiOutlineInstagram />
            <AiOutlineGithub />
        </div>
      </div>
      <hr />

      <div className={cls.about_bottom}>
        <div>
          <span>© Copyright 2022, </span><span>All Reserved</span>
        </div>
        <div>
          <span>Terms $ Conditions</span>
          <span>Privace Policy</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
