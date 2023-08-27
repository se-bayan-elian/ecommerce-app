"use client";
import React from "react";
import { CheckBox } from "../../../../atoms/CheckBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTableCells } from "@fortawesome/free-solid-svg-icons";
import { StyledViewWay } from "./style";
import Typography from "../../../../atoms/Typography";

const ViewOptionsProducts = () => {
  return (
    <StyledViewWay>

      <Typography as="p" variant="default">12,911 items in Mobile accessory</Typography>
      <div className="view">
        <p>
          <CheckBox value="Verified only" />
        </p>
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
