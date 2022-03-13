import React from "react";

export const Button = ({
  children,
  variant,
  className,
  color,
  size,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn m-xs ${
        variant === "contained"
          ? "btn-primary"
          : variant === "outlined"
          ? `btn-secondary txt-${color}`
          : variant === "icon"
          ? "btn-icon"
          : "btn-link"
      } ${color ? `bg-${color}` : ""} ${size ? `txt-${size}` : "txt-xs"} ${
        className ? className : ""
      } `}
    >
      {children}
    </button>
  );
};
