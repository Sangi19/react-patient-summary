import React from 'react'
import Box from '@mui/material/Box';

export default function PatientDetails({patientSummaryData}) {
  return (
    <Box
     sx={{
      height: 'max-content',
      backgroundColor: '#f5efef',
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
