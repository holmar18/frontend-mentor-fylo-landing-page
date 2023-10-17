import {cn} from "@/utils/utils";
import {ReactNode} from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-xl px-2.5 md:px-20 xs:max-w-xs sm:max-w-sm md:max-w-md mdx:max-w-mdx lg:max-w-lg",
        className
      )}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
