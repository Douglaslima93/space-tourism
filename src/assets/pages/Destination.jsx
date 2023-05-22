import React from 'react'
import YourDestination from '../../components/YourDestination'
import { Outlet } from 'react-router-dom'

const Destination = () => {
    return (
        <div>
            <h1>PICK YOUR DESTINATION</h1>
            <YourDestination/>
            <Outlet/>
      </div>
    )
}

export default Destination