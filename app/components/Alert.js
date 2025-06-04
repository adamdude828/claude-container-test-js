export default function Alert({ 
  children, 
  variant = "info",
  onClose,
  ...props 
}) {
  const baseStyles = "p-4 rounded-lg flex items-start space-x-3"
  
  const variants = {
    info: "bg-blue-50 text-blue-800 border border-blue-200",
    success: "bg-green-50 text-green-800 border border-green-200",
    warning: "bg-yellow-50 text-yellow-800 border border-yellow-200",
    error: "bg-red-50 text-red-800 border border-red-200"
  }
  
  const icons = {
    info: "ℹ️",
    success: "✓",
    warning: "⚠️",
    error: "✕"
  }
  
  return (
    <div
      className={`${baseStyles} ${variants[variant]}`}
      role="alert"
      {...props}
    >
      <span className="text-lg" aria-hidden="true">
        {icons[variant]}
      </span>
      <div className="flex-1">
        {children}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex h-8 w-8 items-center justify-center hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-gray-600"
          aria-label="Close"
        >
          <span className="text-lg" aria-hidden="true">×</span>
        </button>
      )}
    </div>
  )
}