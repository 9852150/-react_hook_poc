/* import React from "react";

const Example = () => {
  let arr1 = ["Aditi", "jayanti", "hema", "JoneDoe"];
  let arr2 = [10000, 20000, 40000, 50000];
  const str = "pumpkin pomegrante";

  const res = str.split("").reduce((acc, el, ind) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
  console.log(res);

  let strin = "abcgder"
  let vowels =['a','i','e','o','u']
  let result = ''
 for (let i = 0; i < strin.length; i++) {
   if (vowels.includes(strin[i].toLowerCase())) {
     result += "_";
   } else {
     result += strin[i];
   }
 }

  return <div>hi</div>;
};

export default Example; */

// import React, { useState, useEffect } from "react";
// import "../App.css"; // Assuming the CSS is in a file named "App.css"

// function Example() {
//   const [count, setCount] = useState(0);

//   // Function to increment the count
//   function increment() {
//     setCount((prevCount) => {
//       const newCount = prevCount + 1;
//       return newCount > 99 ? 0 : newCount;
//     });
//   }

//   // Start the counter every second
//   useEffect(() => {
//     const interval = setInterval(increment, 1000);
//     return () => clearInterval(interval); // Cleanup the interval when the component unmounts
//   }, []);

//   // Get tens and ones
//   const tens = Math.floor(count / 10);
//   const ones = count % 10;

//   return (
//     <div className="Counter">
//       <CounterUnit value={tens} />
//       <CounterUnit value={ones} />
//     </div>
//   );
// }

// function CounterUnit({ value }) {
//   const [current, setCurrent] = useState(0);
//   const [next, setNext] = useState(value);
//   const [isChanging, setIsChanging] = useState(false);

//   useEffect(() => {
//     if (current === value) return; // Skip if the value is the same

//     setNext(value); // Set the new next value

//     // Trigger the change animation
//     setIsChanging(true);
//     setTimeout(() => {
//       setCurrent(next); // Update current after the animation delay
//       setIsChanging(false); // Reset the animation state
//     }, 200); // 200ms animation duration
//   }, [value, current, next]);

//   return (
//     <div className={`Counter-unit ${isChanging ? "is-changing" : ""}`}>
//       <div className="Counter-number" data-js="current">
//         {current}
//       </div>
//       <div className="Counter-number" data-js="next">
//         {next}
//       </div>
//     </div>
//   );
// }

// export default Example;

import React, { useState, useEffect } from "react";
import "../App.css"; // Assuming the CSS is in a file named "App.css"

function Example({ target = 1000 }) {
  const [count, setCount] = useState(0);

  // Function to increment the count
  function increment() {
    if (count >= target) {
      return; // Stop incrementing if the target is reached
    }

    setCount((prevCount) => prevCount + 1);
  }

  // Start the counter every second
  useEffect(() => {
    const interval = setInterval(increment, 1000);

    return () => clearInterval(interval); // Cleanup the interval when the component unmounts
  }, [count, target]); // Dependency array includes 'count' and 'target' to ensure the counter stops once target is reached

  // Get tens and ones
  const tens = Math.floor(count / 10);
  const ones = count % 10;

  return (
    <div className="Counter">
      <CounterUnit value={tens} />
      <CounterUnit value={ones} />
    </div>
  );
}

function CounterUnit({ value }) {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(value);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    if (current === value) return; // Skip if the value is the same

    setNext(value); // Set the new next value

    // Trigger the change animation
    setIsChanging(true);
    setTimeout(() => {
      setCurrent(next); // Update current after the animation delay
      setIsChanging(false); // Reset the animation state
    }, 200); // 200ms animation duration
  }, [value, current, next]);

  return (
    <div className={`Counter-unit ${isChanging ? "is-changing" : ""}`}>
      <div className="Counter-number" data-js="current">
        {current}
      </div>
      <div className="Counter-number" data-js="next">
        {next}
      </div>
    </div>
  );
}

export default Example;
