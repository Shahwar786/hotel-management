import { Box } from '@mui/material';
import React from 'react';
import UpdateBookingForm from '../../components/Bookings/UpdateBookingForm';
import PageHeading from '../../components/PageHeading';

function UpdateBookingPage(props) {
    return (
        <Box sx={{ padding: '30px 15px' }}>

            {/* page heading  */}
            <PageHeading text="Update Reservation" />
            {/* form  */}
            <Box sx={{
                background: '#fff',
                borderRadius: '10px',
                padding: '25px',
                boxSizing: 'borderBox',
                margin: '30px 0px'
            }}>
                <UpdateBookingForm />
            </Box>
        </Box>
    );
}

export default UpdateBookingPage;