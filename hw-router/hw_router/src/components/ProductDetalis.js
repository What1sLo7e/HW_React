import React from "react";
import { useParams, useNavigate } from 'react-router-dom' 

const ProductDetalis = () => {
    const params = useParams() 
    const navigate = useNavigate()

    const onClick = () => {
        navigate('/product')
    }
    
    console.log(params)
    return (
    <> 
        <h1>Product Detalis</h1>
        <p>Product {params.id}</p>
        <button type="button" onClick={onClick}>Back</button>
    </>
    )
}

export default ProductDetalis