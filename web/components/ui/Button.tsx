import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  showArrow?: boolean;
}

export function Button({
  children,
  href,
  onClick,
  className = "",
  type = "button",
  showArrow = true,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 bg-alur-ink text-white font-semibold text-base py-4 px-8 rounded-lg transition-all duration-200 hover:opacity-85 active:scale-[0.99] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alur-ink focus-visible:ring-offset-2";

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <svg
          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseClasses} group ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} group ${className}`}
    >
      {content}
    </button>
  );
}
