import React from "react";
import Typography from "../Typography";
import Card from "../userAdvertCard";
const AdvertCard = ({ advert, background }) => {
  const cardStyle = {
    width: "70%",
    color: "#fff",
  };
  return (
    <Card variant={background}>
      <Typography as="p" variant="default" style={cardStyle}>
        {advert}
      </Typography>
    </Card>
  );
};

export default AdvertCard;
