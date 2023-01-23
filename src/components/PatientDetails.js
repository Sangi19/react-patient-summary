import React from 'react'
import Box from '@mui/material/Box';

export default function PatientDetails({patientData}) {
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
            <p>patient Id:{patientData.patientId}</p>
            <p>Allergy:{patientData.allergy}</p>
            <p>known Diagnosis:{patientData.knownDiagnosis}</p>
            <p>past Medical History:{patientData.pastMedHistory}</p>
        </div>
    </Box>
  );
}
