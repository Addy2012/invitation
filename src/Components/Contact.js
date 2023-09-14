import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
const Contact = () => {
    const location = useLocation();
    useEffect(() => {
        const passedData = location.state;
        console.log(passedData)
    }, [location])
    return (
        <div>Contact</div>
    )
}

export default Contact