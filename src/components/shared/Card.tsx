interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outlined";
  padding?: "none" | "sm" | "md" | "lg";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  variant = "default",
  padding = "md",
  maxWidth = "md",
}) => {
  const baseStyles = "rounded-lg flex flex-col font-mono";

  const variantStyles = {
    default: "bg-black shadow-lg",
    outlined: "border border-gray-700 bg-black/50",
  };

  const paddingStyles = {
    none: "p-0",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const maxWidthStyles = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    full: "max-w-full",
  };

  return (
    <div
      style={{ fontFamily: "var(--font-geist-mono)" }}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${paddingStyles[padding]}
        ${maxWidthStyles[maxWidth]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
