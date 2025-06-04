export default function Progress({ 
  value = 0, 
  max = 100,
  size = "md",
  variant = "primary",
  showLabel = false,
  ...props 
}) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
  
  const sizes = {
    sm: "h-2",
    md: "h-3",
    lg: "h-4"
  }
  
  const variants = {
    primary: "bg-blue-600",
    success: "bg-green-600",
    warning: "bg-yellow-600",
    danger: "bg-red-600"
  }
  
  return (
    <div className="w-full" {...props}>
      {showLabel && (
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm font-medium text-gray-700">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${sizes[size]}`}>
        <div
          className={`h-full transition-all duration-300 ease-out ${variants[variant]}`}
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