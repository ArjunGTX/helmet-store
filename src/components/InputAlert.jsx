import React from "react";
import "../styles/components/input-alert.css";
import { GoAlert } from "react-icons/go";

export const InputAlert = ({ message, className }) => {
  return (
    <div
      className={`flex-row flex-center input-alert ${
        className ? className : ""
      }`}
    >
      <GoAlert className="txt-error alert-icon" />
      <p className="txt-error">{message}</p>
    </div>
  );
};
