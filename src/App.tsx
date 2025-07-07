import { useState } from 'react'
import Table from './components/Table'
import { data } from './data'
import './App.css'

const App = () => {
  const [visibleRowIndex, setVisibleRowIndex] = useState<number | null>(null)

  const handleRowClick = (index: number) => {
    setVisibleRowIndex(visibleRowIndex === index ? null : index)
  }

  return (
    <div className="app">
      <Table
        data={data}
        visibleRowIndex={visibleRowIndex}
        onRowClick={handleRowClick}
      />
    </div>
  )
}

export default App
