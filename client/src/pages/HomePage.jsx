import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import storageService from "../services/storageService";
import EditPatient from "../components/EditPatient";
import ReadOnlyRow from "../components/ReadOnlyRow";

const HomePage = () => {
  const [patients, setPatients] = useState([]);
  const [editPatient, setEditPatient] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();
  const attendant = storageService.getLoggedInUser().username
  const patientsList = storageService.getPatients()
  
  useEffect(()=>{
    if(user) {
      navigate("/home")
    }
  },[user])

  useEffect(()=>{
    const fetchedPatients = storageService.getPatients()
    if(fetchedPatients.length > 0) {
      setPatients(fetchedPatients)
    }
  },[])


  const handleEditClick = (e, patientId) => {
    e.preventDefault();
    setEditPatient(patientId);
  }
  const handleRemoveClick  = (patientId) => {
    const patientIndex = patientsList.findIndex(
      (patient) => patient.id === patientId)

      patientsList.splice(patientIndex, 1)
      storageService.setPatients([...patientsList])
      setPatients(patientsList)  
  }

  return (
    <div className="home-container">
      <h1>Welcome Back {attendant} !</h1>
      {patients.length === 0 ? (
        <h2>No current patients at the moment</h2>
      ): (
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Treatment Status</th>
            <th>Prescriptions Amount</th>
            <th className="actions">Actions</th>
            <th>Watch Patient History</th>
          </tr>
        </thead>
        <tbody>
        {patients.map((patient, key) =>
            editPatient !== patient.id ? ( 
              <ReadOnlyRow
              patient={patient}
              handleRemoveClick={handleRemoveClick}
              handleEditClick={handleEditClick}
            />
            
            ) : (
              <EditPatient
              setEditPatient={setEditPatient}
              patient={patient}
              setPatients={setPatients}           
               />
             
            )
          )}
        </tbody>
      </table>
      )}
      
    </div>
  )
}

export default HomePage