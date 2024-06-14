import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const RegisterPage = () => {
  const [formData, setFormData] = useState({email: "", username: "", password: "" })
  const {error, setError, Register } = useAuth();

  const handleRegister = (e) =>{
    e.preventDefault()
    try {
      if (!validatePassword(formData.password)) {
        throw Error("Password must contain at least one uppercase letter and one special symbol.")  
      }
      Register({ email: formData.email, username: formData.username, password: formData.password })
    } catch (error) {
      setError(error.message)
      throw error
    }
  }
  const validatePassword = (password) => {
    const uppercaseRegex = /[A-Z]/;
    const specialSymbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
    return uppercaseRegex.test(password) && specialSymbolRegex.test(password);
   }

  return (
    <div className="register-container">
        <form onSubmit={handleRegister}>
        <h1>Register</h1>
          {error && <p className="error">{error}</p>}
          <label htmlFor="email">Email</label>
          <input
            required
            value={formData.email}
            // type="email"
            type="text"
            placeholder="Enter your email..."
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          ></input>
           <label htmlFor="username">Username</label>
          <input
            required
            value={formData.username}
            type="text"
            placeholder="Enter your username..."
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          ></input>
          <label htmlFor="password">Password</label>
          <input 
            required
            value={formData.password}
            type="password"
            minLength={4}
            maxLength={8}
            placeholder="Enter your password..."
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            ></input>
          <button>Sign Up</button>
          <small>
          Already have an account? <Link to={"/login"}>Sign In</Link>
        </small>
        </form>
      </div>
  )
}

export default RegisterPage