const USERS_KEY = "users"
const LOGGED_IN_USER = "loggedInUser"
const PATIENTS_KEY = "patients" 


const storageService = {
    getUsers(){
        const users = localStorage.getItem(USERS_KEY)
        return users ? JSON.parse(users) : [] 
        //[] is required else it'll throw cant read properties of null
    },
    saveUser(user){
        localStorage.setItem(USERS_KEY, JSON.stringify(user));
    },
    getLoggedInUser(){
        const loggedInUser = localStorage.getItem(LOGGED_IN_USER)
        return loggedInUser ? JSON.parse(loggedInUser) : null
      },
      saveLoggedInUser(user){
        localStorage.setItem(LOGGED_IN_USER,JSON.stringify(user))
      },
    getPatients(){
        const patients = localStorage.getItem(PATIENTS_KEY)
        return  patients ? JSON.parse(patients) : []
      //[] is required else it'll throw cant read properties of null when push will be needed in saveBooking

    },
    setPatients(newPatient){
        localStorage.setItem(PATIENTS_KEY, JSON.stringify(newPatient))
    },
    clearAll(){
        localStorage.removeItem(LOGGED_IN_USER)
    }
}
export default storageService;