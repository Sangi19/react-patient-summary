import React from 'react'
import { Box } from '@mui/system'

export default function PatientSummary({pSummary}) {
  return (
    <div>
        <Box
            sx={{
                width: 1010,
                height: 200,
                backgroundColor: '#FFFFFF',
                '&:hover': {
                },
            }}
            >
            <h1>visitId{pSummary.visitId}</h1>
            <p>visit Notes:{pSummary.visitNotes}</p>
            <p>vitals:{pSummary.vitals}</p>
        </Box>
    </div>
  )
}
