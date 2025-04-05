





// import React, { useState } from 'react';
// import { Upload, Calendar, User, FileText, Activity, CheckCircle } from 'lucide-react';

// function TrainerDashboard() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [clients] = useState([
//     { 
//       id: 1, 
//       name: "John Doe", 
//       age: 28, 
//       height: 175, 
//       weight: 75, 
//       bmi: 24.5,
//       image: "https://source.unsplash.com/200x200/?gym,workout", // Gym image from Unsplash
//       progressColor: "from-gray-800 to-black"
//     },
//     { 
//       id: 2, 
//       name: "Jane Smith", 
//       age: 30, 
//       height: 165, 
//       weight: 60, 
//       bmi: 22.0,
//       image: "https://source.unsplash.com/200x200/?gym,exercise", // Gym image from Unsplash
//       progressColor: "from-gray-900 to-black"
//     },
//   ]);

//   const [selectedClient, setSelectedClient] = useState(null);

//   const generateSchedule = (bmi) => {
//     const baseSchedule = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => {
//       let activities = [];
//       if (bmi < 18.5) {
//         activities = ['Strength Training', 'High-Calorie Diet', 'Protein Shake'];
//       } else if (bmi < 25) {
//         activities = ['Mixed Cardio', 'Balanced Diet', 'Maintenance Routine'];
//       } else {
//         activities = ['Cardio Focus', 'Calorie-Deficit Diet', 'HIIT Training'];
//       }
//       return { day, activities };
//     });
//     return baseSchedule;
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files?.[0];
//     if (file && file.type === 'application/pdf') {
//       setSelectedFile(file);
//     }
//   };

//   const handleUpload = () => {
//     if (selectedFile) {
//       console.log('Uploading:', selectedFile.name);
//       setSelectedFile(null);
//     }
//   };

//   return (
//     <div 
//       className="min-h-screen text-gray-200" 
//       style={{
//         backgroundImage: "url('https://source.unsplash.com/1600x900/?gym,fitness')", // Background image for the page
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed',
//       }}
//     >
//       <header className="p-6 shadow-2xl bg-gray-950/50">
//         <div className="container mx-auto flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <Activity className="w-10 h-10 text-gray-500" />
//             <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300">
//               Trainer Dashboard
//             </h1>
//           </div>
//         </div>
//       </header>

