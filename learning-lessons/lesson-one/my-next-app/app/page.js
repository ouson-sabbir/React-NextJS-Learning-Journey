"use client";

import React, { useState } from "react";

const Page = () => {
  const [mark, setMarks] = useState(80);

  const markChange = () => {
    setMarks(90);
  };

  return (
    <>
      <h1 className="w-100 font-bold text-yellow-400 h-100 flex items-center bg-amber-950">
        My Mark is {mark}
      </h1>
      <button
        onClick={markChange}
        className="rounded-sm p-3 bg-black text-white font-medium"
      >
        Click Me
      </button>
    </>
  );
};

export default Page;
