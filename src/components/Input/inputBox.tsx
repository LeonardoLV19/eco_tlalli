"use client";

import { Input } from "../ui/input";
import PersonIcon from "@mui/icons-material/Person";
import type { ReactNode } from "react";

type InputBoxProps = {
  labelText?: string;
  placeholder?: string;
  icon?: ReactNode | null;
};

const InputBox = ({
  labelText = "Nombre en la tarjeta",
  placeholder = "Escribe aquí",
  icon = <PersonIcon style={{ color: "#78B689" }} fontSize="medium" />,
}: InputBoxProps) => {
  return (
    <div className="flex flex-col items-start m-5">
      <label
        htmlFor="input-box"
        className="mb-2"
        style={{
          fontSize: "16px",
          color: "#525252",
          fontFamily: "'Alkatra', sans-serif",
        }}
      >
        {labelText}
      </label>
      <div className="relative w-[300px]">
        {icon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {icon}
          </div>
        )}
        <Input
          id="input-box"
          type="text"
          placeholder={placeholder}
          className={`pl-4 py-2 border-2 rounded-md w-full text-base ${
            icon ? "pr-10" : "pr-4"
          }`}
          style={{ fontFamily: "'Alkatra', sans-serif" }}
        />
      </div>
    </div>
  );
};

export default InputBox;
