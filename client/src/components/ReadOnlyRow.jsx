import { useNavigate } from "react-router-dom";

const ReadOnlyRow = ({ patient, handleRemoveClick, handleEditClick }) => {
  const navigate = useNavigate();

  const patientHistoryBtn = () => {
    navigate(`/history/${patient.id}`);
  };
  return (
    <tr key={patient.id}>
      <td>{patient.id}</td>
      <td>{patient.name}</td>
      <td>{patient.age}</td>
      <td>{patient.gender}</td>
      <td>{patient.address}</td>
      <td className={patient.treatmentStatus ? "green-text" : "red-text"}>
        {patient.treatmentStatus ? "Finished Treatment" : "Didn't get treatment" }
      </td>
      <td>{patient.prescriptionsAmount}</td>
      <td>
        <button onClick={(e) => handleEditClick(e, patient.id)}>Edit</button>
        <button onClick={() => handleRemoveClick(patient.id)}>
          Remove Patient
        </button>
      </td>
      <td>
        <button onClick={patientHistoryBtn}>Watch Patient History</button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
