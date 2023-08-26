"use client";
import React, { useState } from "react";
import Image from "next/image";
import LogoImage from "../../../../public/assets/images/Logo/logo.png";
import profile from "../../../../public/assets/images/Icon/person.png";
import Message from "../../../../public/assets/images/Icon/Message.png";
import Order from "../../../../public/assets/images/Icon/order.png";
import Cart from "../../../../public/assets/images/Icon/cart.png";
import Menu from "../../../../public/assets/images/Icon/menu.jpg";
import { TextInput } from "../../templates/StyledComponents"; 
import Button from "@/components/atoms/Button/page";
import {
  StyledHeaderContainer,
  StyledSearchPart,
  StyledIconsPart,
  StyledIconContainer,
  StyledLabel,
  StyledTextInput,
  SecondPartHead,
  FirstDiv,
  SecondDiv,
  Line,
} from "../../templates/StyledComponents";
import SelectInput from "../../atoms/SelectInput";
import Link from "../../atoms/Link";
import {
  options,
  help,
  Language,
  ShipTo,
} from "../../../mock/HeaderandFooterData/page";

const Header = () => {
  const [selectedOption, setSelectedOption] = useState(options[0].value);
  const handleButtonClick = () => {
    console.log("Adla");
  };
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <StyledHeaderContainer>
        <div className="Logo">
          <Image src={LogoImage} alt="logo Image" width={160} height={45} />
        </div>
        <StyledSearchPart>
          <StyledTextInput>
            <TextInput type="text" placeholder="Search" />
          </StyledTextInput>
          <div className="categorey">
            <SelectInput
              className="headSelect"
              options={options}
              value={selectedOption}
              onChange={handleSelectChange}
            /></div>
          <Line>|</Line>
          <StyledTextInput>
            <Button text="Search" onClick={handleButtonClick} />
          </StyledTextInput>
        </StyledSearchPart>
        <StyledIconsPart>
          <StyledIconContainer>
            <Image src={profile} alt="Profile Image" width={30} height={27} />
            <StyledLabel>Profile</StyledLabel>
          </StyledIconContainer>
          <StyledIconContainer>
            <Image src={Message} alt="Message Image" width={24} height={27} />
            <StyledLabel>Message</StyledLabel>
          </StyledIconContainer>
          <StyledIconContainer>
            <Image src={Order} alt="Order Image" width={26} height={27} />
            <StyledLabel>Order</StyledLabel>
          </StyledIconContainer>
          <StyledIconContainer>
            <Image src={Cart} alt="Cart Image" width={25} height={27} />
            <StyledLabel>Cart</StyledLabel>
          </StyledIconContainer>
        </StyledIconsPart>
      </StyledHeaderContainer>
      <hr />
      <SecondPartHead>
        <FirstDiv className="first">
          <Image src={Menu} alt="Menu Image" width={26} height={28} />
          <Link text="AllCategory" />
          <Link text="Hot offers" />
          <Link text="Git boxes" />
          <Link text="Projects" />
          <Link text="Menu item" />
          <SelectInput
            className="help"
            options={help}
            value={selectedOption}
            onChange={handleSelectChange}
          />
        </FirstDiv>
        <SecondDiv className="second">
          <SelectInput
            className="lang"
            options={Language}
            value={selectedOption}
            onChange={handleSelectChange}
          />
          <SelectInput
            className="shipTo"
            options={ShipTo}
            value={selectedOption}
            onChange={handleSelectChange}
          />
        </SecondDiv>
      </SecondPartHead>
      <hrStyle>
        <hr />
      </hrStyle>
    </div>
  );
};

export default Header;
