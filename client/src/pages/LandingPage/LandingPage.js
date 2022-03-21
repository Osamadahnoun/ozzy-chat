import React from "react";
import { useHistory } from "react-router-dom";
import video1 from "./monitor.mp4";

const LandingPage = () => {
  const history = useHistory();

  const redirect = () => {
    history.push("/auth");
  };
  return (
    <div className="landingPage">
      <h1>Welcome to OzzyChat</h1>
      <button onClick={redirect}>Chat away!</button>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={video1} type="video/mp4" />
      </video>
    </div>
  );
};

export default LandingPage;
