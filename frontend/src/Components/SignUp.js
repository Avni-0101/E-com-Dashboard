import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignUp() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const Navigate = useNavigate();
    const baseurl = process.env.REACT_APP_BASE_URL

    useEffect(()=>{
      const auth = localStorage.getItem('User');
      if(auth)
      {
        Navigate('/')
      }
    },[])

    const handleSubmit = async ()=>{
        let result = await fetch(`${baseurl}/register`,{               //params : url,function-method and body and headers
            method: 'post',
            body: JSON.stringify({name,email,password}),
            headers: {
              'Content-Type':'application/json'             //provided by backend developer
            },
        });
        result = await result.json();
        localStorage.setItem("User",JSON.stringify(result.result)) 
        localStorage.setItem("Token",JSON.stringify(result.auth)) 
        if(result)
        {
          Navigate('/');
        }
    }

  return (
    <div className='register'>
      <h1>Register</h1>
      <input className='inputbox' type='text' name='name' placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}></input>
      <input className='inputbox' type='text' name='email' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
      <input className='inputbox' type='password' name='password' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
      <button className='signupButton' type='submit' onClick={handleSubmit}>Sign Up</button>
    </div>
  )
}
