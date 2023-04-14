import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList'
import Dashbord from './components/Dashbord/Dashbord'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <h3 className='text-7xl'>hello from tailwinnd</h3>
      <PriceList></PriceList>
      <Dashbord></Dashbord>
    </div>
  )
}

export default App
