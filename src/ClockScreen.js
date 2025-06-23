import React, { useState, useEffect } from "react";
import "./styles.css";

const ClockScreen = () => {
  const [now, setNow] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const currentHour = now.getHours();
  const currentMin = now.getMinutes();
  const currentSecond = now.getSeconds();

  const renderClock = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <h1> {currentHour} SSSS</h1>
        </div>
        <div>
          <h1> {currentMin} :</h1>
        </div>
        <div>
          <h1> {currentSecond}</h1>
        </div>
      </div>
    );
  };

  return <div>{renderClock()}</div>;
};

export default ClockScreen;
