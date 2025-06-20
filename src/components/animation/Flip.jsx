import React, { useState, useEffect } from "react";

const Flip = () => {
  const [timeRemaining, setTimeRemaining] = useState(10000);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup the timer on unmount
  }, []);

  const formatTime = (time) => {
    // Convert time into a string, pad with zeroes if needed
    return String(time).padStart(5, "0"); // Format as 5 digits: 00001
  };

  const timeFormatted = formatTime(timeRemaining);
  const digitArray = timeFormatted.split("");

  return (
    <div className="App">
      <div className="App-intro">
        <div className="flip-container">
          {digitArray.map((digit, index) => (
            <div key={index} className="flip">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">{digit}</div>
                  <div className="flip-card-back">{digit}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Flip;
