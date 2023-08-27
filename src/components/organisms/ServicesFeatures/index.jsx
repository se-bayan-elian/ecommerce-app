import React from "react";
import { StyledServicesFeatures } from "./style";
import ServicesFeature from "../../molecules/ServicesFeature";
const ServicesFeatures = () => {
  const features = [
    {
      id: "1",
      icon: "/assets/images/icon/lockk.png",
      tile: "Secure payment",
      desc: "Have you ever finally just",
    },
    {
      id: "2",
      icon: "/assets/images/icon/Message.png",
      tile: "Customer support",
      desc: "Have you ever finally just",
    },
    {
      id: "3",
      icon: "/assets/images/icon/delivery.png",
      tile: "Free delivery",
      desc: "Have you ever finally just ",
    },
  ];
  return (
    <StyledServicesFeatures>
      {features.map((feature) => {
        return <ServicesFeature feature={feature} key={feature.id} />;
      })}
    </StyledServicesFeatures>
  );
};

export default ServicesFeatures;
