"use client";

import { Input } from "../ui/input";

const InputBox = () => {
  return (
    <div className="flex flex-col items-center m-5">
      <label
        htmlFor="input-box"
        className="text-lg font-bold mb-2 text-gray-700"
      >
        Enter your text:
      </label>
      <Input
        id="input-box"
        type="text"
        placeholder="Type here..."
        className="px-4 py-2 border-2 border-green-500 rounded-md w-[300px] text-base focus:border-green-700 transition-colors"
      />
    </div>
  );
};

export default InputBox;
