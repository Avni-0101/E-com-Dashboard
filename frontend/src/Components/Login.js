import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const baseurl = process.env.REACT_APP_BASE_URL

    useEffect(() => {
        const auth = localStorage.getItem('User');
        if (auth) {
            navigate('/')
        }
    }, [])

    const handleLogin = async () => {
        let result = await fetch(`${baseurl}/login`, {               //params : url,function-method and body and headers
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'             //provided by backend developer
            },
        });
        result = await result.json();
        console.log(result)
        if (result.auth) {
            localStorage.setItem("User", JSON.stringify(result.user))
            localStorage.setItem("Token", JSON.stringify(result.auth))
            navigate('/')
        } else {
            alert("Please enter correct details!!")
        }
    }

    return (
        <div className='login'>
            <h1>Login</h1>
            <input type='text' className='inputbox' placeholder='Enter Email' onChange={(e) => { setEmail(e.target.value) }}></input>
            <input type='password' className='inputbox' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}></input>
            <button className='signupButton' type='submit' onClick={handleLogin}>Login</button>
        </div>
    )
}
