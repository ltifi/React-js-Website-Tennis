import React from "react";
import Menu from "./menu/menu";
import RechercheforImg from "./search/rech_img";
import "./body.css";

function body() {
  return (
    <div className="body">
      <Menu />
      <RechercheforImg />
    </div>
  );
}
export default body;
