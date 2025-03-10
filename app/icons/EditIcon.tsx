import React from "react";
import { IconProps } from "../constants/IconTypes";
const EditIcon = ({
  className = "",
  width = 24,
  height = 24,
  color = "#26333D",
}: IconProps) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3805_3744)">
        <path
          d="M9.16675 1.66699H7.50008C3.33341 1.66699 1.66675 3.33366 1.66675 7.50033V12.5003C1.66675 16.667 3.33341 18.3337 7.50008 18.3337H12.5001C16.6667 18.3337 18.3334 16.667 18.3334 12.5003V10.8337"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.3666 2.51639L6.7999 9.08306C6.5499 9.33306 6.2999 9.82472 6.2499 10.1831L5.89157 12.6914C5.75823 13.5997 6.3999 14.2331 7.30823 14.1081L9.81657 13.7497C10.1666 13.6997 10.6582 13.4497 10.9166 13.1997L17.4832 6.63306C18.6166 5.49972 19.1499 4.18306 17.4832 2.51639C15.8166 0.849722 14.4999 1.38306 13.3666 2.51639Z"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.425 3.45801C12.7014 4.43923 13.225 5.33306 13.9458 6.05388C14.6667 6.7747 15.5605 7.29835 16.5417 7.57467"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3805_3744">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default EditIcon;
