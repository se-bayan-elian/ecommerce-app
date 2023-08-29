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
import Rating from "react-rating-stars-component";
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
  StyledContainerRatingWithCheckbox,
} from "./style";
import Typography from "../../../../atoms/Typography";

const DropDownList = () => {
  const [openDropdowns, setOpenDropdowns] = useState(Object.keys(dropdownData));
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState("");
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
                <CategoryList>
                  {dropdownData[buttonName].map((category, j) => (
                    <Typography as="p" variant={"default"} key={j}>
                      {" "}
                      {category}
                    </Typography>
                  ))}
                  <Typography as="p" variant={"default"} className="seeall">
                    {" "}
                    See all
                  </Typography>
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
                        />
                    </CheckBoxLabel>
                  ))}
                  <Typography as="p" variant={"default"} className="seeall">
                    {" "}
                    See all
                  </Typography>
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
                      />
                    </CheckBoxLabel>
                  ))}
                  <Typography as="p" variant={"default"} className="seeall">
                    {" "}
                    See all
                  </Typography>
                </div>
              )}
              {buttonName === "Condition" && (
                <div>
                  {dropdownData[buttonName].map((condition, j) => (
                    <RadioButtonLabel>
                      <RadioButton
                        key={j}
                        value={condition}
                        checked={selectedCondition === condition}
                        onChange={() => setSelectedCondition(condition)}
                        name="condition"
                      />
                    </RadioButtonLabel>
                  ))}
                </div>
              )}

              {buttonName === "Rating" && (
                <div>
                  {dropdownData[buttonName].map((ratingData, j) => (
                    <div key={j}>
                      <StyledContainerRatingWithCheckbox>
                        <CheckBoxLabel>
                          <CheckBox />
                        </CheckBoxLabel>
                        <Rating
                          count={5}
                          size={24}
                          activeColor="#ffd700"
                          value={ratingData.rating}
                        />
                      </StyledContainerRatingWithCheckbox>
                    </div>
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
                    />
                  </RangeInputWrapper>
                  <div>
                    <InputWrapperParent>
                      <InputWrapper>
                        <Input
                          value={minPrice}
                          onChange={(e) => setMinPrice(e.target.value)}
                          label="Min"
                        />
                      </InputWrapper>
                      <InputWrapper>
                        <Input
                          value={maxPrice}
                          onChange={(e) => setMaxPrice(e.target.value)}
                          label="Max"
                        />
                      </InputWrapper>
                    </InputWrapperParent>
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
