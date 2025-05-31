export default function Button({ 
  children, 
  onClick, 
  type = "button", 
  variant = "primary", 
  disabled = false, 
  ...props 
}) {
  const baseStyles = "px-4 py-2 rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500"
  }
  
  const disabledStyles = "opacity-50 cursor-not-allowed"
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${disabled ? disabledStyles : ""}`}
      {...props}
    >
      {children}
    </button>
  )
}