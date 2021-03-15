import React, { useState } from "react";

// const useInput = (initialValue) => {
//   const [input, setInput] = useState(initialValue);

//   const onChangeInput = (e) => {
//     setInput(e.target.value);
//   };

//   return [input, onChangeInput];
// };

// export default useInput;

export function useInput() {
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  return [input, handleInput];
}
