import React from "react";

interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: "sm" | "md";
}

const Spinner: React.FC<SpinnerProps> = ({ className = "", size = "md", ...props }) => {
  return (<>
    <span
      {...props}
      className={[
        className,
        size === "sm" ? "w-6 h-6" : "w-12 h-12",
        "animate-spin rounded-full border-2",
        "border-white border-t-transparent border-l-transparent",
      ].join(" ")}
    />
  </>);
}

export default Spinner;
