// import React, { useState } from 'react';

// const Login = () => {
//   const [formData, setFormData] = useState({ emailId: '', password: '', roleName: 'USER' }); // Use emailId and roleName
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(''); // Clear previous errors

//     try {
//       // const response = await fetch(process.env.REACT_APP_API_URL + '/api/gym-users/login', {
//       //   method: 'POST',
//       //   headers: {
//       //     'Content-Type': 'application/json',
//       //   },
//       //   body: JSON.stringify(formData), // Send emailId and roleName
//       // });
      
//       const response = await axios.post(
//         `http://localhost:8080/api/v1/auth/login`,
//         userData,
//         { headers: { "Content-Type": "application/json" } }
//       );

//       if (response.ok) {
//         const responseData = await response.json();
//         console.log("Login successful:", responseData);
//         localStorage.setItem('user', JSON.stringify(responseData)); // Store user data
//         // Redirect or update state as needed
//       } else {
//         const errorData = await response.json();
//         setError(errorData.message || "Invalid credentials");
//         console.error("Login failed:", errorData);
//       }
//     } catch (error) {
//       setError("An error occurred during login: " + error.message);
//       console.error("Login error:", error);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center mb-4">Login</h1>
//       <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '400px' }}>
//         {error && <div className="alert alert-danger">{error}</div>}

//         <div className="mb-3">
//           <label htmlFor="emailId" className="form-label">Email address</label> {/* Use emailId */}
//           <input
//             type="email"
//             className="form-control"
//             id="emailId"
//             name="emailId"  
//             value={formData.emailId} 
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit" className="btn btn-primary w-100">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login












// import React, { useState } from "react";
// import axios from "axios"; // Import axios

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     roleName: "USER",
   
//   });
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear previous errors

//     try {
//       const response = await axios.post(
//         `http://localhost:8080/api/v1/auth/login`, // Use Vite env variable
//         formData, // Send correct form data
//         { headers: { "Content-Type": "application/json" } }
//       );

//       // const response = await axios.post(
//       //   `http://localhost:8080/api/v1/auth/signup`,
//       //   userData,
//       //   { headers: { "Content-Type": "application/json" } }
//       // );

//       if (response.status === 200) {
//         console.log("Login successful:", response.data);
//         localStorage.setItem("user", JSON.stringify(response.data)); // Store user data
//       } else {
//         setError("Invalid credentials");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       setError(error.response?.data?.message || "An error occurred during login.");
//     }

//     // try {
//     //   const response = await axios.post("http://localhost:8080/api/v1/auth/login", { username, password });
//     //   console.log("Login response:", response);
//     //   if (response.status === 200) {
//     //     alert('Login successful!');
//     //     // Redirect to the respective dashboard based on user type
//     //     if (userType === 'User') {
//     //       navigate('/MemebrshipPlan');
//     //     } else if (userType === 'Trainer') {
//     //       navigate('/TrainerDashboard');
//     //     } else{
//     //       navigate('/AdminDashboard');
//     //     }
//     //   }
//     // } catch (error) {
//     //   console.error("Login error:", error);
//     //   if (error.response) {
//     //     console.error("Server response:", error.response.data);
//     //     setError(error.response.data || 'Invalid username or password.');
//     //   } else {
//     //     setError('An error occurred. Please try again.');
//     //   }
//     // }


//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center mb-4">Login</h1>
//       <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "400px" }}>
//         {error && <div className="alert alert-danger">{error}</div>}

//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit" className="btn btn-primary w-100">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;






















// import React, { useState } from "react";
// import axios from "axios"; // Import axios
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     roleName: "USER", // Default role
//   });
//   const [error, setError] = useState("");
  
//   const navigate = useNavigate(); // Initialize navigate

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear previous errors

//     try {
//       const response = await axios.post(
//         `http://localhost:8080/api/v1/auth/login`, // Use Vite env variable
//         formData, // Send correct form data
//         { headers: { "Content-Type": "application/json" } }
//       );

//       if (response.status === 200) {
//         console.log("Login successful:", response.data);
        
//         localStorage.setItem("user", JSON.stringify(response.data)); // Store user data

//         // Redirect based on role
//         if (formData.roleName === "USER") {
//           navigate("/Membership"); // Navigate to membership page
//         } else if (formData.roleName === "TRAINER") {
//           navigate("/TrainerDashboard"); // Navigate to trainer dashboard
//         } else if (formData.roleName === "ADMIN") {
//           navigate("/AdminDashboard"); // Navigate to admin dashboard
//         }
//       } else {
//         setError("Invalid credentials");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       setError(error.response?.data?.message || "An error occurred during login.");
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center mb-4">Login</h1>
//       <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "400px" }}>
//         {error && <div className="alert alert-danger">{error}</div>}

//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="roleName" className="form-label">Role</label>
//           <select
//             id="roleName"
//             name="roleName"
//             className="form-control"
//             value={formData.roleName}
//             onChange={handleChange}
//           >
//             <option value="USER">User</option>
//             <option value="TRAINER">Trainer</option>
//             <option value="ADMIN">Admin</option>
//           </select>
//         </div>

//         <button type="submit" className="btn btn-primary w-100">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;














import React, { useState } from "react";
import axios from "axios"; // Import axios
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    roleName: "USER", // Default role
  });
  const [error, setError] = useState("");
  
  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/auth/login`, // Use the correct login API endpoint
        formData, // Send the form data
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        console.log("Login successful:", response.data);
        
        // Store the token in localStorage
        localStorage.setItem("token", response.data.token); // Store token

        // Redirect based on role
        if (formData.roleName === "USER") {
          navigate("/Membership"); // Navigate to membership page
        } else if (formData.roleName === "TRAINER") {
          navigate("/TrainerDashboard"); // Navigate to trainer dashboard
        } else if (formData.roleName === "ADMIN") {
          navigate("/AdminDashboard"); // Navigate to admin dashboard
        }
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(error.response?.data?.message || "An error occurred during login.");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "400px" }}>
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="roleName" className="form-label">Role</label>
          <select
            id="roleName"
            name="roleName"
            className="form-control"
            value={formData.roleName}
            onChange={handleChange}
          >
            <option value="USER">User</option>
            <option value="TRAINER">Trainer</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;
