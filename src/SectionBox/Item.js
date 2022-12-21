import React from "react";
import cls from "./item.module.scss";

function Item(props) {
  return (
    <div className={cls.wrapper}>
      <p>{props.item.title}</p>
      <div  className={cls.auth}>
        <h3 className={cls.h}>{props.item.name}</h3>
        <h4>{props.item.description}</h4>
      </div>
    </div>
  );
}

export default Item;
