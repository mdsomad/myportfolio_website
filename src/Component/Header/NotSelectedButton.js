import React from "react";
import "../Header/Button.css";

const NotSelectedButton = ({name}) => {
  return (
    <button className="NotSelectedButton">
      {name}
    </button>
  );
};


export default NotSelectedButton ;
