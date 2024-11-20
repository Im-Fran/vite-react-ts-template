import { FC, InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Checkbox: FC<CheckboxProps> = ({ className = '', ...props }) => (
  <input
    type="checkbox"
    className={`form-checkbox h-4 w-4 text-pink-600 transition duration-150 ease-in-out ${className}`}
    {...props}
  />
);