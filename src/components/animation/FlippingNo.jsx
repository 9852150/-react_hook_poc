import { useEffect, useState } from "react";

const FlippingNo = ({ value }) => {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(0);

  useEffect(() => {
    if (current !== value) {
      setNext(value);
      setTimeout(() => setCurrent(value), 210); // Adjust the transition timing as in the original CSS
    }
  }, [value, current]);

  return (
    <div className="numCounter relative inline-block h-16">
      <b className={`digit d${next}`}>{next}</b>
      <b className={`digit d${current}`}>{current}</b>
    </div>
  );
};

export default FlippingNo;
