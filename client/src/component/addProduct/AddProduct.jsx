import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Button } from '@mui/material';
import { axiosInstance } from '../../config';
import './AddProduct.css'

const AddProduct = () => {

    const [productDetails, setProductDetails] = useState({
        name: "",
        price: "",
        ratings: 3,
    });

    const newProduct = async (data) => {
        const res = await axiosInstance.post('/createProduct', data).catch((err) => {
            window.alert(Object.values(err.response.data.message)[0])
        })
        if (res.status === 201) window.alert("Product Added")
    };

    const handleAdd = () => {
        const newProductData = { ...productDetails }
        newProduct(newProductData);
        setProductDetails("");
    };

    const validate = (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z0-9 ]+/, '');
    };

    const handleInput = ({ target: { name, value } }) => {
        console.log(name, value)
        setProductDetails({ ...productDetails, [name]: value })
    };

    return (
        <div style={{ fontSize: 'large' }}>
            <p> 1.) Product Name should be unique.</p>
            <hr />
            <div style={{
                display: 'grid',
                gridTemplateRows: 'repeat(4, 1fr)',
                gap: '0.7rem',
                fontSize: 'large',
                backgroundColor: 'white',
                padding: '10px',
                borderRadius: '10px',
                alignItems: 'center',
                justifyItems: 'center'
            }}>
                <TextField
                    className="search"
                    onChange={handleInput}
                    label="Product Name"
                    name="name"
                    type='text'
                    onKeyUp={(e) => validate(e)}
                    required

                />
                <TextField
                    className="search"
                    onChange={handleInput}
                    label="Product Price"
                    name="price"
                    type='number'

                />
                <div className='rating_options_container'>
                    <p>Rating: </p>
                    <TextField
                        className="search"
                        onChange={handleInput}
                        label="Product Ratings"
                        name="ratings"
                        type='radio'
                        value='1'
                    />
                    <label>1</label>
                    <TextField
                        className="search"
                        onChange={handleInput}
                        label="Product Ratings"
                        name="ratings"
                        type='radio'
                        value='2'
                    />
                    <label>2</label>
                    <TextField
                        className="search"
                        onChange={handleInput}
                        label="Product Ratings"
                        name="ratings"
                        type='radio'
                        value='3'
                    />
                    <label>3</label>
                    <TextField
                        className="search"
                        onChange={handleInput}
                        label="Product Ratings"
                        name="ratings"
                        type='radio'
                        value='4'
                    />
                    <label>4</label>
                    <TextField
                        className="search"
                        onChange={handleInput}
                        label="Product Ratings"
                        name="ratings"
                        type='radio'
                        value='5'
                    />
                    <label>5</label>
                </div>

                <Button
                    variant="contained"
                    style={{
                        fontWeight: 'bolder',
                        fontSize: '15px',
                        padding: '8px 15px',
                        backgroundColor: 'black',
                        margin: '0 0 0 5%',
                    }}
                    onClick={handleAdd}>Add</Button>
            </div>
        </div>
    )
}

export default AddProduct