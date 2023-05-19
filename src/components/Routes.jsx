import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from '../assets/pages/Home'
import Destination from '../assets/pages/Destination'


const Routes = () => {
    return (
        <BrowserRouter>
        <Route Component={Home} path='../assets/pages/Home' exact />
        <Route Component={Destination} path='/Destination'/>
        </BrowserRouter>
    )
}

export default Routes
