import React from "react";
import { cn } from "../../utils/helpers";
type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  color?:
    | "primary"
    | "accent"
    | "highlight"
    | "muted"
    | "success"
    | "danger"
    | "dark"
    | "empty";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const sizeClasses: Record<string, string> = {
  sm: "px-3 py-2 text-sm rounded",
  md: "px-4 py-2 text-base rounded-md",
  lg: "px-6 py-3 text-lg rounded-lg",
};

const colorClasses: Record<string, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  accent: "bg-indigo-600 text-white hover:bg-indigo-700",
  highlight: "bg-yellow-400 text-black hover:bg-yellow-500",
  muted: "bg-gray-300 text-black hover:bg-gray-400",
  success: "bg-green-600 text-white hover:bg-green-700",
  danger: "bg-red-600 text-white hover:bg-red-700",
  dark: "bg-gray-800 text-white hover:bg-gray-900",
  empty: "bg-transparent text-dark border border-gray-300 hover:bg-gray-50",
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = "",
  size = "md",
  color = "primary",
  ...rest
}) => {
  const baseClasses =
    "inline-block font-medium text-center transition duration-300 ease-in-out focus:outline-none";
  return (
    <button
      onClick={onClick}
      className={cn(
        baseClasses,
        sizeClasses[size],
        colorClasses[color],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
