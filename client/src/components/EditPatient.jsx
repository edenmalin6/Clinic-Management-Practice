import { useState } from "react";
import storageService from "../services/storageService";

const EditPatient = ({ setEditPatient, patient, setPatients }) => {
  const [updatedName, setUpdatedName] = useState(patient.name);
  const [updatedAge, setUpdatedAge] = useState(patient.age);
  const [updatedGender, setUpdatedGender] = useState(patient.gender);
  const [updatedAddress, setUpdatedAddress] = useState(patient.address);
  const [updatedTreatmentStatus, setUpdatedTreatmentStatus] = useState(
    patient.treatmentStatus
  );
  const [updatedPrescriptionsAmount, setUpdatedPrescriptionsAmount] = useState(
    patient.prescriptionsAmount
  );
  const patientsList = storageService.getPatients();

  const handleSave = (e) => {
    e.preventDefault();

    const patientIndex = patientsList.findIndex(
      (findPatient) => findPatient.id === patient.id
    );
    patientsList[patientIndex] = {
      id: patient.id,
      name: updatedName,
      age: updatedAge,
      gender: updatedGender,
      address: updatedAddress,
      treatmentStatus: updatedTreatmentStatus,
      prescriptionsAmount: updatedPrescriptionsAmount,
    };
    storageService.setPatients([...patientsList]);
    setPatients(patientsList);
    handleCancel();
  };
  const handleCancel = () => {
    setEditPatient(null);
  };

  return (
    <tr>
      <td>{patient.id}</td>
      <td>
        <input
          type="text"
          value={updatedName}
          onChange={(e) => setUpdatedName(e.target.value)}
        />
      </td>
      <td>
        <input
          type="number"
          value={updatedAge}
          onChange={(e) => setUpdatedAge(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={updatedGender}
          onChange={(e) => setUpdatedGender(e.target.value)}
        />
      </td>
      <td>
        <input
          type="address"
          value={updatedAddress}
          onChange={(e) => setUpdatedAddress(e.target.value)}
        />
      </td>
      <td>
        <select
          value={updatedTreatmentStatus}
          onChange={(e) => setUpdatedTreatmentStatus(e.target.value === "true")}
        >
          <option value="false">Didn't get treatment</option>
          <option value="true">Finished Treatment</option>
        </select>
      </td>
      <td>
        <input
          type="text"
          value={updatedPrescriptionsAmount}
          onChange={(e) => setUpdatedPrescriptionsAmount(e.target.value)}
        />
      </td>
      <td>
        <button onClick={handleSave} type="submit">
          Save
        </button>
        <button onClick={handleCancel} type="submit">
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditPatient;
