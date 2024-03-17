import './App.css'
import TableCurrency from './components/Table/Table'
import { useCurrency } from './hooks/useCurrency'

function App() {
 const {isLoading, data} =  useCurrency()
  return (
    <>
      <TableCurrency isLoading={isLoading} dataSource={data} />
    </>
  )
}

export default App
