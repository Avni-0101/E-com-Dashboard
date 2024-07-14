import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const baseurl = process.env.REACT_APP_BASE_URL

    const handleAdd = async () => {

        if (!name || !price || !category || !company) {
            setError(true);
            return false;
        }

        const userID = JSON.parse(localStorage.getItem("User"));
        console.log(userID._id)
        let result = await fetch(`${baseurl}/add-product`, {
            method: 'post',
            body: JSON.stringify({ name, price, category, company, userID }),
            headers: {
                'Content-Type': 'application/json',
                authorization: `bearer ${JSON.parse(localStorage.getItem('Token'))}`
            }
        })
        result = await result.json();

        setName("");
        setPrice("");
        setCategory("");
        setCompany("");
        navigate("/");
    }

    return (
        <div className="product">
            <h1>Add Product</h1>
            <input type="text" value={name} placeholder="Enter product name" className="inputbox" onChange={(e) => setName(e.target.value)}></input>
            {error && !name && <span className="invalid-input">Enter valid name!</span>}

            <input type="text" value={company} placeholder="Enter product company" className="inputbox" onChange={(e) => setCompany(e.target.value)}></input>
            {error && !company && <span className="invalid-input">Enter valid company!</span>}

            <input type="text" value={category} placeholder="Enter product category" className="inputbox" onChange={(e) => setCategory(e.target.value)}></input>
            {error && !category && <span className="invalid-input">Enter valid category!</span>}

            <input type="text" value={price} placeholder="Enter product price" className="inputbox" onChange={(e) => setPrice(e.target.value)}></input>
            {error && !price && <span className="invalid-input">Enter valid price!</span>}

            <button onClick={handleAdd} className="signupButton">Add Product</button>
        </div>
    )
}