//       <div className="container mx-auto p-6 flex space-x-6">
//         {/* Sidebar */}
//         <aside className="w-1/4 bg-gray-900/60 backdrop-blur-lg p-6 rounded-2xl shadow-2xl">
//           <h2 className="text-xl font-semibold mb-4 text-gray-400">Assigned Clients</h2>
//           <div className="space-y-4">
//             {clients.map(client => (
//               <div
//                 key={client.id}
//                 className={`p-4 rounded-xl cursor-pointer transition-all group ${
//                   selectedClient?.id === client.id
//                     ? `bg-gradient-to-r ${client.progressColor} text-gray-200 shadow-2xl`
//                     : 'bg-gray-800/50 hover:bg-gray-700/50 hover:scale-105'
//                 }`}
//                 onClick={() => setSelectedClient(client)}
//               >
//                 <div className="flex items-center space-x-4">
//                   <img 
//                     src={client.image} 
//                     alt={client.name} 
//                     className="w-16 h-16 rounded-full border-4 border-gray-700/20 group-hover:border-gray-600/40 transition-all"
//                   />
//                   <div>
//                     <h3 className="font-semibold text-lg">{client.name}</h3>
//                     <div className="text-sm text-gray-400">
//                       <p>Age: {client.age}</p>
//                       <p>BMI: {client.bmi.toFixed(1)}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 space-y-6">
//           {selectedClient && (
//             <div className="bg-gray-900/60 backdrop-blur-lg rounded-2xl p-6 shadow-2xl">
//               <div className="flex items-center space-x-4 mb-4">
//                 <User className="w-8 h-8 text-gray-500" />
//                 <h2 className="text-2xl font-semibold text-gray-400">Client Details</h2>
//               </div>
//               <div className="flex items-center space-x-6">
//                 <img 
//                   src={selectedClient.image} 
//                   alt={selectedClient.name} 
//                   className="w-32 h-32 rounded-2xl shadow-2xl"
//                 />
//                 <div className="space-y-2 text-gray-300">
//                   <p><strong className="text-gray-400">Name:</strong> {selectedClient.name}</p>
//                   <p><strong className="text-gray-400">Age:</strong> {selectedClient.age}</p>
//                   <p><strong className="text-gray-400">BMI:</strong> {selectedClient.bmi.toFixed(1)}</p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Diet Plan Upload */}
//           <div className="bg-gray-900/60 backdrop-blur-lg rounded-2xl shadow-2xl p-6">
//             <div className="flex items-center space-x-4 mb-4">
//               <FileText className="w-8 h-8 text-gray-500" />
//               <h2 className="text-2xl font-semibold text-gray-400">Diet Plan Upload</h2>
//             </div>
//             <div className="border-2 border-dashed border-gray-700 rounded-2xl p-8 text-center hover:bg-gray-800/30 transition-all">
//               <input
//                 type="file"
//                 accept=".pdf"
//                 onChange={handleFileChange}
//                 className="hidden"
//                 id="file-upload"
//               />
//               <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
//                 <Upload className="w-16 h-16 text-gray-500 mb-4" />
//                 <span className="text-lg text-gray-600">Click to upload PDF diet plan</span>
//               </label>
//               {selectedFile && (
//                 <div className="mt-6 flex items-center justify-center space-x-4">
//                   <CheckCircle className="w-8 h-8 text-green-600" />
//                   <p className="text-lg text-gray-300">{selectedFile.name}</p>
//                   <button
//                     onClick={handleUpload}
//                     className="px-6 py-3 bg-gradient-to-r from-gray-800 to-black text-gray-200 rounded-xl hover:from-gray-900 hover:to-gray-950 transition-colors"
//                   >
//                     Upload Plan
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Weekly Schedule */}
//           {selectedClient && (
//             <div className="bg-gray-900/60 backdrop-blur-lg rounded-2xl p-6 shadow-2xl">
//               <div className="flex items-center space-x-4 mb-4">
//                 <Calendar className="w-8 h-8 text-gray-500" />
//                 <h2 className="text-2xl font-semibold text-gray-400">Weekly Schedule</h2>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
//                 {generateSchedule(selectedClient.bmi).map((day) => (
//                   <div key={day.day} className="bg-gray-800/50 p-4 rounded-xl shadow-lg hover:bg-gray-700/50 transition-all">
//                     <h3 className="font-semibold text-gray-500 mb-2">{day.day}</h3>
//                     <ul className="space-y-2 text-sm text-gray-400">
//                       {day.activities.map((activity, index) => (
//                         <li key={index} className="text-gray-500">• {activity}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// }

// export default TrainerDashboard;












// import React, { useState, useEffect } from 'react';
// import { Upload, Calendar, User, FileText, Activity, CheckCircle } from 'lucide-react';
// import axios from 'axios';

// function TrainerDashboard() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [clients, setClients] = useState([]);
//   const [selectedClient, setSelectedClient] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const trainerId = 1; // Assume this is dynamically fetched or passed down

//   useEffect(() => {
//     const fetchClients = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           console.error("Token is not available.");
//           return;
//         }
        
//         const response = await axios.get(
//           `http://localhost:8080/api/v1/trainer/getUserByTrainer/${trainerId}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         setClients(response.data); // Assuming the API returns an array of clients
//         setLoading(false);
//       } catch (error) {
//         setError("Failed to fetch clients. Please try again.");
//         setLoading(false);
//       }
//     };
//     fetchClients();
//   }, [trainerId]);

