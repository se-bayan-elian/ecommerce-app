"use client";
import React, { useState } from "react";
import InputWithIcon from "../../atoms/InputWithIcon";
import Style from "./style";
// images
import emailIcon from "../../../../public/assets/images/Icon/emial.png";
import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
const Subscribe = () => {
  const [email, setEmail] = useState("");
  return (
    <Style>
      <Typography as="h4" align="center">
        Subscribe on our newsletter
      </Typography>
      <Typography as="p" variant="default-muted">
        Get daily news on upcoming offers from many suppliers all over the world
      </Typography>
      <div className="subscribe__form">
        <InputWithIcon
          className="subscribe__input"
          icon={emailIcon}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="email"
        />
        <Button variant="primary" className="button__Subscribe">
          Subscribe
        </Button>
      </div>
    </Style>
  );
};

export default Subscribe;
