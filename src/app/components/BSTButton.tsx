import React from "react";

interface BSTButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "curve";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
}

export function BSTButton({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
}: BSTButtonProps) {
  const sizeStyles = {
    sm: { padding: "6px 16px", fontSize: "0.75rem" },
    md: { padding: "10px 24px", fontSize: "0.85rem" },
    lg: { padding: "14px 32px", fontSize: "0.95rem" },
  };

  const baseStyles: React.CSSProperties = {
    fontFamily: "'Noto Sans', sans-serif",
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
    border: "none",
    cursor: "pointer",
    transition: "opacity 0.15s ease",
    ...sizeStyles[size],
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: "#14b8a6",
      color: "#111315",
      borderRadius: "0px 10px 10px 0px",
    },
    secondary: {
      backgroundColor: "#1b1f22",
      color: "#e8e8e8",
      borderRadius: "0px 10px 10px 0px",
      border: "1px solid #14b8a6",
    },
    curve: {
      backgroundColor: "#14b8a6",
      color: "#111315",
      borderRadius: "0px 10px 10px 0px",
    },
  };

  return (
    <button
      onClick={onClick}
      className={`hover:opacity-90 ${className}`}
      style={{ ...baseStyles, ...variantStyles[variant] }}
    >
      {children}
    </button>
  );
}