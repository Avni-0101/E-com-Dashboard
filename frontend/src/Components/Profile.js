import React from 'react';

export default function Profile() {
    const auth = localStorage.getItem('User');
    const name = JSON.parse(auth).name;
    const email = JSON.parse(auth).email;
    return (
        <div className="profile-container">
            <h1 className="profile-heading">Welcome, {name} !!</h1>
            <p className="profile-message">You have successfully registered on our E-commerce Dashboard.</p>
            <ul className="profile-info-list">
                <li className="profile-info-header">Here is all the information we received:</li>
                <li className="profile-info-item">Name: {name}</li>
                <li className="profile-info-item">Email: {email}</li>
            </ul>
            <p className="profile-instructions">Feel free to add products, update them, and delete unworthy products from the product list directly.</p>
            <h5 className="profile-thank-you">Thank you for visiting!!</h5>
        </div>
    )
}
