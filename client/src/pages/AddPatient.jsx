import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPatient } from "../services/docService";
import swal from "sweetalert";
import storageService from "../services/storageService";

const AddPatient = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();


  //   const [treatmentStatus, setUpdatedPrescriptionsAmount] = useState("false");
  //   const [prescriptionsAmount, setPrescriptionsAmount] = useState("");

  const handleAddPatient = (e) => {
    e.preventDefault();
    try {
      addPatient({ id, name, age, gender, address });
    } catch (error) {
      alert(error.message);
      throw error;
    }

    const currentPatientsList = storageService.getPatients().length;
    swal({
      title: "Patient Added successfully!",
      text: `You Currently have: ${currentPatientsList} Patients.`,
      icon: "success",
    });
    setId("");
    setName("");
    setAge("");
    setGender("");
    setAddress("");
    navigate("/home");

  };

  return (
    <div className="add-patient-container">
      <h1>Add A Patient Here</h1>
      <form onSubmit={handleAddPatient}>
        <input
          placeholder="Enter Patient Id..."
          value={id}
          required 
          type="number"
          onChange={(e) => setId(e.target.value)}
        ></input>
        <input
          placeholder="Enter Patient Name..."
          value={name}
          required
          type="text"
          minLength={1}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          placeholder="Enter Patient Age..."
          value={age}
          required
          type="number"
          onChange={(e) => setAge(e.target.value)}
        ></input>
        <input
          placeholder="Enter Patient Gender..."
          value={gender}
          required
          type="text"
          onChange={(e) => setGender(e.target.value)}
        ></input>
        <input
          placeholder="Enter Patient Address..."
          value={address}
          required
          type="address"
          onChange={(e) => setAddress(e.target.value)}
        ></input>
        <button>Add Patient</button>
      </form>
    </div>
  );
};

export default AddPatient;
