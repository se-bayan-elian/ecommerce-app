"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { RadioButton } from "../../../../atoms/RadioButton";
import RangeInput from "../../../../atoms/RangeInput";
import Input from "../../../../atoms/Input";
import { CheckBox } from "../../../../atoms/CheckBox";
import { StyledP } from "../../../../atoms/Typography/style";
import { dropdownData } from "../../../../../mock/DropDownListData";
import {
    DropDownListWrapper,
    DropdownButton,
    DropdownContent,
    CategoryList,
    CheckBoxLabel,
    RadioButtonLabel,
    RangeInputWrapper,
    InputWrapper,
    ApplyButton,
    InputWrapperParent,
  } from './style';


const DropDownList = () => {

  const [openDropdowns, setOpenDropdowns] = useState(Object.keys(dropdownData));
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const toggleDropdown = (buttonName) => {
    if (openDropdowns.includes(buttonName)) {
      setOpenDropdowns(openDropdowns.filter((item) => item !== buttonName));
    } else {
      setOpenDropdowns([...openDropdowns, buttonName]);
    }
  };

  return (
    <DropDownListWrapper>
      {Object.keys(dropdownData).map((buttonName, i) => (
        <div key={i}>
          <DropdownButton onClick={() => toggleDropdown(buttonName)}>
            {buttonName}
            {openDropdowns.includes(buttonName) ? (
              <FontAwesomeIcon icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
          </DropdownButton>
          {openDropdowns.includes(buttonName) && (
            <DropdownContent>
              {buttonName === "Category" && (
                <CategoryList >
                  {dropdownData[buttonName].map((category, j) => (
                    <StyledP key={j}>{category}</StyledP>
                  ))}
                  <StyledP className="seeall">See all</StyledP>
                </CategoryList>
              )}
              {buttonName === "Features" && (
                <div>
                  {dropdownData[buttonName].map((feature, j) => (
                    <CheckBoxLabel>
                    <CheckBox
                      key={j}
                      value={feature}
                      checked={selectedFeatures.includes(feature)}
                      onChange={() => setSelectedFeatures(feature)}
                    /></CheckBoxLabel>
                  ))}
                  <StyledP className="seeall">See all</StyledP>
                </div>
              )}

              {buttonName === "Brands" && (
                <div>
                  {dropdownData[buttonName].map((brand, j) => (
                    <CheckBoxLabel>
                    <CheckBox
                      key={j}
                      value={brand}
                      checked={selectedBrands.includes(brand)}
                      onChange={() => setSelectedBrands(brand)}
                    /></CheckBoxLabel>
                  ))}
                  <StyledP className="seeall">See all</StyledP>
                </div>
              )}
              {buttonName === "Condition" && (
                <div>
                  {dropdownData[buttonName].map((condition, j) => (
                    <RadioButtonLabel>
                      {/* <RadioButton/> */}
                    <RadioButton
                      key={j}
                      value={condition}
                      checked={selectedCondition === condition}
                      onChange={() => setSelectedCondition(condition)}
                      name="condition"
                    /></RadioButtonLabel>
                  ))}
                </div>
              )}
              {buttonName === "Rating" && (
                <div>
                  {dropdownData[buttonName].map((rating, j) => (
                    <CheckBoxLabel>
                    <CheckBox
                      key={j}
                      value={rating}
                      checked={selectedRating===rating}
                      onChange={() => setSelectedRating(rating)}
                    /></CheckBoxLabel>
                  ))}
                </div>
              )}
              {buttonName === "priceRange" && (
                <div>
                    <RangeInputWrapper>
                  <RangeInput
                    value={selectedPriceRange[0]}
                    onChange={(e) =>
                      setSelectedPriceRange([
                        e.target.value,
                        selectedPriceRange[1],
                      ])
                    }
                  /></RangeInputWrapper>
                  <div>
                    <InputWrapperParent >
                    <InputWrapper>
                    <Input
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      label="Min"
                    /></InputWrapper>
                    <InputWrapper>
                    <Input
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      label="Max"
                    /></InputWrapper></InputWrapperParent>
                    <ApplyButton>Apply</ApplyButton>
                  </div>
                </div>
              )}
            </DropdownContent>
          )}
        </div>
      ))}
    </DropDownListWrapper>
  );
};

export default DropDownList;
