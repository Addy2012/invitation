import React, { useState } from 'react'
import './About.css'
import { useNavigate } from "react-router-dom";

const About = () => {
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    const proceedHandler = () => {
        let path = `/contact`;
        navigate(path, { state: { firstName, lastName } });
    }
    return (
        <div className="login-box">
            <h2>Your good name please </h2>
            <form>
                <div className="user-box">
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required={true} />
                    <label>First name</label>
                </div>
                <div className="user-box">
                    <input type="text" name="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} required={true} />
                    <label>Last name</label>
                </div>
                <button href="#" onClick={proceedHandler} disabled={firstName.length === 0 || lastName.length === 0}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default About