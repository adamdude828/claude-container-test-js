"use client"

import { useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import Select from './components/Select'

export default function Home() {
  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('')
  
  const selectOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ]

  const handleSubmit = () => {
    alert(`Input: ${inputValue}, Select: ${selectValue}`)
  }

  return (
    <main className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Component Demo</h1>
      
      <Input
        label="Your Name"
        placeholder="Enter your name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
      />
      
      <Select
        label="Choose Option"
        options={selectOptions}
        value={selectValue}
        onChange={(e) => setSelectValue(e.target.value)}
        required
      />
      
      <div className="flex gap-2">
        <Button onClick={handleSubmit} variant="primary">
          Submit
        </Button>
        <Button onClick={() => { setInputValue(''); setSelectValue('') }} variant="secondary">
          Clear
        </Button>
        <Button variant="outline" disabled>
          Disabled
        </Button>
      </div>
    </main>
  )
}