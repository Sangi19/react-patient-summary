import React from 'react'
import { Box } from '@mui/system'

export default function PatientSummary({patientSummaryData}) {
  return (
    <div>
        {patientSummaryData?.result.map(item=>                
        <Box
            sx={{
                height: 'max-content',
                backgroundColor: '#f5efef',
                '&:hover': {
                },
            }}
            >
              {/* to split into two, use a row with 2 cols */}
            <h5>{item.date}</h5>
            <h5>Visisted:{item.doctor}</h5>
            {item.summary.map(psummary=>
              <span> <p><strong>{psummary.content.split(':')[0]}:</strong>{psummary.content.split(':')[1]}</p></span>
            )}
        </Box>
        )}
    </div>
  )
}
