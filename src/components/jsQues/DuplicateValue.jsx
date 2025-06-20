import React from "react";

const DuplicateValue = () => {
  // -------------sort and for loop
  function findDuplicates1(arr) {
    arr.sort(); // Sort the array
    let duplicates = [];
    let newArr = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i - 1]) {
        // Check if current is same as previous
        duplicates.push(arr[i]);
      } else newArr.push(arr[i]);
    }

    return duplicates;
  }

  let arr1 = [1, 2, 3, 4, 5, 1, 2, 6, 7, 3];
  let duplicates1 = findDuplicates1(arr1);
  console.log("Duplicates found:", duplicates1);

  //  ----------------------reduce method
  function findDuplicates2(arr) {
    return arr.reduce((duplicates, currentValue, index, self) => {
      if (
        self.indexOf(currentValue) !== index &&
        !duplicates.includes(currentValue)
      ) {
        duplicates.push(currentValue);
      }
      return duplicates;
    }, []);
  }

  let arr2 = [1, 2, 3, 4, 5, 1, 2, 6, 7, 3];
  let duplicates2 = findDuplicates2(arr2);
  console.log("Duplicates found:", duplicates2);

  // ===========filter method
  function findDuplicates(arr) {
    return arr.filter((value, index, self) => {
      return self.indexOf(value) !== index; // If the value appears later in the array
    });
  }

  let arr = [1, 2, 3, 4, 5, 1, 2, 6, 7, 3];
  let duplicates = findDuplicates(arr);
  console.log("Duplicates found:", duplicates); // Output: [1, 2, 3]

  return (
    <>
      <div className="bg-slate-600 text-white min-h-screen flex flex-col gap-4 p-8">
        Remove Duplicate Value from an array
      </div>
    </>
  );
};

export default DuplicateValue;
