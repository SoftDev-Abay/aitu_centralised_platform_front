import React from "react";

const Badge = ({ text }: { text: string }) => {
  return (
    <div className="px-1 py-2 flex justify-center items-center text-small-regular">
      {text}
    </div>
  );
};

export default Badge;
