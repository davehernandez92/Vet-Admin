
const Patient = ({patient, setPatient, deletePatient}) => {
     const { name, owner, email, discharge, symptoms, id } = patient

     const handleDelete = (name) => {
        const response = confirm('Confirm to delete '+ name)

        if(response) {
                deletePatient(id)
        }
     }
  return (
        <div className="mx-5 bg-white shadow-lg px-5 py-10 rounded-md mb-5">
                                
                <p className=" font-bold mb-3 text-gray-700 uppercase"> Pet: {''}
                        <span className=" font-normal normal-case">{name}</span>
                </p>
                                
                <p className=" font-bold mb-3 text-gray-700 uppercase"> Customer: {''}
                        <span className=" font-normal normal-case">{owner}</span>
                </p>
                                
                <p className=" font-bold mb-3 text-gray-700 uppercase"> Email: {''}
                        <span className=" font-normal normal-case">{email}</span>
                </p>
                                
                <p className=" font-bold mb-3 text-gray-700 uppercase"> Date of discharge: {''}
                        <span className=" font-normal normal-case">{discharge}</span>
                </p>
                                
                <p className=" font-bold mb-3 text-gray-700 uppercase"> Notes: {''}
                        <span className=" font-normal normal-case"> {symptoms}</span>
                </p>
                <div className="flex justify-center gap-5 mt-10">
                        <button
                                type="button"
                                className="py-2 px-9 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md"
                                onClick={() => setPatient(patient)}
                        >  Edit
                        </button>

                        <button
                                type="button"
                                className="py-2 px-7 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md"
                                onClick={() => handleDelete(name)}
                        > Delete
                        </button>
                </div>
        </div>
  )
}

export default Patient