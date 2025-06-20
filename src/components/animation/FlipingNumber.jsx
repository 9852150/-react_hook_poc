import { useState, useEffect } from "react";
import FlippingNo from "./FlippingNo";

const FlipingNumber = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % 100); // Increment the counter and reset after 99
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-b from-gray-900 to-gray-700">
      <div className="flex space-x-4">
        <FlippingNo value={Math.floor(count / 10)} />
        <FlippingNo value={count % 10} />
      </div>
    </div>
  );
};

export default FlipingNumber;
