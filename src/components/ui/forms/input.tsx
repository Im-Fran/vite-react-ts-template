import {FC, InputHTMLAttributes} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export const Input: FC<InputProps> = ({ className = '', ...props }) => <input
  className={`w-full px-3 py-2 text-gray-700 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-600 dark:bg-neutral-600 dark:text-gray-300 dark:border-gray-600 dark:focus:ring-pink-500 ${className}`}
  {...props}
/>
