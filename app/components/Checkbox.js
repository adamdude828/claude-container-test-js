export default function Checkbox({ 
  label, 
  checked, 
  onChange, 
  required = false, 
  disabled = false,
  error,
  ...props 
}) {
  const checkboxStyles = `
    h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
  `
  
  return (
    <div className="mb-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={checkboxStyles}
          {...props}
        />
        {label && (
          <label className="ml-2 block text-sm text-gray-900">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}