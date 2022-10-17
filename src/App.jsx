import {useState, useEffect} from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import PatientList from "./components/PatientList"

function App() {

  const [patients, setPatients] = useState(JSON.parse(localStorage.getItem('patients')) ?? []);
  const [patient, setPatient] = useState({});

  useEffect(() => {
   
    localStorage.setItem('patients', JSON.stringify( patients ));
  }, [patients])
  

  const deletePatient = id => {
    const updatedPatients = patients.filter( patient => patient.id !== id);

    setPatients(updatedPatients);
  }

  return (
    <div className="container mx-auto mt-20 md:px-2">
      <Header/>
      <div className="md:flex mt-12"> 
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
          patient={patient}
          deletePatient={deletePatient}
        /> 
      </div>
      
    </div>
  )
}

export default App
