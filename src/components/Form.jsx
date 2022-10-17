import {useState, useEffect} from "react"
import Error from "./Error";

function Form({ setPatients, patients, patient, setPatient }) {

    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [discharge, setDischarge] = useState('');
    const [symptoms, setSymptoms] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
      if( Object.keys(patient).length > 0) {
        setName(patient.name)
        setOwner(patient.owner)
        setEmail(patient.email)
        setDischarge(patient.discharge)
        setSymptoms(patient.symptoms)
      }
    }, [patient])

   
    
    const idGenerator = () => {
      const random = Math.random().toString(36);
      const date = Date.now().toString(36);

      return random + date;
    }
    

    const handleSubmit = (e) => {
      e.preventDefault();

      // Form Validation 
      if( [name, owner, email, discharge, symptoms].includes('')){
        setError(true)
        return;
      }
      setError(false)

      //Object for patients
      const objectPatient = {
        name, 
        owner, 
        email, 
        discharge,
        symptoms
        
      }
      if(patient.id){
        // Editing the patient info on patien.object
        objectPatient.id = patient.id;

        const updatedPatients = patients.map( patientState => patientState.id === patient.id ? objectPatient : patientState)

        setPatients(updatedPatients)
        setPatient({})

      } else{
        // generating new patient 
        objectPatient.id = idGenerator();
        setPatients([...patients, objectPatient]);

      }

      
      //RESET FORM 
      setName('') 
      setOwner('') 
      setEmail('') 
      setDischarge('') 
      setSymptoms('')
      
    }

    return (
      <div className=" md:w-1/2 lg:w-2/5 mx-5">
          <h2 className=" font-black text-3xl text-center"> Patient Info </h2>

          <p className=" text-lg mt-5 text-center mb-5"> 
            Add a new patient and {""}
            <span className=" text-indigo-600 font-bold"> Edit</span>
          </p>

          <form 
            onSubmit={handleSubmit}
            className=" bg-white shadow-lg rounded-md py-10 px-5 mb-10">

            {error && <Error text='All fields are required'/>}
            <div className=" mb-5"> 
              <label htmlFor="pet" className=" block text-gray-700 uppercase font-bold"> Pet's name</label>
              <input 
                className=" border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-sm"
                id="pet"
                type='text'
                placeholder="customer's pet name"
                value={name}
                onChange={ (e) => setName(e.target.value)}
              />
            </div>
            
            <div className=" mb-5"> 
              <label htmlFor="owner" className=" block text-gray-700 uppercase font-bold"> Customer's name</label>
              <input 
                className=" border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-sm"
                id="owner"
                type='text'
                placeholder="Customer's full name"
                value={owner}
                onChange={ (e) => setOwner(e.target.value)}
              />
            </div>
            
            <div className=" mb-5"> 
              <label htmlFor="email" className=" block text-gray-700 uppercase font-bold"> Email</label>
              <input 
                className=" border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-sm"
                id="email"
                type='email'
                placeholder="email@email.com"
                value={email}
                onChange={ (e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className=" mb-5"> 
              <label htmlFor="discharge" className=" block text-gray-700 uppercase font-bold"> Date of discharge</label>
              <input 
                className=" border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-sm"
                id="discharge"
                type='date'
                value={discharge}
                onChange={ (e) => setDischarge(e.target.value)}
                
              />
            </div>
            
            <div className=" mb-5"> 
              <label htmlFor="symptoms" className=" block text-gray-700 uppercase font-bold"> Notes </label>
              <textarea
                id="symptoms"
                className=" border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-sm"
                placeholder="Important notes and Pet's symptoms"
                value={symptoms}
                onChange={ (e) => setSymptoms(e.target.value)}
               />
            </div>

            <input
              type="submit"
              className=" bg-indigo-600 w-2/3 h-10 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all flex mx-auto justify-center rounded-md"
              value={ patient.id ? 'Save changes' : 'Add' }
            />
          </form>
      </div>
    )
  }
  
  export default Form