import React from "react";
import Buttons from "./ButtonsCont";
import imgMan from "../../../img/garoto.png";
import "./person.scss";

export default function Men({ count, setCount }) {
  return (
    <div className="counter">
      <div className="div">
        <h3>Homens</h3>
        <img className="imgPerson" src={imgMan} alt="Man" />
        <div>
          <Buttons count={count} setCount={setCount} />
        </div>
      </div>
    </div>
  );
}
