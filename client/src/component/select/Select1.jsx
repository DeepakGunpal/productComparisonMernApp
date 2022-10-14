import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { useEffect } from 'react';
import { axiosInstance } from '../../config';

export default function BasicSelect({ setProduct1Name }) {
    const [product, setProduct] = useState('');
    const [list, setList] = useState([]);

    const getProduct = async () => {
        const productData = await axiosInstance.get('/getAllProduct');
        setList(productData.data.data);
    }

    useEffect(() => {
        getProduct();
    }, [product])

    const handleChange = (event) => {
        setProduct1Name(event.target.value);
        setProduct(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Product</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={product}
                    label="ProductName"
                    onChange={handleChange}
                >
                    {
                        list && list.map(({ name, _id }) => (
                            <MenuItem value={name} key={_id}>{name}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Box>
    );
}
