import React from "react";

const RemoveDuplicate = () => {
  // ------------------------------------  new set()
  let arr1 = [1, 2, 3, 4, 5, 1, 2, 6, 7, 3];
  let uniqueArr1 = [...new Set(arr1)]; // Convert the Set back to an array
  console.log(uniqueArr1); // [1, 2, 3, 4, 5, 6, 7]

  //   -----------------sort and for loop
  let arr2 = [1, 2, 3, 4, 5, 1, 2, 6, 7, 3];
  arr2.sort((a, b) => a - b); // Sort the array
  let uniqueArr2 = [];
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] !== arr2[i - 1]) {
      uniqueArr2.push(arr2[i]);
    }
  }
  console.log(uniqueArr2); // Output: [1, 2, 3, 4, 5, 6, 7]

  //   ---------------------for Each
  let arr3 = [1, 2, 3, 4, 5, 1, 2, 6, 7, 3];
  let uniqueArr3 = [];
  let seen = new Set();
  arr3.forEach((value) => {
    if (!seen.has(value)) {
      seen.add(value);
      uniqueArr3.push(value);
    }
  });
  console.log(uniqueArr3); // Output: [1, 2, 3, 4, 5, 6, 7]

  //   --------------------------reduce
  let arr4 = [1, 2, 3, 4, 5, 1, 2, 6, 7, 3];
  let uniqueArr4 = arr4.reduce((acc, value) => {
    if (!acc.includes(value)) {
      acc.push(value);
    }
    return acc;
  }, []);
  console.log(uniqueArr4); // Output: [1, 2, 3, 4, 5, 6, 7]

  //   --------------------filter
  let arr5 = [1, 2, 3, 4, 5, 1, 2, 6, 7, 3];
  let uniqueArr5 = arr5.filter(
    (value, index, self) => self.indexOf(value) === index
  );
  console.log(uniqueArr5); // Output: [1, 2, 3, 4, 5, 6, 7]

  return (
    <>
      <div className="bg-slate-600 text-white min-h-screen flex flex-col gap-4 p-8">
        <p className="text-[24px] underline font-bold text-blue-950">
          {" "}
          new Set()
        </p>
        <p>
          Set is a built-in JavaScript object that stores unique values. When
          you create a new instance of Set using new Set(), you are creating an
          empty set that will only store unique elements (no duplicates).
        </p>
        <p>let mySet = new Set()</p> //new Set(): This syntax creates an empty
        set.
        <p>
          One of the main features of a Set is that it only allows unique
          values. If you try to add a duplicate value, it will be ignored.
        </p>
        <ul>
          <p className="font-bold text-black">Basic Methods of Set</p>
          <li type="disc">
            add(value): Adds a new value to the set. If the value already
            exists, it is not added again.
          </li>
          <li type="disc">
            has(value): Checks whether the set contains a certain value. Returns
            true if the value exists, otherwise false.
          </li>
          <li type="disc">
            delete(value): Removes a specific value from the set. Returns true
            if the value was successfully removed, otherwise false.
          </li>
          <li type="disc">clear(): Removes all values from the set</li>
          <ul>
            <li className="font-bold text-black" type="1">
              let mySet = new Set([1, 2, 3]);
            </li>
            <li type="disc">
              mySet.add(4); // Adds 4 to the set <br />
              console.log(mySet.has(3)); //true (3 exists in the set)
              <br />
              console.log(mySet.has(5)); // false (5 does not exist in the set)
            </li>
            <li type="disc">
              mySet.delete(2); // Removes 2 from the set, console.log(mySet); //
              Set {(1, 3, 4)}
            </li>
            <li type="disc">
              mySet.clear(); // Removes all values console.log(mySet); // Set {}
            </li>
            <li></li>
          </ul>
        </ul>
        <div>
          <ul>
            <li>let arr = [1, 2, 3, 4, 5, 1, 2, 6, 7, 3]</li>
            <li>
              let uniNumber = new Set(arr) // remove the duplicacy and return an
              object console.log(uniNumber); // 1,2,3,4,5,6,7 in object
            </li>
            <li>
              let uniqueArr = [...new Set(arr)]; // Convert the Set back to an
              array console.log(uniqueArr); // [1, 2, 3, 4, 5, 6, 7]
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RemoveDuplicate;
