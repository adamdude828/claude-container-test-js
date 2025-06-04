export default function Progress({
  value = 0,
  max = 100,
  label,
  showPercentage = false,
  variant = "primary",
  size = "medium",
  ...props
}) {
  const percentage = Math.round((value / max) * 100)
  
  const baseStyles = "w-full bg-gray-200 rounded-full overflow-hidden"
  
  const sizes = {
    small: "h-1",
    medium: "h-2",
    large: "h-4"
  }
  
  const variants = {
    primary: "bg-blue-600",
    success: "bg-green-600",
    warning: "bg-yellow-600",
    danger: "bg-red-600"
  }
  
  return (
    <div {...props}>
      {(label || showPercentage) && (
        <div className="flex justify-between mb-1">
          {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
          {showPercentage && <span className="text-sm text-gray-500">{percentage}%</span>}
        </div>
      )}
      <div className={`${baseStyles} ${sizes[size]}`}>
        <div
          className={`h-full transition-all duration-300 ${variants[variant]}`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax={max}
        />
      </div>
    </div>
  )
}