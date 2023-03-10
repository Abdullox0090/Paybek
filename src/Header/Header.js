import React, { useRef } from "react";
import cls from "./header.module.scss";
import { AiOutlineDown, AiFillApple, AiOutlineBars } from "react-icons/ai";
import PersonImg from "./imgs/3333 1 (1).png";
import logo from "./imgs/Asset 1@4x 1.png";

let togle = true
function Header() {
  const navRef = useRef();
  const reff = useRef(null);
  const navbar = () => {
  if(togle){
    navRef.current.style = "top:0";
    togle = false
  }
  else{
    navRef.current.style = "top:-300px";
    togle = true
  }
    console.log("Gamburger");
  };

  const location = (p) => {
    if (p) {
      reff.current.style = "display:block";
    } else {
      reff.current.style = "display:none";
    }
  };

  return (
    <div className={cls.test}>
      <div className={cls.header}>
        <img src={logo} alt="logo-404" />
        <div ref={navRef} className={cls.navbar}>
          <ul>
            <li
              onMouseOver={() => {
                location(true);
              }}
              onMouseLeave={() => {
                location(false);
              }}
            >
              Curated Path{" "}
              <AiOutlineDown
                style={{ fontSize: "10px" }}
              />
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
        <AiOutlineBars
          className={cls.nav_btn}
          onClick={navbar}
          style={{ "z-index": "3" }}
        />
      </div>

      <div
        ref={reff}
        className={cls.modal}
        onMouseOver={() => {
          location(true);
        }}
        onMouseLeave={() => {
          location(false);
        }}
      >
        <div>
          <p>Backend Developing</p>
          <p className={cls.curse_about}>Website and Mobile Programming</p>
        </div>
        <div>
          <p>Flutter Developing</p>
          <p className={cls.curse_about}>Mobile Programming</p>
        </div>
        <div>
          <p>iOS Developing</p>
          <p className={cls.curse_about}>Mobile Programming</p>
        </div>
        <div>
          <p>Data Structure</p>
          <p className={cls.curse_about}>Website and Mobile Programming</p>
        </div>
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
