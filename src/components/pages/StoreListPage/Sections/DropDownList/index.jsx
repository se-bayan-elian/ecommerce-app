"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { RadioButton } from "../../../../atoms/RadioButton";
import RangeInput from "../../../../atoms/RangeInput";
import Input from "../../Sections/Input";
import { CheckBox } from "../../../../atoms/CheckBox";
import { dropdownData } from "../../../../../mock/DropDownListData";
import Typography from "../../../../atoms/Typography";
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
                  {dropdownData[buttonName].map((category, index) => (
                    <Typography as="p" variant="default" key={index}> {category}</Typography>
                  ))}
                  {/* <Typography as="p" variant="default" className="seeall"> ee all</Typography> */}
                  {/* <StyledP className="seeall">See all</StyledP> */}
                </CategoryList>
              )}
              {buttonName === "Features" && (
                <div>
                  {dropdownData[buttonName].map((feature, j) => (
                    <CheckBoxLabel>
                      <CheckBox
                        key={j}
                        label={feature}
                        checked={selectedFeatures.includes(feature)}
                        onChange={() => setSelectedFeatures(feature)}
                      /></CheckBoxLabel>
                  ))}
                  {/* <Typography as="p" variant="default" className="seeall"> ee all</Typography> */}

                  {/* <StyledP className="seeall">See all</StyledP> */}
                </div>
              )}

              {buttonName === "Brands" && (
                <div>
                  {dropdownData[buttonName].map((brand, j) => (
                    <CheckBoxLabel>
                      <CheckBox
                        key={j}
                        label={brand}
                        checked={selectedBrands.includes(brand)}
                        onChange={() => setSelectedBrands(brand)}
                      /></CheckBoxLabel>
                  ))}
                  {/* <Typography as="p" variant="default" className="seeall"> ee all</Typography> */}

                  {/* <StyledP className="seeall">See all</StyledP> */}
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
                        label={rating}
                        checked={selectedRating === rating}
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
