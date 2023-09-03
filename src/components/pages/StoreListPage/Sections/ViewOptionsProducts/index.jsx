"use client";
import React, { useState } from "react";
import { CheckBox } from "../../../../atoms/CheckBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { StyledViewWay } from "./style";
import Typography from "../../../../atoms/Typography";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleViewWay ,viewWayCONSTANTS} from "../../../../../rtk/slices/products.js";
const ViewOptionsProducts = () => {
  const dispatch = useDispatch();
  const viewWay = useSelector((state) => state.products.viewWay);
  // vertical or grid
  const handleViewBtnClick = () => {
    dispatch(toggleViewWay());
  };
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
        <div className="view-options">
          <button
            className={viewWay === viewWayCONSTANTS.GRID ? "active" : ""}
            onClick={handleViewBtnClick}
          >
            <FontAwesomeIcon icon={faBorderAll} />
          </button>
          <button
            className={viewWay === viewWayCONSTANTS.VERTICAL ? "active" : ""}
            onClick={handleViewBtnClick}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </StyledViewWay>
  );
};

export default ViewOptionsProducts;
