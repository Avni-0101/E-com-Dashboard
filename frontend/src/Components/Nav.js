import React from 'react'
import {Link, useNavigate } from 'react-router-dom'

export default function Nav() {
    const auth = localStorage.getItem('User');
    const Navigate = useNavigate();             //hook that refreshes whenever we navigate to another url

    const logout = () => {
        localStorage.clear();       //temp storage may last for a few days
        Navigate('/signup');
    }

    return (
        <div className='navbar-container'>
            <img className='logo' alt='logo' src='lotus.jpg'/>
            {auth ? (
                <ul className='navbar'>
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/add">Add Product</Link></li>
                    <li><Link to="/update">Update Product</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
                </ul>
            ) : (
                <ul className='navbar nav-right'>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            )}
        </div>
    );
}

