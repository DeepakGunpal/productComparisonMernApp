import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BasicSelect1 from '../select/Select1';
import BasicSelect2 from '../select/Select2';
import { useState, useEffect } from 'react';
import { axiosInstance } from '../../config';
import BasicRating1 from '../rating/Rating1';
import BasicRating2 from '../rating/Rating2';

export default function BasicTable() {

    const [product1, setProduct1] = useState({})
    const [product2, setProduct2] = useState({})
    const [product1Name, setProduct1Name] = useState('phone')
    const [product2Name, setProduct2Name] = useState('phone2')
    const [value1, setValue1] = useState(2.5);
    const [value2, setValue2] = useState(2.5);

    const getProduct1 = async (product1Name) => {
        const productData = await axiosInstance.get(`/getProduct/${product1Name}`);
        setProduct1(productData.data.data);
        setValue1(productData.data.data.ratings);
    }

    const getProduct2 = async (product2Name) => {
        const productData = await axiosInstance.get(`/getProduct/${product2Name}`);
        setProduct2(productData.data.data);
        setValue2(productData.data.data.ratings);
    }

    useEffect(() => {
        getProduct1(product1Name);
        getProduct2(product2Name);
    }, [product1Name, product2Name])


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="center"><BasicSelect1 setProduct1Name={setProduct1Name} /></TableCell>
                        <TableCell align="center"><BasicSelect2 setProduct2Name={setProduct2Name} /></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow><TableCell><br /></TableCell></TableRow>
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            <p>Name</p>
                        </TableCell>
                        <TableCell align="center"><p>{product1.name}</p></TableCell>
                        <TableCell align="center"><p>{product2.name}</p></TableCell>
                    </TableRow>

                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            <p>Price</p>
                        </TableCell>
                        <TableCell align="center"><p>{product1.price}</p></TableCell>
                        <TableCell align="center"><p>{product2.price}</p></TableCell>
                    </TableRow>

                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            <p>Ratings</p>
                        </TableCell>
                        <TableCell align="center"><p><BasicRating1 value1={value1} setValue1={setValue1} /></p></TableCell>
                        <TableCell align="center"><p><BasicRating2 value2={value2} setValue2={setValue2} /></p></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer >
    );
}
