import './App.css';
import Box from '@mui/material/Box';
import PatientDetails from './components/PatientDetails';
import PatientSummary from './components/PatientSummary';

function App() {

  const patientData=
    {
      patientId:1433,
      allergy:"dd",
      knownDiagnosis:"DM",
      pastMedHistory:"no history of DM and no history of PTB",
      summary:[
        {
          visitId:1234,
          visitNotes:"Notes: something",
          vitals:"ht,122,wt,34"
        },
        {
          visitId:12,
          visitNotes:"Notes: ..",
          vitals:"ht,122,wt,34"
        },
        {
          visitId:1,
          visitNotes:"Notes: something",
          vitals:"ht,122,wt,34"
        },
        {
          visitId:0,
          visitNotes:"Notes: ..",
          vitals:"ht,122,wt,34"
        }
      ]
    }

  return (
    <div className="mainContainer">
      <h1>Patient Summary of a Patient</h1>
      <Box
        sx={{
          width: 1500,
          height: 650,
          backgroundColor: '#E7EBF0',
          '&:hover': {
          },
        }}><br />
      
          <div className="patientDetails">
            <PatientDetails patientData={patientData} />
          </div>

          <div className="patientSummary">
            <Box
              sx={{
                  width: 1010,
                  height: 200,
                  backgroundColor: '#FFFFFF',
                  '&:hover': {
                  },
              }}
              >
              {patientData?.summary.map(pSummary=> 
              <PatientSummary pSummary={pSummary} />
              )
            }
            </Box>
          </div>
      </Box>
    </div>
  );
}

export default App;
