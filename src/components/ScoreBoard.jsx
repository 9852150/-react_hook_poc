// import React, { useState, useEffect } from "react";

// const Scoreboard = ({ finalScore = 1000 }) => {
//   const [score, setScore] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const end = finalScore;
//     const duration = 12; // Duration in seconds
//     const steps = 600; // Frame rate (60 FPS)
//     const stepValue = (end - start) / (duration * steps); // Step per frame

//     const incrementScore = () => {
//       if (start < end) {
//         start += stepValue;
//         setScore(Math.floor(start)); // Update the score value
//         requestAnimationFrame(incrementScore); // Request the next animation frame
//       } else {
//         setScore(end); // Ensure we end with the final score
//       }
//     };

//     incrementScore(); // Start animation
//   }, [finalScore]); // Re-run the effect if finalScore changes

//   return (
//     <div className="flex justify-center items-center w-full h-screen bg-gray-800">
//       <div className="relative text-white text-6xl font-bold">
//         {/* Wrapper for vertical animation */}
//         <div className="overflow-hidden h-full w-full">
//           <div
//             className="transform transition-all duration-1000 ease-out"
//             /* style={{
//               transform: `translateY(-${100 - (score / finalScore) * 100}%)`, // Adjust position based on score
//             }} */
//           >
//             {score}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Scoreboard;
import React, { useState, useEffect } from "react";

const Scoreboard = ({ finalScore = 1000 }) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = finalScore;
    const duration = 12; // Duration in seconds
    const steps = 600; // Frame rate (60 FPS)
    const stepValue = (end - start) / (duration * steps); // Step per frame

    const incrementScore = () => {
      if (start < end) {
        start += stepValue;
        setScore(Math.floor(start)); // Update the score value
        requestAnimationFrame(incrementScore); // Request the next animation frame
      } else {
        setScore(end); // Ensure we end with the final score
      }
    };

    incrementScore(); // Start animation
  }, [finalScore]); // Re-run the effect if finalScore changes

  // Split the score into individual digits
  const scoreDigits = score.toString().split("");

  // Find the ones place digit (last digit)
  const onesPlace = scoreDigits[scoreDigits.length - 1];
  //   console.log(onesPlace);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="relative text-white text-6xl font-bold">
        <div className="flex">
          {/* Render all digits except for the ones place */}
          {scoreDigits.slice(0, scoreDigits.length - 1).map((digit, index) => (
            <div
              key={index}
              className="overflow-hidden"
              style={{ height: "1.2em" }}
            >
              <div className="digit">{digit}</div>
            </div>
          ))}

          {/* Render the ones place with the vertical sliding animation */}
          {onesPlace && (
            <div className="overflow-hidden" style={{ height: "1.2em" }}>
              <div
                className="digit ones-place"
                style={{
                  animation: `slide-up 1s ease-out forwards`,
                }}
              >
                {onesPlace}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
