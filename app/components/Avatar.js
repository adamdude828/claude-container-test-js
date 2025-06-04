export default function Avatar({
  src,
  alt = "",
  size = "medium",
  name,
  ...props
}) {
  const sizes = {
    small: "h-8 w-8 text-xs",
    medium: "h-10 w-10 text-sm",
    large: "h-12 w-12 text-base",
    xlarge: "h-16 w-16 text-lg"
  }
  
  const getInitials = (name) => {
    if (!name) return "?"
    const parts = name.split(" ")
    if (parts.length >= 2) {
      return parts[0][0] + parts[parts.length - 1][0]
    }
    return name.slice(0, 2)
  }
  
  if (src) {
    return (
      <img
        src={src}
        alt={alt || name}
        className={`${sizes[size]} rounded-full object-cover`}
        {...props}
      />
    )
  }
  
  return (
    <div
      className={`${sizes[size]} rounded-full bg-gray-300 flex items-center justify-center font-medium text-gray-600`}
      {...props}
    >
      {getInitials(name).toUpperCase()}
    </div>
  )
}