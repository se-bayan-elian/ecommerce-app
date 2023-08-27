"use client";
import React from "react";
import { CheckBox } from "../../../../atoms/CheckBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTableCells } from "@fortawesome/free-solid-svg-icons";
import { StyledViewWay } from "./style";
import { StyledP } from "../../../../atoms/Typography/style";

const ViewOptionsProducts = () => {
  return (
    <StyledViewWay>
      <StyledP>12,911 items in Mobile accessory</StyledP>
      <div className="view">
        <StyledP>
          {" "}
          <CheckBox value="Verified only" />
        </StyledP>
        <select>
          <option value="option1">Featured</option>
        </select>
        <div className="svg">
          <FontAwesomeIcon icon={faBars} />
          <FontAwesomeIcon icon={faTableCells} />
        </div>
      </div>
    </StyledViewWay>
  );
};

export default ViewOptionsProducts;
