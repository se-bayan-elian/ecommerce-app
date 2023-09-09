import React from "react";
import  RingLoader  from "react-spinners/RingLoader";

const Loading = () => {
  return (
    <div className="loading">
      <RingLoader color="#36d7b7" loading={true} />
    </div>
  );
};

export default Loading;
