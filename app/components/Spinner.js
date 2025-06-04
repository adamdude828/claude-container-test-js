export default function Spinner({ 
  size = "md",
  color = "primary",
  className = "",
  ...props 
}) {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  }
  
  const colors = {
    primary: "text-blue-600",
    secondary: "text-gray-600",
    success: "text-green-600",
    danger: "text-red-600",
    warning: "text-yellow-600",
    white: "text-white"
  }
  
  return (
    <div className={`inline-block ${className}`} {...props}>
      <svg
        className={`animate-spin ${sizes[size]} ${colors[color]}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  )
}