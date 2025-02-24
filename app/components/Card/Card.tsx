import React from "react";
import { cn } from "@/app/utils/helpers";
import { cva, type VariantProps } from "class-variance-authority";

type CardProps = {
  padding?: "padding-small" | "padding-medium" | "padding-large";
} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants>;

// interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
//   padding?: "padding-small" | "padding-medium" | "padding-large";
// }

const cardVariants = cva("bg-white rounded-xl border border-gray-300", {
  variants: {
    padding: {
      "padding-small": "p-4",
      "padding-small-bottom": "p-4 pb-9",
      "padding-medium": "p-6",
      "padding-medium-bottom": "p-6 pb-8",
      "padding-large": "p-4",
      "padding-large-bottom": "p-4 pb-12",
    },
  },
  defaultVariants: {
    padding: "padding-medium-bottom",
  },
});

const Card: React.FC<CardProps> = ({ padding, className, ...rest }) => {
  return (
    <div className={cn(cardVariants({ padding }), className)} {...rest}>
      {rest.children}
    </div>
  );
};

export default Card;
