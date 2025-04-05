

import React, { useEffect, useState } from 'react';
import { Table, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';

const TrainerList = () => {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("Authentication token missing. Please log in again.");
      setLoading(false);
      return;
    }

    axios.get("http://localhost:8080/api/v1/admin/getTrainers", {
      headers: {
        "Authorization": `Bearer ${token}`, // Use token for authentication
      },
    })
    .then(response => {
      setTrainers(response.data);
      setLoading(false);
    })
    .catch(error => {
      setError("Failed to fetch trainers. Please check your credentials.");
      setLoading(false);
    });
  }, []);

  return (
    <div className="mt-4 mx-auto" style={{ maxWidth: '800px' }}>
      <h2 className="text-center">Trainer List</h2>

      {loading && <Spinner animation="border" variant="primary" />}
      {error && <Alert variant="danger">{error}</Alert>}

      {!loading && !error && trainers.length > 0 && (
        <Table bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {trainers.map((trainer, index) => (
              <tr key={trainer.id}>
                <td>{index + 1}</td>
                <td>{trainer.firstName || "N/A"}</td>
                <td>{trainer.lastName || "N/A"}</td>
                <td>{trainer.phoneNo || "N/A"}</td>
                <td>{trainer.email || "N/A"}</td>
                <td>{trainer.address || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {!loading && !error && trainers.length === 0 && (
        <Alert variant="warning">No trainers available.</Alert>
      )}
    </div>
  );
};

export default TrainerList;















// import React, { useEffect, useState } from 'react';
// import { Table, Spinner, Alert, Dropdown, Button } from 'react-bootstrap';
// import axios from 'axios';

// const UserList = () => {
//   // State to store users, trainers, loading/error states
//   const [users, setUsers] = useState([]);
//   const [trainers, setTrainers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedTrainer, setSelectedTrainer] = useState({}); // Store selected trainer

//   // Fetch users data from backend
//   useEffect(() => {
//     const token = localStorage.getItem("token"); // Directly access token from localStorage
    
//     if (!token) {
//       setError("Authorization token is missing. Please log in.");
//       setLoading(false);
//       return;
//     }

//     // Fetch the list of users
//     axios.get('http://localhost:8080/api/v1/admin/getUsers', {
//       headers: {
//         Authorization: `Bearer ${token}`, // Ensure token is prefixed with "Bearer "
//       },
//     })
//     .then(response => {
//       setUsers(response.data);
//       setLoading(false);
//     })
//     .catch(error => {
//       setError("Failed to fetch users. Please check your credentials.");
//       setLoading(false);
//     });

//     // Fetch the list of trainers
//     axios.get('http://localhost:8080/api/v1/admin/getTrainers', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then(response => {
//       setTrainers(response.data);
//     })
//     .catch(error => {
//       setError("Failed to fetch trainers. Please try again.");
//     });

//   }, []);

//   // Handle trainer selection
//   const handleTrainerSelection = (userId, trainerId) => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       setError("Authorization token is missing.");
//       return;
//     }

//     // Hit the API to assign the selected trainer to the user
//     axios.get(`http://localhost:8080/api/v1/trainer/getUsersByTrainer/${trainerId}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then(response => {
//       // Handle the response if necessary (e.g., update user list or show a success message)
//       console.log("Users fetched by trainer:", response.data);
//       // Optionally update the users list or display success alert
//       alert("Users fetched by selected trainer!");
//     })
//     .catch(error => {
//       setError("Failed to fetch users by trainer. Please try again.");
//     });
//   };

//   if (loading) {
//     return (
//       <div className="text-center mt-5">
//         <Spinner animation="border" variant="primary" />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="mt-4">
//         <Alert variant="danger">{error}</Alert>
//       </div>
//     );
//   }

//   return (
//     <div className="mt-4 mx-auto" style={{ maxWidth: '900px' }}>
//       <h3 className="text-center">User List</h3>
//       <Table bordered>
//         <thead>
//           <tr>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Phone No</th>
//             <th>Email</th>
//             <th>Address</th>
//             <th>Select Trainer</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.length > 0 ? (
//             users.map((user, index) => (
//               <tr key={index}>
//                 <td>{user.firstName}</td>
//                 <td>{user.lastName}</td>
//                 <td>{user.phoneNo}</td>
//                 <td>{user.email}</td>
//                 <td>{user.address}</td>
//                 <td>
//                   <Dropdown onSelect={(trainerId) => handleTrainerSelection(user.id, trainerId)}>
//                     <Dropdown.Toggle variant="success" id="dropdown-basic">
//                       Select Trainer
//                     </Dropdown.Toggle>
//                     <Dropdown.Menu>
//                       {trainers.map((trainer) => (
//                         <Dropdown.Item key={trainer.id} eventKey={trainer.id}>
//                           {trainer.firstName} {trainer.lastName}
//                         </Dropdown.Item>
//                       ))}
//                     </Dropdown.Menu>
//                   </Dropdown>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6" className="text-center">
//                 No users found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default UserList;
