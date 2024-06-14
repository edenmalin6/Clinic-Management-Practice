import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthProvider from "./context/AuthProvider";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import AddPatient from "./pages/AddPatient";
import PatientHistoryPage from "./pages/PatientHistoryPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <main>
      <AuthProvider>
      <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/login"/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/add-patient"
            element={
              <ProtectedRoute>
                <AddPatient />
              </ProtectedRoute>
            }
          />
          <Route
            path="/history/:patientId"
            element={
              <ProtectedRoute>
                <PatientHistoryPage />
              </ProtectedRoute>
            }
          />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthProvider>
    </main>
  );
}

export default App;
