



// import React, { useEffect, useState } from 'react';
// import { Table, Spinner, Alert, Dropdown } from 'react-bootstrap';
// import axios from 'axios';

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [trainers, setTrainers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
    
//     if (!token) {
//       setError("Authorization token is missing. Please log in.");
//       setLoading(false);
//       return;
//     }

//     // Fetch users who are not trainers
//     axios.get('http://localhost:8080/api/v1/admin/getUsers', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then(response => {
//       // Filter to only include regular users (not trainers)
//       const regularUsers = response.data.filter(user => !user.isTrainer);
//       setUsers(regularUsers);
//       setLoading(false);
//     })
//     .catch(error => {
//       setError("Failed to fetch users. Please check your credentials.");
//       setLoading(false);
//     });

//     // Fetch only trainers
//     axios.get('http://localhost:8080/api/v1/admin/getTrainers', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then(response => {
//       // Filter to only include trainers
//       const trainersList = response.data.filter(user => user.isTrainer);
//       setTrainers(trainersList);
//     })
//     .catch(error => {
//       setError("Failed to fetch trainers. Please try again.");
//     });
//   }, []);

//   const handleTrainerSelection = (userId, trainerId) => {
//     const selectedTrainer = trainers.find(trainer => trainer.id.toString() === trainerId);
    
//     setUsers(users.map(user => {
//       if (user.id === userId) {
//         return {
//           ...user,
//           trainerId: trainerId,
//           selectedTrainerName: `${selectedTrainer.firstName} ${selectedTrainer.lastName}`
//         };
//       }
//       return user;
//     }));
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
//             <th>Assigned Trainer</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.length > 0 ? (
//             users.map((user) => (
//               <tr key={user.id}>
//                 <td>{user.firstName}</td>
//                 <td>{user.lastName}</td>
//                 <td>{user.phoneNo}</td>
//                 <td>{user.email}</td>
//                 <td>{user.address}</td>
//                 <td>
//                   <Dropdown onSelect={(trainerId) => handleTrainerSelection(user.id, trainerId)}>
//                     <Dropdown.Toggle variant="success" id={`dropdown-${user.id}`}>
//                       Select Trainer
//                     </Dropdown.Toggle>
//                     <Dropdown.Menu>
//                       {trainers.map((trainer) => (
//                         <Dropdown.Item 
//                           key={trainer.id} 
//                           eventKey={trainer.id}
//                         >
//                           {trainer.firstName} {trainer.lastName}
//                         </Dropdown.Item>
//                       ))}
//                     </Dropdown.Menu>
//                   </Dropdown>
//                 </td>
//                 <td>
//                   {user.selectedTrainerName || "No trainer assigned"}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="7" className="text-center">
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













// import React, { useEffect, useState } from 'react';
// import { Table, Spinner, Alert, Dropdown, Button } from 'react-bootstrap';
// import axios from 'axios';
// import UpdateUser from './UpdateUser';

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [trainers, setTrainers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showUpdateModal, setShowUpdateModal] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = () => {
//     const token = localStorage.getItem("token");
    
//     if (!token) {
//       setError("Authorization token is missing. Please log in.");
//       setLoading(false);
//       return;
//     }

//     // Fetch users who are not trainers
//     axios.get('http://localhost:8080/api/v1/admin/getUsers', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then(response => {
//       const regularUsers = response.data.filter(user => !user.isTrainer);
//       setUsers(regularUsers);
//       setLoading(false);
//     })
//     .catch(error => {
//       setError("Failed to fetch users. Please check your credentials.");
//       setLoading(false);
//     });

//     // Fetch only trainers
//     axios.get('http://localhost:8080/api/v1/admin/getTrainers', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then(response => {
//       const trainersList = response.data.filter(user => user.isTrainer);
//       setTrainers(trainersList);
//     })
//     .catch(error => {
//       setError("Failed to fetch trainers. Please try again.");
//     });
//   };

//   const handleTrainerSelection = (userId, trainerId) => {
//     const selectedTrainer = trainers.find(trainer => trainer.id.toString() === trainerId);
    
//     setUsers(users.map(user => {
//       if (user.id === userId) {
//         return {
//           ...user,
//           trainerId: trainerId,
//           selectedTrainerName: `${selectedTrainer.firstName} ${selectedTrainer.lastName}`
//         };
//       }
//       return user;
//     }));
//   };

//   const handleUpdateClick = (user) => {
//     setSelectedUser(user);
//     setShowUpdateModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowUpdateModal(false);
//     setSelectedUser(null);
//     // Refresh the user list after update
//     fetchUsers();
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
//             <th>Assigned Trainer</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.length > 0 ? (
//             users.map((user) => (
//               <tr key={user.id}>
//                 <td>{user.firstName}</td>
//                 <td>{user.lastName}</td>
//                 <td>{user.phoneNo}</td>
//                 <td>{user.email}</td>
//                 <td>{user.address}</td>
//                 <td>
//                   <Dropdown onSelect={(trainerId) => handleTrainerSelection(user.id, trainerId)}>
//                     <Dropdown.Toggle variant="success" id={`dropdown-${user.id}`}>
//                       Select Trainer
//                     </Dropdown.Toggle>
//                     <Dropdown.Menu>
//                       {trainers.map((trainer) => (
//                         <Dropdown.Item 
//                           key={trainer.id} 
//                           eventKey={trainer.id}
//                         >
//                           {trainer.firstName} {trainer.lastName}
//                         </Dropdown.Item>
//                       ))}
//                     </Dropdown.Menu>
//                   </Dropdown>
//                 </td>
//                 <td>
//                   {user.selectedTrainerName || "No trainer assigned"}
//                 </td>
//                 <td>
//                   <Button 
//                     variant="primary"
//                     onClick={() => handleUpdateClick(user)}
//                   >
//                     Update
//                   </Button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="8" className="text-center">
//                 No users found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </Table>

//       {showUpdateModal && (
//         <UpdateUser 
//           show={showUpdateModal}
//           handleClose={handleCloseModal}
//           user={selectedUser}
//         />
//       )}
//     </div>
//   );
// };

// export default UserList;









import React, { useEffect, useState } from 'react';
import { Table, Spinner, Alert, Button } from 'react-bootstrap';
import axios from 'axios';
import UpdateUser from './UpdateUser';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    const token = localStorage.getItem("token");
    
    if (!token) {
      setError("Authorization token is missing. Please log in.");
      setLoading(false);
      return;
    }

    // Fetch users who are not trainers
    axios.get('http://localhost:8080/api/v1/admin/getUsers', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      const regularUsers = response.data.filter(user => !user.isTrainer);
      setUsers(regularUsers);
      setLoading(false);
    })
    .catch(error => {
      setError("Failed to fetch users. Please check your credentials.");
      setLoading(false);
    });
  };

  const handleUpdateClick = (user) => {
    setSelectedUser(user);
    setShowUpdateModal(true);
  };

  const handleCloseModal = () => {
    setShowUpdateModal(false);
    setSelectedUser(null);
    // Refresh the user list after update
    fetchUsers();
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-4">
        <Alert variant="danger">{error}</Alert>
      </div>
    );
  }

  return (
    <div className="mt-4 mx-auto" style={{ maxWidth: '900px' }}>
      <h3 className="text-center">User List</h3>
      <Table bordered>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone No</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.phoneNo}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>
                  <Button 
                    variant="primary"
                    onClick={() => handleUpdateClick(user)}
                  >
                    Update
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {showUpdateModal && (
        <UpdateUser 
          show={showUpdateModal}
          handleClose={handleCloseModal}
          user={selectedUser}
        />
      )}
    </div>
  );
};

export default UserList;
