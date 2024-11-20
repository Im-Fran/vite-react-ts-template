import { FC, HTMLAttributes, useState, useEffect } from "react";
import { clsx } from "clsx";

interface ErrorProps extends HTMLAttributes<HTMLDivElement> {
  errors?: string[];
}

export const Error: FC<ErrorProps> = ({ errors = [], className = '', ...props }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    if (errors.length > 0) {
      setShowComponent(true);
    } else {
      setShowComponent(false);
    }
  }, [errors]);

  return (
    <div
      className={clsx([
        `relative ${className} transition-all duration-300 transform`,
        {
          "translate-y-0 opacity-100 h-auto": showComponent,
          "-translate-y-full opacity-0 h-0": !showComponent,
        }
      ])}
      {...props}
    >
      <span
        className="text-red-600 cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {errors[0]}
        {errors.length > 1 && <span className="ml-1">▼</span>}
      </span>
      <div
        className={clsx(
          "absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 transition-transform duration-300",
          {
            "transform translate-y-0 opacity-100": showDropdown,
            "transform -translate-y-4 opacity-0": !showDropdown,
          }
        )}
      >
        {showDropdown && errors.length > 1 && (
          <ul className="py-1">
            {errors.map((error, index) => (
              <li key={index} className="px-4 py-2 text-red-600">
                {error}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};