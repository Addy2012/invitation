import React from 'react'
import { useNavigate } from "react-router-dom";
import '../App.css'
const Home = () => {
    let navigate = useNavigate();
    const proceedHandler = () => {
        let path = `/about`;
        navigate(path);
    }
    return (
        <div className='home-page'>
            <div className='greeting-message-container'>
                <p className='greeting-message'>You are invited towards the big day of Shaily, Anand and all barnwal family.</p>
            </div>
            <div className='button-container' onClick={proceedHandler}>
                <button className='interested'>Accept Invite</button>
            </div>
        </div>
    )
}

export default Home