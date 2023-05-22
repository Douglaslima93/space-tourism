import React from "react";
import { Link } from "react-router-dom";

const YourDestination = () => {
    return (
        <div>
            <Link to='moon'>Moon</Link>
            <Link to='mars'>Mars</Link>
        </div>
    )
}

export default YourDestination