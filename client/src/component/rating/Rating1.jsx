import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating1({ value1, setValue1 }) {
    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Rating
                name="simple-controlled"
                value={value1}
                onChange={(event, newValue) => {
                    setValue1(newValue);
                }}
            />
        </Box>
    );
}