//   const generateSchedule = (bmi) => {
//     const baseSchedule = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => {
//       let activities = [];
//       if (bmi < 18.5) {
//         activities = ['Strength Training', 'High-Calorie Diet', 'Protein Shake'];
//       } else if (bmi < 25) {
//         activities = ['Mixed Cardio', 'Balanced Diet', 'Maintenance Routine'];
//       } else {
//         activities = ['Cardio Focus', 'Calorie-Deficit Diet', 'HIIT Training'];
//       }
//       return { day, activities };
//     });
//     return baseSchedule;
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files?.[0];
//     if (file && file.type === 'application/pdf') {
//       setSelectedFile(file);
//     }
//   };

//   const handleUpload = () => {
//     if (selectedFile) {
//       console.log('Uploading:', selectedFile.name);
//       setSelectedFile(null);
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div 
//       className="min-h-screen text-gray-200" 
//       style={{
//         backgroundImage: "url('https://source.unsplash.com/1600x900/?gym,fitness')", // Background image for the page
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed',
//       }}
//     >
//       <header className="p-6 shadow-2xl bg-gray-950/50">
//         <div className="container mx-auto flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <Activity className="w-10 h-10 text-gray-500" />
//             <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300">
//               Trainer Dashboard
//             </h1>
//           </div>
//         </div>
//       </header>

//       <div className="container mx-auto p-6 flex space-x-6">
//         {/* Sidebar */}
//         <aside className="w-1/4 bg-gray-900/60 backdrop-blur-lg p-6 rounded-2xl shadow-2xl">
//           <h2 className="text-xl font-semibold mb-4 text-gray-400">Assigned Clients</h2>
//           <div className="space-y-4">
//             {clients.map(client => (
//               <div
//                 key={client.id}
//                 className={`p-4 rounded-xl cursor-pointer transition-all group ${selectedClient?.id === client.id ? `bg-gradient-to-r ${client.progressColor} text-gray-200 shadow-2xl` : 'bg-gray-800/50 hover:bg-gray-700/50 hover:scale-105'}`}
//                 onClick={() => setSelectedClient(client)}
//               >
//                 <div className="flex items-center space-x-4">
//                   <img 
//                     src={client.image} 
//                     alt={client.name} 
//                     className="w-16 h-16 rounded-full border-4 border-gray-700/20 group-hover:border-gray-600/40 transition-all"
//                   />
//                   <div>
//                     <h3 className="font-semibold text-lg">{client.name}</h3>
//                     <div className="text-sm text-gray-400">
//                       <p>Age: {client.age}</p>
//                       <p>BMI: {client.bmi.toFixed(1)}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 space-y-6">
//           {selectedClient && (
//             <div className="bg-gray-900/60 backdrop-blur-lg rounded-2xl p-6 shadow-2xl">
//               <div className="flex items-center space-x-4 mb-4">
//                 <User className="w-8 h-8 text-gray-500" />
//                 <h2 className="text-2xl font-semibold text-gray-400">Client Details</h2>
//               </div>
//               <div className="flex items-center space-x-6">
//                 <img 
//                   src={selectedClient.image} 
//                   alt={selectedClient.name} 
//                   className="w-32 h-32 rounded-2xl shadow-2xl"
//                 />
//                 <div className="space-y-2 text-gray-300">
//                   <p><strong className="text-gray-400">Name:</strong> {selectedClient.name}</p>
//                   <p><strong className="text-gray-400">Age:</strong> {selectedClient.age}</p>
//                   <p><strong className="text-gray-400">BMI:</strong> {selectedClient.bmi.toFixed(1)}</p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Diet Plan Upload */}
//           <div className="bg-gray-900/60 backdrop-blur-lg rounded-2xl shadow-2xl p-6">
//             <div className="flex items-center space-x-4 mb-4">
//               <FileText className="w-8 h-8 text-gray-500" />
//               <h2 className="text-2xl font-semibold text-gray-400">Diet Plan Upload</h2>
//             </div>
//             <div className="border-2 border-dashed border-gray-700 rounded-2xl p-8 text-center hover:bg-gray-800/30 transition-all">
//               <input
//                 type="file"
//                 accept=".pdf"
//                 onChange={handleFileChange}
//                 className="hidden"
//                 id="file-upload"
//               />
//               <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
//                 <Upload className="w-16 h-16 text-gray-500 mb-4" />
//                 <span className="text-lg text-gray-600">Click to upload PDF diet plan</span>
//               </label>
//               {selectedFile && (
//                 <div className="mt-6 flex items-center justify-center space-x-4">
//                   <CheckCircle className="w-8 h-8 text-green-600" />
//                   <p className="text-lg text-gray-300">{selectedFile.name}</p>
//                   <button
//                     onClick={handleUpload}
//                     className="px-6 py-3 bg-gradient-to-r from-gray-800 to-black text-gray-200 rounded-xl hover:from-gray-900 hover:to-gray-950 transition-colors"
//                   >
//                     Upload Plan
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Weekly Schedule */}
//           {selectedClient && (
//             <div className="bg-gray-900/60 backdrop-blur-lg rounded-2xl p-6 shadow-2xl">
//               <div className="flex items-center space-x-4 mb-4">
//                 <Calendar className="w-8 h-8 text-gray-500" />
//                 <h2 className="text-2xl font-semibold text-gray-400">Weekly Schedule</h2>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
//                 {generateSchedule(selectedClient.bmi).map((day) => (
//                   <div key={day.day} className="bg-gray-800/50 p-4 rounded-xl shadow-lg hover:bg-gray-700/50 transition-all">
//                     <h3 className="font-semibold text-gray-500 mb-2">{day.day}</h3>
//                     <ul className="space-y-2 text-sm text-gray-400">
//                       {day.activities.map((activity, index) => (
//                         <li key={index} className="text-gray-500">• {activity}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// }

