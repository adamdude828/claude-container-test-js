export default function Avatar({ 
  src, 
  alt = "", 
  size = "md",
  fallback,
  ...props 
}) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  }
  
  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
    xl: "text-lg"
  }
  
  return (
    <div 
      className={`${sizes[size]} rounded-full overflow-hidden bg-gray-200 flex items-center justify-center`}
      {...props}
    >
      {src ? (
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
      ) : (
        <span className={`text-gray-600 font-medium ${textSizes[size]}`}>
          {fallback || alt.charAt(0).toUpperCase()}
        </span>
      )}
    </div>
  )
}