export default function Alert({
  children,
  type = "info",
  onClose,
  ...props
}) {
  const baseStyles = "p-4 rounded-lg border flex items-start gap-3"
  
  const types = {
    info: "bg-blue-50 border-blue-200 text-blue-800",
    success: "bg-green-50 border-green-200 text-green-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    error: "bg-red-50 border-red-200 text-red-800"
  }
  
  const icons = {
    info: "ℹ️",
    success: "✅",
    warning: "⚠️",
    error: "❌"
  }
  
  return (
    <div className={`${baseStyles} ${types[type]}`} {...props}>
      <span className="text-xl">{icons[type]}</span>
      <div className="flex-1">{children}</div>
      {onClose && (
        <button
          onClick={onClose}
          className="text-current opacity-60 hover:opacity-100 transition-opacity"
          aria-label="Close"
        >
          ✕
        </button>
      )}
    </div>
  )
}