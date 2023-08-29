"use client";
import React from "react";
import { CheckBox } from "../../../../atoms/CheckBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { StyledViewWay } from "./style";
import Typography from "../../../../atoms/Typography";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";

const ViewOptionsProducts = () => {
  return (
    <StyledViewWay>
      <Typography as="p" variant="default">
        12,911 items in Mobile accessory
      </Typography>
      <div className="view">
        <Typography as="p" variant="default">
          {" "}
          <CheckBox label="Verified only" />
        </Typography>
        <select>
          <option value="option1">Featured</option>
        </select>
        <div className="svg">
          <button>
            {" "}
            <FontAwesomeIcon icon={faBorderAll} />
          </button>
          <button>
            {" "}
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </StyledViewWay>
  );
};

export default ViewOptionsProducts;
