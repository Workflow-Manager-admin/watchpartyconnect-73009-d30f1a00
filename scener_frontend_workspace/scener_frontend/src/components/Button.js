import React from "react";
import "./Button.css";

// PUBLIC_INTERFACE
export default function Button({
  children,
  variant = "primary",
  as = "button",
  ...props
}) {
  const Comp = as;
  let className = "scener-btn";
  if (variant === "cta") className += " scener-btn-cta";
  else if (variant === "secondary") className += " scener-btn-secondary";
  else if (variant === "outlined") className += " scener-btn-outlined";
  else className += " scener-btn-primary";

  return (
    <Comp className={className + (props.className ? " " + props.className : "")} {...props}>
      {children}
    </Comp>
  );
}
