export default function Badge({
  children,
  variant = "default",
  size = "medium",
  ...props
}) {
  const baseStyles = "inline-flex items-center rounded-full font-medium"
  
  const sizes = {
    small: "px-2 py-0.5 text-xs",
    medium: "px-2.5 py-1 text-sm",
    large: "px-3 py-1.5 text-base"
  }
  
  const variants = {
    default: "bg-gray-100 text-gray-800",
    primary: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800"
  }
  
  return (
    <span
      className={`${baseStyles} ${sizes[size]} ${variants[variant]}`}
      {...props}
    >
      {children}
    </span>
  )
}