import React from "react";
import styles from "./style.module.css";

import Spinner from "../spinner/index";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const common = [
  "flex",
  "justify-center",
  "items-center",
  "rounded-full",
  "py-2",
  "px-8",
  "cursor-pointer",
  "uppercase",
  "font-medium",
  "disabled:cursor-not-allowed",
  "w-full"
].join(" ");

const Button: React.FC<ButtonProps> = ({ className = "", loading = false, children, ...props }) => {
  return (<>
    <button {...props} className={`${styles.button} ${className} ${common} border-2 overflow-hidden relative`} disabled={loading}>
      {!loading
        ? (<>
          <span
            className={[
              styles["button-reveal"],
              common,
              "absolute top-0 left-0 w-full h-full",
              "text-black stroke-black bg-white border-black",
            ].join(" ")}
          >
            {children}
          </span>
        </>)
        : (null)}
      {loading && <><Spinner size={"sm"} />&nbsp;</>}{children}
    </button>
  </>);
}

export default Button;
