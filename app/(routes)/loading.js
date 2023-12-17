import React from "react";
import Image from 'next/image'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
    return (
        <div className='grid grid-cols-1 place-items-center gap-12 p-64 text-center'>
            <Image
                src="/FNauvis-Black.png"
                alt="Nauvis Full Logo"
                sizes="100vw"
                style={{
                    width: 'auto',
                    height: '30px',
                }}
                width={8000}
                height={2000}
            />
            <Box sx={{ display: 'flex'}}>
                <CircularProgress color="inherit" />
            </Box>
        </div>
    )
}