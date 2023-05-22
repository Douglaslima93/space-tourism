import './App.css'
import './assets/css/header.css'
import './assets/css/main.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'


function App() {
  
  return (
    <div>
      <Navbar/>
      <></>
      <Outlet/>
    </div>
  )
}

export default App