// export default TrainerDashboard;













// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function TrainerDashboard() {
//   const [users, setUsers] = useState([]);
//   const [trainers, setTrainers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [trainerId] = useState('some-trainer-id'); // Replace with actual trainerId or dynamic value

//   // Fetch users
//   const fetchUsers = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         console.error("Token is not available.");
//         return;
//       }

//       const response = await axios.get(
//         `http://localhost:8080/api/v1/trainer/getUserByTrainer/${trainerId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       if (response.status === 200) {
//         setUsers(response.data); // Assuming the API returns an array of users
//       } else {
//         throw new Error('Failed to fetch users');
//       }
//     } catch (error) {
//       console.error("Error fetching users:", error);
//       setErrorMessage('Failed to fetch users. Please try again.');
//     }
//   };

//   // Fetch trainers
//   const fetchTrainers = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         console.error("Token is not available.");
//         return;
//       }

//       const response = await axios.get(
//         `http://localhost:8080/api/v1/admin/getAllTrainers`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       if (response.status === 200) {
//         setTrainers(response.data); // Assuming the API returns an array of trainers
//       } else {
//         throw new Error('Failed to fetch trainers');
//       }
//     } catch (error) {
//       console.error("Error fetching trainers:", error);
//       setErrorMessage('Failed to fetch trainers. Please try again.');
//     }
//   };

//   // Fetch both users and trainers when the component is mounted
//   useEffect(() => {
//     fetchUsers();
//     fetchTrainers();
//     setLoading(false);
//   }, [trainerId]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Trainer Dashboard</h1>

//       {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

//       <div>
//         <h2>Users List</h2>
//         {users.length > 0 ? (
//           <ul>
//             {users.map((user) => (
//               <li key={user.id}>{user.name} - {user.age}</li>
//             ))}
//           </ul>
//         ) : (
//           <p>No users found.</p>
//         )}
//       </div>

//       <div>
//         <h2>Trainers List</h2>
//         {trainers.length > 0 ? (
//           <ul>
//             {trainers.map((trainer) => (
//               <li key={trainer.id}>{trainer.name} - {trainer.specialization}</li>
//             ))}
//           </ul>
//         ) : (
//           <p>No trainers found.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default TrainerDashboard;














