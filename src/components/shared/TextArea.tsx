interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  className?: string;
  rows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  error,
  fullWidth = false,
  className = "",
  rows = 4,
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
    resize-y
    min-h-[100px]
  `;

  return (
    <div
      className={`${fullWidth ? "w-full" : ""}`}
      style={{ fontFamily: "var(--font-geist-mono)" }}
    >
      {label && (
        <label className="block text-sm font-medium text-gray-200 mb-1">
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        className={`${baseStyles} ${fullWidth ? "w-full" : ""} ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default TextArea;
