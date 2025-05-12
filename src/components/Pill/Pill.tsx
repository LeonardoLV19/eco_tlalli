"use client";

import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import * as React from "react";
import { createSvgIcon } from "@mui/material/utils";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const PlusIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={3}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>,
  "Plus"
);

type PillProps = {
  text: string;
  color: "volver" | "añadir" | "personalizada" | "continue";
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Añadimos onClick aquí
};

const Pill = ({ text, color, onClick }: PillProps) => {
  const colorMap = {
    volver:
      "bg-[#4CAF4F] text-white border border-[#4CAF4F] text-lg font-bold hover:bg-[#3e9b40] hover:shadow-md",
    añadir:
      "bg-[#4CAF4F] text-white border border-[#4CAF4F] text-lg font-bold hover:bg-[#3e9b40] hover:shadow-md",
    personalizada:
      "bg-[#4CAF4F] text-white border border-[#4CAF4F] text-lg font-bold hover:bg-[#3e9b40] hover:shadow-md",
    continue:
      "bg-[#4CAF4F] text-white border border-[#4CAF4F] text-lg font-bold hover:bg-[#3e9b40] hover:shadow-md",
  };

  return (
    <button onClick={onClick} className={cn(
        "rounded-full px-4 py-1 text-sm font-sans inline-flex items-center gap-2",
        colorMap[color]
      )}>
      {color === "volver" && <ArrowBackIcon fontSize="large" />}
      <span>{text}</span>
      {color === "añadir" && <PlusIcon fontSize="medium" />}
      {color === "continue" && <ArrowForwardIcon fontSize="large" />}
    </button>
  );
};

export default Pill;
