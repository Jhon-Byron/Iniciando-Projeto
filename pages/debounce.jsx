import { useState, useEffect, useRef } from 'react'

export default function DebouncePage() {
  const [text, setText] = useState('')
  const debounce = useRef(null)

  const searchData = () => {
    if (!text) return

    console.log('...search data...')
    console.log(text)
  }

  useEffect(() => {
    if (debounce.current) clearInterval(debounce.current)

    debounce.current = setTimeout(searchData, 2000)

    return () => clearInterval(debounce.current)
  }, [text])

  return (
    <div>
      <h4>Debounce:</h4>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="search..."
      />
    </div>
  )
}
