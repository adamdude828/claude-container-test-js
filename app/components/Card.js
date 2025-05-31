export default function Card({ 
  children, 
  title,
  subtitle,
  variant = "default",
  className = "",
  ...props 
}) {
  const baseStyles = "rounded-lg shadow-sm border overflow-hidden"
  
  const variants = {
    default: "bg-white border-gray-200",
    elevated: "bg-white border-gray-200 shadow-md",
    outlined: "bg-white border-gray-300 shadow-none"
  }
  
  return (
    <div 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {(title || subtitle) && (
        <div className="px-6 py-4 border-b border-gray-200">
          {title && (
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          )}
          {subtitle && (
            <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
          )}
        </div>
      )}
      <div className="px-6 py-4">
        {children}
      </div>
    </div>
  )
}