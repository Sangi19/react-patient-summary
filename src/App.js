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
      <h2>patient json data:{patientSummaryData.code}</h2>

      <Box
        sx={{
          width: 1500,
          height: 1500,
          backgroundColor: '#E7EBF0',
          '&:hover': {
          },
        }}><br />
      
          <div className="patientDetails">       
              <PatientDetails patientSummaryData={patientSummaryData} />
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
              {/* {patientData?.summary.map(pSummary=> 
              <PatientSummary pSummary={pSummary} />
              )} */}
            </Box>
          </div>
      </Box>
    </div>
  );
}

export default App;
