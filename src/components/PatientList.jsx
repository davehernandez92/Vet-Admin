import Patient from "./Patient"


function PatientList({patients, setPatient, deletePatient}) {
  
    return (
            
            <div className=" md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll"> 
                  { patients && patients.length ? (
                        <>

                              <h2 className=" font-black text-3xl text-center">Patients List </h2>
                              <p className=" text-xl mt-5 mb-5 text-center">
                                    Edit and modify your {''}
                                    <span className=" text-indigo-600 font-bold"> Patients and appointments</span>
                              </p>  

                              
                              { patients.map( (patient ) => (

                                    <Patient
                                          key={patient.id}
                                          patient={patient}
                                          setPatient={setPatient}
                                          deletePatient={deletePatient}
                                    /> 
                              ))}           
                              
                        </>


                  ) : (
                        <>
                              <h2 className=" font-black text-3xl text-center">Patients List </h2>
                              <p className=" text-xl mt-5 mb-5 text-center">
                                    There's nothing here, {''}
                                    <span className=" text-indigo-600 font-bold"> Add a patient!</span>
                              </p>  
                        </>
                        
                  )}
                          
            </div>
      
    )
  }
  
  export default PatientList