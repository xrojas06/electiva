import React from "react";

const Button = ({ styles }) => (
    <div className={"border-4 border-solid border-graycool rounded-[15px]"}>
  <button type="button" className={`m-2 py-4 px-6 font-Heebo font-medium text-[18px] text-purpleblue bg-babyblue rounded-[10px] ${styles}`}>
    Mira lo que podemos hacer por ti
  </button>
    </div>
);

export default Button;
