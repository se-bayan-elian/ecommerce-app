import React from "react";
import { StyledServicesFeatures } from "./style";
import Image from "next/image";
import Typography from "../../atoms/Typography";
const ServicesFeature = ({ feature }) => {
  return (
    <StyledServicesFeatures>
      <div className="stack">
        <div className="icon-wrapper">
          <Image
            src={feature.icon}
            alt={feature.title}
            width={24}
            height={24}
          />
        </div>
        <div className="feature-content">
          <Typography as="h5" className="feature-title">
            Secure payment
          </Typography>
          <Typography as="p" variant="default-muted">
            Have you ever finally just{" "}
          </Typography>
        </div>
      </div>
    </StyledServicesFeatures>
  );
};

export default ServicesFeature;
