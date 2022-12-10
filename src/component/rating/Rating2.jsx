import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating2({ value2, setValue2 }) {
    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Rating
                name="simple-controlled"
                value={value2}
                onChange={(event, newValue) => {
                    setValue2(newValue);
                }}
            />
        </Box>
    );
}