// import React, { useState, useEffect } from 'react';
// import { Table, Spinner, Alert } from 'react-bootstrap';
// import axios from 'axios';

// function TrainerDashboard() {
//   const [users, setUsers] = useState([]);
//   const [trainers, setTrainers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [trainerId] = useState('some-trainer-id'); // Replace with actual trainerId or dynamic value

//   // Fetch users
//   const fetchUsers = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         setError("Authentication token missing. Please log in again.");
//         setLoading(false);
//         return;
//       }

//       const response = await axios.get(
//         `http://localhost:8080/api/v1/trainer/getUserByTrainer/${trainerId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setUsers(response.data);
//     } catch (error) {
//       setError('Failed to fetch users. Please try again.');
//     }
//   };

//   // Fetch trainers
//   const fetchTrainers = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         setError("Authentication token missing. Please log in again.");
//         setLoading(false);
//         return;
//       }

//       const response = await axios.get(
//         `http://localhost:8080/api/v1/admin/getAllTrainers`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setTrainers(response.data);
//     } catch (error) {
//       setError('Failed to fetch trainers. Please try again.');
//     }
//   };

//   // Fetch both users and trainers when the component is mounted
//   useEffect(() => {
//     fetchUsers();
//     fetchTrainers();
//     setLoading(false);
//   }, [trainerId]);

//   return (
//     <div className="mt-4 mx-auto" style={{ maxWidth: '800px' }}>
//       <h2 className="text-center">Trainer Dashboard</h2>

//       {loading && <Spinner animation="border" variant="primary" />}
//       {error && <Alert variant="danger">{error}</Alert>}

//       {!loading && !error && trainers.length > 0 && (
//         <div>
//           <h3>Trainers List</h3>
//           <Table bordered hover>
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 <th>Phone</th>
//                 <th>Email</th>
//                 <th>Address</th>
//               </tr>
//             </thead>
//             <tbody>
//               {trainers.map((trainer, index) => (
//                 <tr key={trainer.id}>
//                   <td>{index + 1}</td>
//                   <td>{trainer.firstName || "N/A"}</td>
//                   <td>{trainer.lastName || "N/A"}</td>
//                   <td>{trainer.phoneNo || "N/A"}</td>
//                   <td>{trainer.email || "N/A"}</td>
//                   <td>{trainer.address || "N/A"}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </div>
//       )}

//       {!loading && !error && trainers.length === 0 && (
//         <Alert variant="warning">No trainers available.</Alert>
//       )}

//       {!loading && !error && users.length > 0 && (
//         <div>
//           <h3>Users List</h3>
//           <Table bordered hover>
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Name</th>
//                 <th>Age</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user, index) => (
//                 <tr key={user.id}>
//                   <td>{index + 1}</td>
//                   <td>{user.name || "N/A"}</td>
//                   <td>{user.age || "N/A"}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </div>
//       )}

//       {!loading && !error && users.length === 0 && (
//         <Alert variant="warning">No users found.</Alert>
//       )}
//     </div>
//   );
// }

// export default TrainerDashboard;
















// import React, { useState, useEffect } from 'react';
// import { Table, Spinner, Alert } from 'react-bootstrap';
// import axios from 'axios';

// const TrainerDashboard = () => {
//   const [users, setUsers] = useState([]); // List of users assigned to the trainer
//   const [loading, setLoading] = useState(true); // Loading state while fetching data
//   const [error, setError] = useState(null); // Error state for API call

//   const trainerId = 6; // Replace with dynamic trainer ID or get from URL params

//   // Fetch the users assigned to a specific trainer by trainerId
//   const fetchUsers = async () => {
//     try {
//       const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
//       if (!token) {
//         setError("Authentication token missing. Please log in again.");
//         setLoading(false);
//         return;
//       }

//       // API call to fetch users by trainerId
//       const response = await axios.get(
//         `http://localhost:8080/api/v1/trainer/getUsersByTrainer/${trainerId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Include token for authentication
//           },
//         }
//       );

