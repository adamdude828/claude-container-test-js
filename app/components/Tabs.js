import { useState } from 'react'

export default function Tabs({ 
  tabs, 
  defaultTab = 0,
  onChange,
  ...props 
}) {
  const [activeTab, setActiveTab] = useState(defaultTab)
  
  const handleTabClick = (index) => {
    setActiveTab(index)
    if (onChange) {
      onChange(index)
    }
  }
  
  return (
    <div {...props}>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`
                py-2 px-1 border-b-2 font-medium text-sm transition-colors
                ${activeTab === index
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
              aria-current={activeTab === index ? 'page' : undefined}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-4">
        {tabs[activeTab]?.content}
      </div>
    </div>
  )
}