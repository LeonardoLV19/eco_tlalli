'use client'
import { useState } from "react";

type Option = {
  label: string;
  carbonValue: number;
};

type QuestionProps = {
  question: string;
  options: Option[];
  type: "single" | "multiple";
  onChange?: (value: number | number[]) => void;
};

export default function Question({ question, options, type, onChange }: QuestionProps) {
  const [selected, setSelected] = useState<number[]>([]);

  const handleSelect = (option: Option) => {
    let updated: number[];

    if (type === "single") {
      updated = [option.carbonValue];
    } else {
      updated = selected.includes(option.carbonValue)
        ? selected.filter((v) => v !== option.carbonValue)
        : [...selected, option.carbonValue];
    }

    setSelected(updated);
    onChange?.(type === "single" ? updated[0] : updated);
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-medium text-[20px] text-[#505F67] font-[Albert Sanz]">
        {question}
      </h2>
      <div className="flex flex-col gap-2">
        {options.map((option, idx) => {
          const isSelected = selected.includes(option.carbonValue);

          return (
            <label
              key={idx}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type={type === "single" ? "radio" : "checkbox"}
                name="question"
                checked={isSelected}
                onChange={() => handleSelect(option)}
                className="w-[20px] h-[20px] accent-[#505F67]"
              />
              <span className="text-[20px] font-normal text-[#505F67] font-[Albert Sanz]">
                {option.label}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
