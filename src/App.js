import './App.css';
import Box from '@mui/material/Box';
import PatientDetails from './components/PatientDetails';

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
        }
      ]
    }

  return (
    <div className="mainContainer">
      <h1>Patient Summary of a Patient</h1>
      <Box
        sx={{
          width: 1600,
          height: 300,
          backgroundColor: '#E7EBF0',
          '&:hover': {
          },
        }}><br />
      
          <div className="patientDetails">
            <PatientDetails patientData={patientData} />
          </div>

          <div className="patientSummary">

          </div>
      </Box>
    </div>
  );
}

export default App;
