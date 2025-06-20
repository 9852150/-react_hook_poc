import React, { useState, useMemo } from "react";
import { useDebounce } from "../customHook/UseDebounce";

const FilteredList = () => {
  const [query, setQuery] = useState("");
  const queryDebounce = useDebounce(query, 3000);
  const items = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
  ];

  // Memoize the filtered list to avoid re-filtering on every render
  const filteredItems = useMemo(() => {
    console.log("Filtering items...");
    return items.filter((item) =>
      item.toLowerCase().includes(queryDebounce.toLowerCase())
    );
  }, [queryDebounce]); // Only re-filter when 'query' changes

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search items..."
        className="border-b border-black outline-none"
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;
// import React, { useState } from "react";
// import { useDebounce } from "../customHook/UseDebounce";

// const FilteredList = () => {
//   const [query, setQuery] = useState("");
//   const dataDebounce = useDebounce(query, 3000);

//   return (
//     <div>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => {
//           setQuery(e.target.value);
//         }}
//         className="border-b border-black outline-none"
//       />
//       {dataDebounce}
//     </div>
//   );
// };

// export default FilteredList;
