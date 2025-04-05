



// import React, { useState } from "react";
// import axios from "axios";

// const TrainerRegistrationForm = ({ onAddTrainer }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mobile: "",
//     email: "",
//     address: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [errorMessage, setErrorMessage] = useState(""); // Store error message
//   const [loading, setLoading] = useState(false);

//   // Validation function
//   const validate = () => {
//     const newErrors = {};
//     if (!formData.firstName) newErrors.firstName = "First Name is required";
//     if (!formData.lastName) newErrors.lastName = "Last Name is required";
//     if (!formData.mobile) {
//       newErrors.mobile = "Mobile number is required";
//     } else if (!/^\d{10}$/.test(formData.mobile)) {
//       newErrors.mobile = "Mobile number must be 10 digits";
//     }
//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email format is invalid";
//     }
//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters long";
//     }
//     if (!formData.address) newErrors.address = "Address is required";

//     return newErrors;
//   };

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     // Validate form data
//     const validationErrors = validate();
//     setErrors(validationErrors);
//     setErrorMessage(""); // Reset error message
  
//     if (Object.keys(validationErrors).length === 0) {
//       try {
//         setLoading(true);
  
//         const trainerRequest = {
//           ...formData,
//           role: "TRAINER", // Required by backend
//           isTrainer: true,
//         };
  
//         // Fetch the Bearer token from localStorage (or wherever it's stored)
     
     
//      //   const token = JSON.parse(localStorage.getItem("user"));
//      const user = JSON.parse(localStorage.getItem("user"));
// const token = user?.token; // Extract the token value
// console.log("token", token); // Make sure the token is being logged as a string
     
// if (!token) {
//   console.error("Token is not available.");
//   return;
// }
      
//         const response = await axios.post(
//           "http://localhost:8080/api/v1/admin/TrainerRegister", 
//           trainerRequest,
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`, // 🔥 Include Bearer Token
//             },
//           }
//         );
  
//         onAddTrainer(response.data); // Notify parent about the new trainer
  
//         setFormData({
//           firstName: "",
//           lastName: "",
//           mobile: "",
//           email: "",
//           address: "",
//           password: "",
//         });
//       } catch (error) {
//         setErrorMessage(
//           error.response
//             ? error.response.data.message
//             : "Something went wrong. Please try again."
//         );
//       } finally {
//         setLoading(false);
//       }
//     }
//   };
  

//   return (
//     <div
//       className="mt-4 mx-auto p-4"
//       style={{
//         maxWidth: "600px",
//         border: "1px solid #ddd",
//         borderRadius: "8px",
//         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         backgroundColor: "#f9f9f9",
//       }}
//     >
//       <h2 className="text-center mb-4">Trainer Registration Form</h2>
//       <form onSubmit={handleSubmit}>
//         {["firstName", "lastName", "mobile", "email", "address", "password"].map((field) => (
//           <div className="mb-3" key={field}>
//             <label htmlFor={field} className="form-label">
//               {field.charAt(0).toUpperCase() + field.slice(1)}
//             </label>
//             <input
//               type={field === "password" ? "password" : "text"}
//               id={field}
//               name={field}
//               className={`form-control ${errors[field] ? "is-invalid" : ""}`}
//               value={formData[field]}
//               onChange={handleInputChange}
//               required
//             />
//             {errors[field] && <div className="invalid-feedback">{errors[field]}</div>}
//           </div>
//         ))}
//         {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
//         <div className="d-flex justify-content-between">
//           <button type="submit" className="btn btn-primary" disabled={loading}>
//             {loading ? "Saving..." : "Save"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default TrainerRegistrationForm;






























import React, { useState } from "react";
import axios from "axios";

const TrainerRegistrationForm = ({ onAddTrainer }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    address: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState(""); // Store error message
  const [loading, setLoading] = useState(false);

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email format is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    if (!formData.address) newErrors.address = "Address is required";

    return newErrors;
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate form data
    const validationErrors = validate();
    setErrors(validationErrors);
    setErrorMessage(""); // Reset error message
  
    if (Object.keys(validationErrors).length === 0) {
      try {
        setLoading(true);
  
        const trainerRequest = {
          ...formData,
          role: "TRAINER", // Required by backend
          isTrainer: true,
        };
  
        // Fetch the Bearer token from localStorage (or wherever it's stored)
        const token = localStorage.getItem("token"); // Directly get token from localStorage

        if (!token) {
          console.error("Token is not available.");
          return;
        }
      
        const response = await axios.post(
          "http://localhost:8080/api/v1/admin/TrainerRegister", 
          trainerRequest,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // 🔥 Include Bearer Token
            },
          }
        );
  
        onAddTrainer(response.data); // Notify parent about the new trainer
  
        setFormData({
          firstName: "",
          lastName: "",
          mobile: "",
          email: "",
          address: "",
          password: "",
        });
      } catch (error) {
        setErrorMessage(
          error.response
            ? error.response.data.message
            : "Something went wrong. Please try again."
        );
      } finally {
        setLoading(false);
      }
    }
  };
  

  return (
    <div
      className="mt-4 mx-auto p-4"
      style={{
        maxWidth: "600px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 className="text-center mb-4">Trainer Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {["firstName", "lastName", "mobile", "email", "address", "password"].map((field) => (
          <div className="mb-3" key={field}>
            <label htmlFor={field} className="form-label">
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type={field === "password" ? "password" : "text"}
              id={field}
              name={field}
              className={`form-control ${errors[field] ? "is-invalid" : ""}`}
              value={formData[field]}
              onChange={handleInputChange}
              required
            />
            {errors[field] && <div className="invalid-feedback">{errors[field]}</div>}
          </div>
        ))}
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TrainerRegistrationForm;
