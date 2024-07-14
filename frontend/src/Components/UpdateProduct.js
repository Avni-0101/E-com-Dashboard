import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateProduct() {

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();
    const params = useParams();
    const baseurl = process.env.REACT_APP_BASE_URL

    useEffect(() => {
        getProductDetails();
    }, [])

    const getProductDetails = async () => {
        let result = await fetch(`${baseurl}/product/${params.id}`, {
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('Token'))}`
            }
        })
        result = await result.json();

        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }

    const handleUpdate = async () => {
        let result = await fetch(`${baseurl}/product/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'Content-Type': 'application/json',
                authorization: `bearer ${JSON.parse(localStorage.getItem('Token'))}`
            }
        })
        result = await result.json();
        navigate("/");
    }

    return (
        <div className="product">
            <h1>Update Product</h1>
            <input type="text" value={name} placeholder="Enter product name" className="inputbox" onChange={(e) => setName(e.target.value)}></input>

            <input type="text" value={company} placeholder="Enter product company" className="inputbox" onChange={(e) => setCompany(e.target.value)}></input>

            <input type="text" value={category} placeholder="Enter product category" className="inputbox" onChange={(e) => setCategory(e.target.value)}></input>

            <input type="text" value={price} placeholder="Enter product price" className="inputbox" onChange={(e) => setPrice(e.target.value)}></input>

            <button onClick={handleUpdate} className="signupButton">Update Product</button>
        </div>
    )
}