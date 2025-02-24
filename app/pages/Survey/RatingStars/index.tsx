import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

type RatingStarsProps = {
  value: number;
  onChange: (value: number) => void;
  max?: number;
  size?: number;
};

const RatingStars: React.FC<RatingStarsProps> = ({
  value,
  onChange,
  max = 10,
  size = 22,
}) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: max }, (_, index) => {
        const starValue = index + 1;
        return (
          <button
            key={starValue}
            type="button"
            onClick={() => onChange(starValue)}
            className="mr-1"
          >
            {value >= starValue ? (
              <FaStar size={size} className="text-yellow-500" />
            ) : (
              <FaRegStar size={size} className="text-gray-300" />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default RatingStars;