//       setUsers(response.data); // Set the fetched users to the state
//       setLoading(false); // Stop loading once data is fetched
//     } catch (error) {
//       setError("Failed to fetch users. Please try again.");
//       setLoading(false); // Stop loading in case of error
//     }
//   };

//   useEffect(() => {
//     fetchUsers(); // Call the fetch function when the component is mounted
//   }, []); // Empty dependency array to run once on mount

//   return (
//     <div className="mt-4 mx-auto" style={{ maxWidth: '900px' }}>
//       <h2 className="text-center">Trainer Dashboard</h2>

//       {/* Loading state */}
//       {loading && <Spinner animation="border" variant="primary" />}
//       {/* Error state */}
//       {error && <Alert variant="danger">{error}</Alert>}

//       {/* User List */}
//       {!loading && !error && users.length > 0 && (
//         <div>
//           <h3>Users Assigned to Trainer</h3>
//           <Table bordered hover>
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Name</th>
//                 <th>Age</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user, index) => (
//                 <tr key={user.id}>
//                   <td>{index + 1}</td>
//                   <td>{user.name || "N/A"}</td>
//                   <td>{user.age || "N/A"}</td>
//                   <td>{user.email || "N/A"}</td>
//                   <td>{user.phone || "N/A"}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </div>
//       )}

//       {/* No users found message */}
//       {!loading && !error && users.length === 0 && (
//         <Alert variant="warning">No users found for this trainer.</Alert>
//       )}
//     </div>
//   );
// };

// export default TrainerDashboard;









// import React, { useState, useEffect } from 'react';
// import { Table, Spinner, Alert, Button, Modal, Form } from 'react-bootstrap';
// import axios from 'axios';

// const TrainerDashboard = () => {
//   const [users, setUsers] = useState([]); // List of users assigned to the trainer
//   const [loading, setLoading] = useState(true); // Loading state while fetching data
//   const [error, setError] = useState(null); // Error state for API call
//   const [selectedUser, setSelectedUser] = useState(null); // State for selected user details
//   const [showModal, setShowModal] = useState(false); // Modal visibility state
//   const [pdfFile, setPdfFile] = useState(null); // PDF file state

//   const trainerId = 6; // Replace with dynamic trainer ID or get from URL params

//   // Fetch the users assigned to a specific trainer by trainerId
//   const fetchUsers = async () => {
//     try {
//       const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
//       if (!token) {
//         setError("Authentication token missing. Please log in again.");
//         setLoading(false);
//         return;
//       }

//       // API call to fetch users by trainerId
//       const response = await axios.get(
//         `http://localhost:8080/api/v1/trainer/getUsersByTrainer/${trainerId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Include token for authentication
//           },
//         }
//       );

//       setUsers(response.data); // Set the fetched users to the state
//       setLoading(false); // Stop loading once data is fetched
//     } catch (error) {
//       setError("Failed to fetch users. Please try again.");
//       setLoading(false); // Stop loading in case of error
//     }
//   };

//   useEffect(() => {
//     fetchUsers(); // Call the fetch function when the component is mounted
//   }, []); // Empty dependency array to run once on mount

//   // Handle file input change
//   const handleFileChange = (e) => {
//     setPdfFile(e.target.files[0]);
//   };

//   // Handle PDF file upload
//   const handleUploadPdf = async () => {
//     if (!pdfFile) {
//       setError("Please select a PDF file to upload.");
//       return;
//     }

//     try {
//       const formData = new FormData();
//       formData.append('file', pdfFile);

//       const token = localStorage.getItem('token');
//       const response = await axios.post(
//         `http://localhost:8080/api/v1/trainer/uploadPdf/${selectedUser.id}`, // Replace with correct endpoint for uploading PDF
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );

//       alert('PDF uploaded successfully');
//       setShowModal(false); // Close modal after successful upload
//       setPdfFile(null); // Reset the selected file
//     } catch (error) {
//       setError('Failed to upload PDF. Please try again.');
//     }
//   };

