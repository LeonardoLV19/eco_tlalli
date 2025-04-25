<<<<<<< Updated upstream
"use client";

import { Input } from "../ui/input";
import PersonIcon from '@mui/icons-material/Person';

const InputBox = () => {
  return (
    <div className="flex flex-col items-start m-5">
      <label
        htmlFor="input-box"
        className="mb-2"
        style={{ fontSize: "16px", color: "#525252", fontFamily: "'Alkatra', sans-serif" }}
      >
        Nombre en la tarjeta
      </label>
      <div className="relative w-[300px]">
        <PersonIcon 
          className="absolute right-3 top-1/2 transform -translate-y-1/2" 
          fontSize="medium"
          style={{ color: "#78B689" }}
        />
        <Input
          id="input-box"
          type="text"
          placeholder="Escribe aquí"
          className="pr-10 pl-4 py-2 border-2 rounded-md w-full text-base"
          style={{ fontFamily: "'Alkatra', sans-serif" }}
        />
      </div>
    </div>
  );
};

export default InputBox;
=======
>>>>>>> Stashed changes
