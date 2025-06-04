'use client'

import { useState } from 'react'

export default function Tooltip({ 
  children, 
  content,
  position = "top",
  delay = 0,
  className = "",
  ...props 
}) {
  const [isVisible, setIsVisible] = useState(false)
  let timeoutId
  
  const handleMouseEnter = () => {
    timeoutId = setTimeout(() => setIsVisible(true), delay)
  }
  
  const handleMouseLeave = () => {
    clearTimeout(timeoutId)
    setIsVisible(false)
  }
  
  const positions = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2"
  }
  
  const arrows = {
    top: "top-full left-1/2 -translate-x-1/2 border-t-gray-900",
    bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-gray-900",
    left: "left-full top-1/2 -translate-y-1/2 border-l-gray-900",
    right: "right-full top-1/2 -translate-y-1/2 border-r-gray-900"
  }
  
  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
      {isVisible && content && (
        <div className={`absolute ${positions[position]} z-50 pointer-events-none`}>
          <div className={`bg-gray-900 text-white text-sm px-2 py-1 rounded whitespace-nowrap ${className}`}>
            {content}
            <div 
              className={`absolute ${arrows[position]} w-0 h-0 border-4 border-transparent`}
            />
          </div>
        </div>
      )}
    </div>
  )
}