//   // Open the modal with the selected user details
//   const handleViewDetails = (user) => {
//     setSelectedUser(user);
//     setShowModal(true);
//   };

//   // Close Modal
//   const handleCloseModal = () => {
//     setShowModal(false);
//     setPdfFile(null); // Reset file input
//   };

//   return (
//     <div className="mt-4 mx-auto" style={{ maxWidth: '900px' }}>
//       <h2 className="text-center">Trainer Dashboard</h2>

//       {/* Loading state */}
//       {loading && <Spinner animation="border" variant="primary" />}
//       {/* Error state */}
//       {error && <Alert variant="danger">{error}</Alert>}

//       {/* User List */}
//       {!loading && !error && users.length > 0 && (
//         <div>
//           <h3>Users Assigned to Trainer</h3>
//           <Table bordered hover>
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Name</th>
//                 <th>Age</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>Action</th> {/* New column for "View Details" button */}
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user, index) => (
//                 <tr key={user.id}>
//                   <td>{index + 1}</td>
//                   <td>{user.name || "N/A"}</td>
//                   <td>{user.age || "N/A"}</td>
//                   <td>{user.email || "N/A"}</td>
//                   <td>{user.phone || "N/A"}</td>
//                   <td>
//                     <Button
//                       variant="info"
//                       onClick={() => handleViewDetails(user)} // View details of the selected user
//                     >
//                       View Details
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </div>
//       )}

//       {/* No users found message */}
//       {!loading && !error && users.length === 0 && (
//         <Alert variant="warning">No users found for this trainer.</Alert>
//       )}

//       {/* Modal for user details and file upload */}
//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>User Details: {selectedUser?.name}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedUser && (
//             <div>
//               <p><strong>Name:</strong> {selectedUser.name}</p>
//               <p><strong>Age:</strong> {selectedUser.age}</p>
//               <p><strong>Email:</strong> {selectedUser.email}</p>
//               <p><strong>Phone:</strong> {selectedUser.phone}</p>
//               <p><strong>Address:</strong> {selectedUser.address || "N/A"}</p>
//               <p><strong>Additional Info:</strong> {selectedUser.additionalInfo || "N/A"}</p>

//               {/* File Upload */}
//               <Form>
//                 <Form.Group controlId="formFile">
//                   <Form.Label>Upload Diet Plan PDF</Form.Label>
//                   <Form.Control
//                     type="file"
//                     accept=".pdf"
//                     onChange={handleFileChange}
//                   />
//                 </Form.Group>
//                 {error && <Alert variant="danger">{error}</Alert>}
//               </Form>
//             </div>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleUploadPdf}>
//             Upload PDF
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default TrainerDashboard;












import React, { useState, useEffect } from 'react';
import { Table, Spinner, Alert, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

const TrainerDashboard = () => {
  const [users, setUsers] = useState([]); // List of users assigned to the trainer
  const [loading, setLoading] = useState(true); // Loading state while fetching data
  const [error, setError] = useState(null); // Error state for API call
  const [selectedUser, setSelectedUser] = useState(null); // State for selected user details
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [pdfFile, setPdfFile] = useState(null); // PDF file state

  const trainerId = 6; // Replace with dynamic trainer ID or get from URL params

  // Fetch the users assigned to a specific trainer by trainerId
  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
      if (!token) {
        setError("Authentication token missing. Please log in again.");
        setLoading(false);
        return;
      }

      // API call to fetch users by trainerId
      const response = await axios.get(
        `http://localhost:8080/api/v1/trainer/getUsersByTrainer/${trainerId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token for authentication
          },
        }
      );

      setUsers(response.data); // Set the fetched users to the state
      setLoading(false); // Stop loading once data is fetched
    } catch (error) {
      setError("Failed to fetch users. Please try again.");
      setLoading(false); // Stop loading in case of error
    }
  };

  useEffect(() => {
    fetchUsers(); // Call the fetch function when the component is mounted
  }, []); // Empty dependency array to run once on mount

  // Handle file input change
  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  // Handle PDF file upload to localStorage
  const handleUploadPdf = async () => {
    if (!pdfFile) {
      setError("Please select a PDF file to upload.");
      return;
    }

    try {
      // Convert the file to base64
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Pdf = reader.result; // The base64 string

        // Store the base64 PDF in localStorage
        localStorage.setItem('uploadedPdf', base64Pdf);

        alert('PDF uploaded and saved to localStorage');
        setShowModal(false); // Close modal after successful upload
        setPdfFile(null); // Reset the selected file
      };

      // Read the file as a base64 string
      reader.readAsDataURL(pdfFile);
    } catch (error) {
      setError('Failed to upload PDF. Please try again.');
    }
  };

  // Open the modal with the selected user details
  const handleViewDetails = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setShowModal(false);
    setPdfFile(null); // Reset file input
  };

  // Retrieve the stored PDF from localStorage
  const getStoredPdf = () => {
    const storedPdf = localStorage.getItem('uploadedPdf');
    if (storedPdf) {
      console.log("Stored PDF:", storedPdf);
      // You can convert it back to a Blob if you want to display/download it
      const byteCharacters = atob(storedPdf.split(',')[1]); // Get the binary data from the base64 string
      const byteArrays = [];

      for (let offset = 0; offset < byteCharacters.length; offset++) {
        const byteNumber = byteCharacters.charCodeAt(offset);
        byteArrays.push(byteNumber);
      }

      const byteArray = new Uint8Array(byteArrays);
      const blob = new Blob([byteArray], { type: 'application/pdf' });

      // To display in a new tab
      const url = URL.createObjectURL(blob);
      window.open(url);

      // Or, you can trigger download:
      // const link = document.createElement('a');
      // link.href = url;
      // link.download = 'diet_plan.pdf';
      // link.click();
    }
  };

  return (
    <div className="mt-4 mx-auto" style={{ maxWidth: '900px' }}>
      <h2 className="text-center">Trainer Dashboard</h2>

      {/* Loading state */}
      {loading && <Spinner animation="border" variant="primary" />}
      {/* Error state */}
      {error && <Alert variant="danger">{error}</Alert>}

      {/* User List */}
      {!loading && !error && users.length > 0 && (
        <div>
          <h3>Users Assigned to Trainer</h3>
          <Table bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th> {/* New column for "View Details" button */}
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name || "N/A"}</td>
                  <td>{user.age || "N/A"}</td>
                  <td>{user.email || "N/A"}</td>
                  <td>{user.phone || "N/A"}</td>
                  <td>
                    <Button
                      variant="info"
                      onClick={() => handleViewDetails(user)} // View details of the selected user
                    >
                      View Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}

      {/* No users found message */}
      {!loading && !error && users.length === 0 && (
        <Alert variant="warning">No users found for this trainer.</Alert>
      )}

      {/* Modal for user details and file upload */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>User Details: {selectedUser?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUser && (
            <div>
              <p><strong>Name:</strong> {selectedUser.name}</p>
              <p><strong>Age:</strong> {selectedUser.age}</p>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>Phone:</strong> {selectedUser.phone}</p>
              <p><strong>Address:</strong> {selectedUser.address || "N/A"}</p>
              <p><strong>Additional Info:</strong> {selectedUser.additionalInfo || "N/A"}</p>

              {/* File Upload */}
              <Form>
                <Form.Group controlId="formFile">
                  <Form.Label>Upload Diet Plan PDF</Form.Label>
                  <Form.Control
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                  />
                </Form.Group>
                {error && <Alert variant="danger">{error}</Alert>}
              </Form>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUploadPdf}>
            Upload PDF
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Button to Retrieve and Display the Stored PDF */}
      <Button variant="success" onClick={getStoredPdf}>
        Retrieve Stored PDF
      </Button>
    </div>
  );
};

export default TrainerDashboard;
