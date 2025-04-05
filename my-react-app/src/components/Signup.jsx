


// // import React, { useState } from 'react';

// // function Signup() {
// //   const [formData, setFormData] = useState({
// //     firstName: '',
// //     lastName: '',
// //     phoneNumber: '',
// //     email: '',
// //     username: '',
// //     password: '',
// //     confirmPassword: '',
// //     role: 'USER',
// //   });

// //   const [error, setError] = useState('');
// //   const [successMessage, setSuccessMessage] = useState('');

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const validateEmail = (email) => {
// //     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
// //     return emailRegex.test(email);
// //   };

// //   const validatePhoneNumber = (phoneNumber) => {
// //     const phoneRegex = /^[0-9]{10}$/;
// //     return phoneRegex.test(phoneNumber);
// //   };

// //   const validatePassword = (password) => {
// //     const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
// //     return passwordRegex.test(password);
// //   };

// //   const validateRequired = (field, name) => {
// //     if (!field.trim()) {
// //       return `${name} is required.`;
// //     }
// //     return '';
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const { firstName, lastName, phoneNumber, email, username, password, confirmPassword, role } = formData;

// //     // Validate required fields
// //     let validationError = '';
// //     validationError = validateRequired(firstName, 'First Name') || validationError;
// //     validationError = validateRequired(lastName, 'Last Name') || validationError;
// //     validationError = validateRequired(phoneNumber, 'Phone Number') || validationError;
// //     validationError = validateRequired(email, 'Email') || validationError;
// //     validationError = validateRequired(username, 'Username') || validationError;
// //     validationError = validateRequired(password, 'Password') || validationError;
// //     validationError = validateRequired(confirmPassword, 'Confirm Password') || validationError;

// //     if (validationError) {
// //       setError(validationError);
// //       return;
// //     }

// //     // Validate individual fields
// //     if (!validateEmail(email)) {
// //       setError('Please enter a valid email address.');
// //       return;
// //     }

// //     if (!validatePhoneNumber(phoneNumber)) {
// //       setError('Please enter a valid phone number (10 digits).');
// //       return;
// //     }

// //     if (!validatePassword(password)) {
// //       setError('Password must be at least 8 characters long, include one uppercase letter, one number, and one special character.');
// //       return;
// //     }

// //     if (password !== confirmPassword) {
// //       setError('Passwords do not match!');
// //       return;
// //     }

// //     // Request body in the desired format
// //     const userData = {
// //       fName: firstName,  // Consistent naming
// //       lName: lastName,
// //       phoneNo: phoneNumber,
// //       emailId: email,
// //       userName: username,
// //       password,
// //       roleName: role.toUpperCase(),
// //     };
  
// //     console.log('Sending signup data:', userData);

// //     try {
// //       const response = await fetch(process.env.REACT_APP_API_URL + '/api/gym-users/register', { // Use env variable
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(userData),
// //       });

// //       const responseBody = await response.json()

// //       if (response.ok) {
// //         setSuccessMessage(responseBody.message || 'Signup successful!'); // Access message from JSON
// //         // ... reset form
// //       } else {
// //         setError(responseBody.message || 'Signup failed. Please try again.'); // Access error message from JSON
// //       }
// //     } catch (err) {
// //       setError('An error occurred during signup: ' + err.message);  // More specific error
// //     }
// //   };

// //   return (
// //     <div className="container mt-5">
// //       <h1 className="text-center mb-4">Signup</h1>
// //       <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '400px' }}>
// //         {error && <div className="alert alert-danger">{error}</div>}
// //         {successMessage && <div className="alert alert-success">{successMessage}</div>}

// //         <div className="mb-3">
// //           <label htmlFor="firstName" className="form-label">First Name</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             id="firstName"
// //             name="firstName"
// //             value={formData.firstName}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>

// //         <div className="mb-3">
// //           <label htmlFor="lastName" className="form-label">Last Name</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             id="lastName"
// //             name="lastName"
// //             value={formData.lastName}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>

// //         <div className="mb-3">
// //           <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             id="phoneNumber"
// //             name="phoneNumber"
// //             value={formData.phoneNumber}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>

// //         <div className="mb-3">
// //           <label htmlFor="email" className="form-label">Email address</label>
// //           <input
// //             type="email"
// //             className="form-control"
// //             id="email"
// //             name="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>

// //         <div className="mb-3">
// //           <label htmlFor="username" className="form-label">Username</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             id="username"
// //             name="username"
// //             value={formData.username}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>

// //         <div className="mb-3">
// //           <label htmlFor="password" className="form-label">Password</label>
// //           <input
// //             type="password"
// //             className="form-control"
// //             id="password"
// //             name="password"
// //             value={formData.password}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>

// //         <div className="mb-3">
// //           <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
// //           <input
// //             type="password"
// //             className="form-control"
// //             id="confirmPassword"
// //             name="confirmPassword"
// //             value={formData.confirmPassword}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>

// //         <div className="mb-3">
// //           <label htmlFor="role" className="form-label">Role</label>
// //           <select
// //             className="form-select"
// //             id="role"
// //             name="role"
// //             value={formData.role}
// //             onChange={handleChange}
// //             required
// //           >
// //             <option value="USER">User</option>
            
// //             <option value="TRAINER">Trainer</option>
            
// //           </select>
// //         </div>

// //         <button type="submit" className="btn btn-primary w-100">Signup</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Signup;







// import React, { useState } from 'react';
// import axios from 'axios';

// function Signup() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phoneNumber: '',
//     email: '',
//     username: '',
//     password: '',
//     confirmPassword: '',
//     role: 'USER',
//   });

//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateEmail = (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
//   const validatePhoneNumber = (phoneNumber) => /^[0-9]{10}$/.test(phoneNumber);
//   const validatePassword = (password) => /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);
//   const validateRequired = (field, name) => (!field.trim() ? `${name} is required.` : '');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { firstName, lastName, phoneNumber, email, username, password, confirmPassword, role } = formData;

//     let validationError = '';
//     validationError = validateRequired(firstName, 'First Name') || validationError;
//     validationError = validateRequired(lastName, 'Last Name') || validationError;
//     validationError = validateRequired(phoneNumber, 'Phone Number') || validationError;
//     validationError = validateRequired(email, 'Email') || validationError;
//     validationError = validateRequired(username, 'Username') || validationError;
//     validationError = validateRequired(password, 'Password') || validationError;
//     validationError = validateRequired(confirmPassword, 'Confirm Password') || validationError;

//     if (validationError) {
//       setError(validationError);
//       return;
//     }

//     if (!validateEmail(email)) {
//       setError('Please enter a valid email address.');
//       return;
//     }

//     if (!validatePhoneNumber(phoneNumber)) {
//       setError('Please enter a valid phone number (10 digits).');
//       return;
//     }

//     if (!validatePassword(password)) {
//       setError('Password must be at least 8 characters long, include one uppercase letter, one number, and one special character.');
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError('Passwords do not match!');
//       return;
//     }

//     const userData = {
//       firstName,
//       lastName,
//       phoneNumber,
//       email,
//       username,
//       password,
//       role, // Backend will automatically set USER role
//     };

//     console.log('Sending signup data:', userData);

//     try {
//       const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/auth/signup`, userData, {
//         headers: { 'Content-Type': 'application/json' },
//       });

//       setSuccessMessage(response.data.message || 'Signup successful!');
//       setError('');
//       setFormData({
//         firstName: '',
//         lastName: '',
//         phoneNumber: '',
//         email: '',
//         username: '',
//         password: '',
//         confirmPassword: '',
//         role: 'USER',
//       });

//     } catch (error) {
//       setError(error.response?.data?.message || 'Signup failed. Please try again.');
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center mb-4">Signup</h1>
//       <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '400px' }}>
//         {error && <div className="alert alert-danger">{error}</div>}
//         {successMessage && <div className="alert alert-success">{successMessage}</div>}

//         <div className="mb-3">
//           <label htmlFor="firstName" className="form-label">First Name</label>
//           <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="lastName" className="form-label">Last Name</label>
//           <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
//           <input type="text" className="form-control" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">Email address</label>
//           <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="username" className="form-label">Username</label>
//           <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} required />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">Password</label>
//           <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
//           <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="role" className="form-label">Role</label>
//           <select className="form-select" id="role" name="role" value={formData.role} onChange={handleChange} required>
//             <option value="USER">User</option>
//             <option value="TRAINER">Trainer</option>
//           </select>
//         </div>

//         <button type="submit" className="btn btn-primary w-100">Signup</button>
//       </form>
//     </div>
//   );
// }

// export default Signup;











// import React, { useState } from 'react';
// import axios from 'axios';

// function Signup() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phoneNumber: '',
//     email: '',
//     username: '',
//     password: '',
//     confirmPassword: '',
//     role: 'USER',
//   });

//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateEmail = (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
//   const validatePhoneNumber = (phoneNumber) => /^[0-9]{10}$/.test(phoneNumber);
//   const validatePassword = (password) => /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccessMessage('');

//     const { firstName, lastName, phoneNumber, email, username, password, confirmPassword, role } = formData;

//     if (!firstName || !lastName || !phoneNumber || !email || !username || !password || !confirmPassword) {
//       setError('All fields are required.');
//       return;
//     }

//     if (!validateEmail(email)) {
//       setError('Invalid email format.');
//       return;
//     }

//     if (!validatePhoneNumber(phoneNumber)) {
//       setError('Phone number must be exactly 10 digits.');
//       return;
//     }

//     if (!validatePassword(password)) {
//       setError('Password must be at least 8 characters, include an uppercase letter, a number, and a special character.');
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError('Passwords do not match.');
//       return;
//     }

//     // Convert formData to match backend request format
//     const userData = {
//       fName: firstName,
//       lName: lastName,
//       phoneNo: phoneNumber,
//       emailId: email,
//       userName: username,
//       password,
//       roleName: role.toUpperCase(),
//     };

//     try {
//       const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/auth/signup`, userData, {
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (response.status === 200) {
//         setSuccessMessage('Signup successful! Please login.');
//         setFormData({
//           firstName: '',
//           lastName: '',
//           phoneNumber: '',
//           email: '',
//           username: '',
//           password: '',
//           confirmPassword: '',
//           role: 'USER',
//         });
//       }
//     } catch (error) {
//       if (error.response) {
//         setError(error.response.data.message || 'Signup failed.');
//       } else {
//         setError('An error occurred. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center mb-4">Signup</h1>
//       <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '400px' }}>
//         {error && <div className="alert alert-danger">{error}</div>}
//         {successMessage && <div className="alert alert-success">{successMessage}</div>}

//         {['firstName', 'lastName', 'phoneNumber', 'email', 'username', 'password', 'confirmPassword'].map((field) => (
//           <div className="mb-3" key={field}>
//             <label htmlFor={field} className="form-label">
//               {field.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
//             </label>
//             <input
//               type={field.includes('password') ? 'password' : 'text'}
//               className="form-control"
//               id={field}
//               name={field}
//               value={formData[field]}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         ))}

//         <div className="mb-3">
//           <label htmlFor="role" className="form-label">Role</label>
//           <select className="form-select" id="role" name="role" value={formData.role} onChange={handleChange} required>
//             <option value="USER">User</option>
//             <option value="TRAINER">Trainer</option>
//           </select>
//         </div>

//         <button type="submit" className="btn btn-primary w-100">Signup</button>
//       </form>
//     </div>
//   );
// }

// export default Signup;




// import React, { useState } from "react";
// import axios from "axios";

// function Signup() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     phoneNumber: "",
//     email: "",
//     username: "",
//     password: "",
//     confirmPassword: "",
//     role: "USER",
//   });

//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Email, Phone, Password Validation
//   const validateEmail = (email) =>
//     /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
//   const validatePhoneNumber = (phoneNumber) => /^[0-9]{10}$/.test(phoneNumber);
//   const validatePassword = (password) =>
//     /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);

//   // Handle Form Submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccessMessage("");

//     const { firstName, lastName, phoneNumber, email, username, password, confirmPassword, role } = formData;

//     // Validation checks
//     if (!firstName || !lastName || !phoneNumber || !email || !username || !password || !confirmPassword) {
//       setError("All fields are required.");
//       return;
//     }
//     if (!validateEmail(email)) {
//       setError("Invalid email format.");
//       return;
//     }
//     if (!validatePhoneNumber(phoneNumber)) {
//       setError("Phone number must be exactly 10 digits.");
//       return;
//     }
//     if (!validatePassword(password)) {
//       setError("Password must have 8+ characters, 1 uppercase, 1 number, and 1 special character.");
//       return;
//     }
//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     // Correct Data Format for Backend
//     const userData = {
//       firstName,
//       lastName,
//       phoneNumber,
//       email,
//       username,
//       password,
//       role: role.toUpperCase(), // Convert role to uppercase
//       isUser: true,
//     };

//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_API_URL}/api/v1/auth/signup`,
//         userData,
//         { headers: { "Content-Type": "application/json" } }
//       );

//       if (response.status === 200) {
//         setSuccessMessage("Signup successful! Please login.");
//         setFormData({
//           firstName: "",
//           lastName: "",
//           phoneNumber: "",
//           email: "",
//           username: "",
//           password: "",
//           confirmPassword: "",
//           role: "USER",
//         });
//       }
//     } catch (error) {
//       console.error("Signup Error:", error);
//       if (error.response) {
//         setError(error.response.data.message || "Signup failed.");
//       } else {
//         setError("An error occurred. Please try again.");
//       }
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center mb-4">Signup</h1>
//       <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "400px" }}>
//         {error && <div className="alert alert-danger">{error}</div>}
//         {successMessage && <div className="alert alert-success">{successMessage}</div>}

//         {["firstName", "lastName", "phoneNumber", "email", "username", "password", "confirmPassword"].map((field) => (
//           <div className="mb-3" key={field}>
//             <label htmlFor={field} className="form-label">
//               {field.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
//             </label>
//             <input
//               type={field.includes("password") ? "password" : "text"}
//               className="form-control"
//               id={field}
//               name={field}
//               value={formData[field]}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         ))}

//         <div className="mb-3">
//           <label htmlFor="role" className="form-label">Role</label>
//           <select className="form-select" id="role" name="role" value={formData.role} onChange={handleChange} required>
//             <option value="USER">User</option>
//             <option value="TRAINER">Trainer</option>
//           </select>
//         </div>

//         <button type="submit" className="btn btn-primary w-100">Signup</button>
//       </form>
//     </div>
//   );
// }

// export default Signup;









import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    height: "",
    weight: "",
    age: "",
    bmi: "",
   
    role: "USER", // Default role
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validation for email, phone number, and password
  const validateEmail = (email) =>
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
  const validatePhoneNumber = (phoneNo) => /^[0-9]{10}$/.test(phoneNo);
  const validatePassword = (password) =>
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    const {
      firstName,
      lastName,
      phoneNo,
      email,
      password,
      confirmPassword,
      role,
      address,
      height,
      weight,
      age,
      bmi,
      
    } = formData;

    // Validation checks
    if (!firstName || !lastName || !phoneNo || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Invalid email format.");
      return;
    }
    if (!validatePhoneNumber(phoneNo)) {
      setError("Phone number must be exactly 10 digits.");
      return;
    }
    if (!validatePassword(password)) {
      setError("Password must have 8+ characters, 1 uppercase, 1 number, and 1 special character.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Correct Data Format for Backend
    const userData = {
      firstName,
      lastName,
      phoneNo, // matches backend field
      email,
      password,
      address,
      height: parseFloat(height), // Convert to number for height, weight, age
      weight: parseFloat(weight),
      age: parseFloat(age),
      bmi: parseFloat(bmi), // Convert to number
    
      role: role.toUpperCase(), // Convert role to uppercase (e.g., "USER")
      isUser: role === "USER", // Set `isUser` flag based on role
      isTrainer: role === "TRAINER", // Set `isTrainer` flag if role is "TRAINER"
    };

    try {
      // Axios POST request with the environment variable URL
      const response = await axios.post(
        `http://localhost:8080/api/v1/auth/signup`,
        userData,
        { headers: { "Content-Type": "application/json" } }
      );
      

      if (response.status === 200) {
        setSuccessMessage("Signup successful! Please login.");
        setFormData({
          firstName: "",
          lastName: "",
          phoneNo: "",
          email: "",
          password: "",
          confirmPassword: "",
          address: "",
          height: "",
          weight: "",
          age: "",
          bmi: "",
         
          role: "USER", // Reset role to default
        });
      }
    } catch (error) {
      console.error("Signup Error:", error);
      if (error.response) {
        setError(error.response.data.message || "Signup failed.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Signup</h1>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "400px" }}>
        {error && <div className="alert alert-danger">{error}</div>}
        {successMessage && <div className="alert alert-success">{successMessage}</div>}

        {["firstName", "lastName", "phoneNo", "email", "password", "confirmPassword", "address", "height", "weight", "age", "bmi"].map((field) => (
          <div className="mb-3" key={field}>
            <label htmlFor={field} className="form-label">
              {field.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
            </label>
            <input
              type={field.includes("password") ? "password" : "text"}
              className="form-control"
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        <div className="mb-3">
          <label htmlFor="role" className="form-label">Role</label>
          <select className="form-select" id="role" name="role" value={formData.role} onChange={handleChange} required>
            <option value="USER">User</option>
            <option value="TRAINER">Trainer</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
