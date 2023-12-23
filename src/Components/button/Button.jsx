import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      className="inline-flex items-start gap-[8px] px-[20px] py-[12px] relative bg-[#f28d35] rounded-[4px] all-[unset] box-border mb-14"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
