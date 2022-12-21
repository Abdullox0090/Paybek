import React, { useRef } from "react";
import cls from "./header.module.scss";
import { AiOutlineDown, AiFillApple, AiOutlineBars } from "react-icons/ai";
import PersonImg from "./imgs/3333 1 (1).png";
import logo from "./imgs/Asset 1@4x 1.png";

function Header() {
  const navRef = useRef();

  const navbar = () => {
    // navRef.current.classList.toggle("responsive_nav");
    navRef.current.style='top:-35%';
    console.log("Gamburger");
  };

  return (
    <div className={cls.test}>
      <div className={cls.header}>
        <img src={logo} alt="logo-404" />
        <div ref={navRef} className={cls.navbar}>
          <ul>
            <li>
              Curated Path <AiOutlineDown style={{ fontSize: "10px" }} />
            </li>
            <li>Online Courses</li>
          </ul>
          <div className={cls.auth}>
            <button className={cls.login}>Login</button>
            <button className={cls.signBtn}>
              {" "}
              <AiFillApple /> Sign Up
            </button>
          </div>
        </div>
        <AiOutlineBars className={cls.nav_btn} onClick={navbar} style={{ "z-index":"3"}} />
      </div>



      <div className={cls.mainBox}>
        <div className={cls.para}>
          <h1>
            The Best Way To Learn Is <br /> By Doing
          </h1>
          <p>Become professionals and ready to join the world</p>
          <button>Join For Free</button>
        </div>
        <div className={cls.photo}>
          <img src={PersonImg} alt="person-404" />
          <div className={cls.resbtnJoin}>
            <button>Join for Free</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
