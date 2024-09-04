import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import style from "../module/b8.module.css";

export default function B8() {
  return (
    <div className={style.body}>
      <h2>B8</h2>
      <div className={style.container}>
        <div className={style.flex}>
          <button>
            <FaArrowLeftLong />
            Prev
          </button>
          <button className={style.unactive}>1</button>
          <button className={style.unactive}>2</button>
          <button className={style.active}>3</button>
          <button className={style.unactive}>4</button>
          <button className={style.unactive}>5</button>
          <button className={style.unactive}>6</button>
          <button className={style.unactive}>7</button>
          <button className={style.unactive}>...</button>
          <button className={style.unactive}>20</button>
          <button>
            Next
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
}
