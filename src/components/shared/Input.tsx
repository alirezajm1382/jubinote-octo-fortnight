interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseStyles = `
    px-4 py-2 
    bg-black 
    border border-gray-700 
    rounded-md
    text-white 
    placeholder-gray-500
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
    hover:border-purple-400
    placeholder:text-sm placeholder:tracking-wide
    shadow-inner shadow-gray-900
    font-mono
  `;

  return (
    <div
      className={`${fullWidth ? "w-full" : ""}`}
      style={{ fontFamily: "var(--font-geist-mono)" }}
    >
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-1">
          {label}
        </label>
      )}
      <input
        className={`${baseStyles} ${fullWidth ? "w-full" : ""} ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
