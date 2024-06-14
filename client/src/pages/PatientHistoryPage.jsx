import { useNavigate, useParams } from "react-router-dom";
import { getPatient } from "../services/docService";

const PatientHistoryPage = () => {
  const navigate = useNavigate();
  const { patientId } = useParams();
  const patient = getPatient(patientId);

  const goBackBtn = () => {
    navigate(-1);
  };

  return (
    <div className="history-page">
      <button onClick={goBackBtn}>Back To Home</button>
      <div className="patient-container" key={patient.id}>
        <h1>{patient.name}'s History Record</h1>
        <p>Id: {patient.id}</p>
        <p>Address: {patient.address}</p>
        <p>Prescriptions: {patient.prescriptionsAmount}</p>
        {/* <p>{patient.lastVisit}</p> */}
        <p></p>
      </div>
    </div>
  );
};

export default PatientHistoryPage;
