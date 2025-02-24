import React from "react";
import xss from "xss";
import { cn } from "@/app/utils/helpers";
const HtmlRenderer = ({
  unsafeHtml,
  className,
  ...props
}: {
  unsafeHtml: string;
} & React.HTMLAttributes<HTMLDivElement>): React.ReactElement => {
  return (
    <div
      {...props}
      className={cn("content", className)}
      dangerouslySetInnerHTML={{
        __html: xss(unsafeHtml),
      }}
    />
  );
};

export default HtmlRenderer;
