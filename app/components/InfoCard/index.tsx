import Card from "../Card/Card";

import React from "react";
import { cn } from "@/app/utils/helpers";

type InfoItem = {
  key: string;
  value: string;
};

type InfoCardProps = {
  data: InfoItem[];
} & React.HTMLAttributes<HTMLDivElement>;

const InfoCard = ({ data, ...rest }: InfoCardProps) => {
  return (
    <Card padding="padding-small" {...rest}>
      {data.map((item, index) => (
        <div
          className={cn(
            "py-2",
            // Apply border-b only if it's not the last item
            index !== data.length - 1 && "border-b"
          )}
          key={index + item.key}
        >
          <p className="text-small-regular text-gray-400 mb-2">{item.key}</p>
          <p className="text-small-regular">{item.value}</p>
        </div>
      ))}
    </Card>
  );
};

export default InfoCard;
