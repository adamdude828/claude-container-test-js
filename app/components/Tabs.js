'use client'

import { useState } from 'react'

export default function Tabs({ 
  tabs = [], 
  defaultTab = 0,
  onChange,
  variant = "default",
  className = "",
  ...props 
}) {
  const [activeTab, setActiveTab] = useState(defaultTab)
  
  const handleTabClick = (index) => {
    setActiveTab(index)
    if (onChange) {
      onChange(index)
    }
  }
  
  const baseTabStyles = "px-4 py-2 font-medium text-sm transition-colors focus:outline-none"
  
  const variants = {
    default: {
      container: "border-b border-gray-200",
      tab: "border-b-2 -mb-px hover:text-gray-700",
      activeTab: "border-blue-500 text-blue-600",
      inactiveTab: "border-transparent text-gray-500"
    },
    pills: {
      container: "space-x-2",
      tab: "rounded-lg px-3 py-1.5",
      activeTab: "bg-blue-100 text-blue-700",
      inactiveTab: "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
    }
  }
  
  const currentVariant = variants[variant]
  
  return (
    <div className={className} {...props}>
      <div className={`flex ${currentVariant.container}`}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`
              ${baseTabStyles} 
              ${currentVariant.tab} 
              ${activeTab === index ? currentVariant.activeTab : currentVariant.inactiveTab}
            `}
            disabled={tab.disabled}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs[activeTab]?.content}
      </div>
    </div>
  )
}