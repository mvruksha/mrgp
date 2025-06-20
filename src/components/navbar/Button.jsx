import clsx from "clsx";
import Link from "next/link";
import React, { forwardRef } from "react";

const baseStyles = {
  solid:
    "inline-flex justify-center py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors",
  outline:
    "inline-flex justify-center bg-yellow-600 border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors",
};

const variantStyles = {
  solid: {
    blue: "relative overflow-hidden bg-blue-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-blue-600 active:text-white/80 before:transition-colors",
    white:
      "bg-white text-blue-900 hover:bg-white/90 active:bg-white/90 active:text-blue-900/70",
    gray: "bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80",
  },
  outline: {
    gray: "border-gray-300 text-white hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80",
  },
};

const Button = forwardRef(function Button(
  { variant = "solid", color = "gray", className, href, ...props },
  ref
) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  );

  return href ? (
    <Link ref={ref} href={href} className={className} {...props} />
  ) : (
    <button ref={ref} className={className} {...props} />
  );
});

export default Button;
