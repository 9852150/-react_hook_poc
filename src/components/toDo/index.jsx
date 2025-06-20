// import React, { useState } from "react";

// const Todo = () => {
//   const [values, setValues] = useState("");
//   const [inputValues, setInputValues] = useState([]);
//   const [edit, setEdit] = useState(false);

//   const handleChange = () => {
//     if (edit) {
//       setInputValues((prev) => prev.map((el) => (el === edit ? values : el)));
//       setEdit(false);
//     } else {
//       setInputValues([...inputValues, values]);
//       setValues("");
//     }
//   };

//   const handleDelete = ({ val, ind }) => {
//     let updatedData = inputValues.filter((el) => el != val);
//     setInputValues(updatedData);
//   };
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <input
//         className="border border-black"
//         type="text"
//         value={values}
//         onChange={(e) => setValues(e.target.value)}
//       />
//       <button onClick={handleChange}>Click here</button>

//       <div>
//         <ul>
//           {inputValues.map((val, ind) => (
//             <div key={ind} className="">
//               <div className="flex items-center gap-10">
//                 <li>{val}</li>
//                 <div
//                   onClick={() => {
//                     setEdit(val), setValues(val);
//                   }}
//                   className="cursor-pointer"
//                 >
//                   /
//                 </div>
//                 <div
//                   onClick={(e) => handleDelete({ val, ind })}
//                   className="text-xs text-[red] cursor-pointer"
//                 >
//                   x
//                 </div>
//               </div>
//             </div>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Todo;
import React, { useState } from "react";

const Todo = () => {
  const [inpVal, setInpVal] = useState("");
  const [add, setAdd] = useState([]);
  console.log({ add });

  const [edit, setEdit] = useState(false);

  const handleAdd = () => {
    if (edit) {
      setAdd((pre) => pre.map((val) => (val == edit ? inpVal : val)));
    } else {
      setAdd([...add, inpVal]);
    }
    setInpVal("");
  };
  const handleDelete = ({ val, ind }) => {
    const updated = add.filter((value) => value != val);
    setAdd(updated);
  };
  return (
    <div className="bg-[gray] flex justify-center items-center gap-6 min-h-screen">
      <input
        type="text"
        value={inpVal}
        onChange={(e) => setInpVal(e.target.value)}
        className="border border-[red] bg-black text-white"
      />
      <button onClick={handleAdd} className="bg-[red] rounded-[8px] p-1">
        Add
      </button>
      <div className="mt-10">
        {add.map((val, ind) => (
          <div className=" flex items-center gap-4">
            <div>{val}</div>
            <div onClick={() => handleDelete({ val, ind })}>Delete</div>
            <div
              onClick={() => {
                setInpVal(val);
                setEdit(val);
              }}
            >
              Edit
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
