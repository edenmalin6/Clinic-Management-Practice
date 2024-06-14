import storageService from "./storageService";

export const getPatient = (id) => {
  const patients = storageService.getPatients();
  return patients.find((patient) => patient.id === id);
};

export const addPatient = ({ id, name, age, gender, address }) => {
  const patients = storageService.getPatients();
  const uniqueId = patients.find((patient) => patient.id === id);
  if(id.length !== 9) throw Error("Id number could not be less or more than 9 characters.")
  if (uniqueId) throw Error("This patient is already in the list.");
  if (
    !id.trim() ||
    !name.trim() ||
    !age.trim() ||
    !gender.trim() ||
    !address.trim()
  )
    throw Error("Please insert valid characters.");

  const newPatient = {
    id,
    name,
    age,
    gender,
    address,
    treatmentStatus: false,
    prescriptionsAmount: 0,
  };
  
    storageService.setPatients([...patients,newPatient])
};

export const removePatient = (id) =>{
  const patients = storageService.getPatients();
  const desiredPatient = patients.find(
    (patient) => patient.id === id)

const updatedPatientsList = patients.filter((allPatients)=> allPatients.id !== desiredPatient)
storageService.getPatients([...updatedPatientsList])

}