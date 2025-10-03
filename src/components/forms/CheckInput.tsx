import React from "react";
import FlexContainer from "../FlexContainer";

interface InputCheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

const CheckInput = ({
  id,
  label,
  checked,
  onChange,
  className,
}: InputCheckboxProps) => {
  return (
    <FlexContainer className={`${className} gap-2 items-center`}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
    </FlexContainer>
  );
};

export default CheckInput;
