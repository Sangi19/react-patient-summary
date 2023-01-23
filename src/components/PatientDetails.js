import React from 'react'
import Box from '@mui/material/Box';

export default function PatientDetails({patientSummaryData}) {
  return (
    <Box
      sx={{
        width: 1010,
        height: 200,
        backgroundColor: '#FFFFFF',
        '&:hover': {
        },
      }}
    >
        <h2>Patient Details</h2>
        <div>
            {
            patientSummaryData?.patient_detail.map(pdetail=>
                <p>{pdetail.content}</p>
            )}
        </div>
    </Box>
  );
}
