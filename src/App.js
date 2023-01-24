import './App.css';
import Box from '@mui/material/Box';
import PatientDetails from './components/PatientDetails';
import PatientSummary from './components/PatientSummary';
import student from './student.json';
import patientSummaryData from './patientSummaryData.json';

function App() {


  return (
    <div className="mainContainer">
      <h1>Patient Summary of a Patient</h1>
        <div className="patientDetails">       
        <Box
          sx={{
              width: 1010,
              height: 'max-content',
              backgroundColor: '#FFFFFF',
              margin:'1rem',
              '&:hover': {
              },
            }}
          >
            <PatientDetails patientSummaryData={patientSummaryData} />
           </Box>
        </div>

        <div className="patientSummary">
          <Box
            sx={{
                width: 1010,
                height: 'max-content',
                backgroundColor: '#FFFFFF',
                margin:'1rem',
                '&:hover': {
                },
            }}
            >
            <PatientSummary patientSummaryData={patientSummaryData} />            
          </Box>
        </div>
    </div>
  );
}

export default App;
