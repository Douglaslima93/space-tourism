import './App.css'
import './assets/css/header.css'
import './assets/css/main.css'
import './components/Routes'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'


function App() {
  
  return (
    <div>
      <Navbar/>
      <p></p>
      <Outlet/>
    </div>
  )
}

export default App
