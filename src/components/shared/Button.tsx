interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "outline_error";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  icon,
  ...props
}) => {
  const baseStyles =
    "rounded-md font-medium transition-all duration-200 ease-in-out active:scale-[0.98] font-mono";

  const variantStyles = {
    primary:
      "bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-500/20",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    outline:
      "bg-transparent border border-purple-500 text-purple-500 hover:bg-purple-700 hover:text-white",
    outline_error:
      "bg-transparent border border-red-500 text-red-500 hover:text-white hover:bg-red-500",
  };

  const sizeStyles = {
    sm: !children
      ? "px-3 py-1.5 text-sm"
      : icon
      ? "pl-3 pr-2 py-1.5 text-sm"
      : "px-3 py-1.5 text-sm",
    md: !children ? "px-4 py-2" : icon ? "pl-4 pr-3 py-2" : "px-4 py-2",
    lg: !children
      ? "px-6 py-3 text-lg"
      : icon
      ? "pl-6 pr-4 py-3 text-lg"
      : "px-6 py-3 text-lg",
  };

  return (
    <button
      style={{ fontFamily: "var(--font-geist-mono)" }}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
        ${icon ? "flex items-center gap-2" : ""}
      `}
      {...props}
    >
      {children}
      {icon && <span className="inline-flex">{icon}</span>}
    </button>
  );
};

export default Button;
