




// import React, { useState } from 'react';
// import { Navbar, Nav, Button, Alert, Table } from 'react-bootstrap';
// import styled from 'styled-components';
// import MembershipPlans from './MembershipPlan';
// import TrainerRegistrationForm from './TrainerRegistrationForm';
// import TrainerList from './TrainerList';
// import UserList from './UserList';

// // Styled-component for FullScreenContainer
// const FullScreenContainer = styled.div`
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
// `;

// const AdminDashboard = () => {
//   const [showPlans, setShowPlans] = useState(false);
//   const [showProfile, setShowProfile] = useState(true);
//   const [showTrainerForm, setShowTrainerForm] = useState(false);
//   const [showTrainerList, setShowTrainerList] = useState(false);
//   const [showUserList, setShowUserList] = useState(false);
//   const [trainerData, setTrainerData] = useState([
//     { firstName: 'Sagar', lastName: 'Bhanuse', mobile: '1234567890', email: 'sagar@example.com', address: 'City A' },
//     { firstName: 'prathmesh', lastName: 'pathkar', mobile: '0987654321', email: 'prathmesh@example.com', address: 'City B' },
//   ]);
//   const [showNotification, setShowNotification] = useState(false);

//   const handleMembershipClick = () => {
//     setShowPlans(true);
//     setShowProfile(false);
//     setShowTrainerForm(false);
//     setShowTrainerList(false);
//     setShowUserList(false);
//   };

//   const handleProfileClick = () => {
//     setShowPlans(false);
//     setShowProfile(true);
//     setShowTrainerForm(false);
//     setShowTrainerList(false);
//     setShowUserList(false);
//   };

//   const handleAddTrainerClick = () => {
//     setShowTrainerForm(true);
//     setShowPlans(false);
//     setShowProfile(false);
//     setShowTrainerList(false);
//     setShowUserList(false);
//   };

//   const handleTrainerListClick = () => {
//     setShowTrainerList(true);
//     setShowTrainerForm(false);
//     setShowPlans(false);
//     setShowProfile(false);
//     setShowUserList(false);
//   };

//   const handleUserListClick = () => {
//     setShowUserList(true);
//     setShowTrainerForm(false);
//     setShowTrainerList(false);
//     setShowPlans(false);
//     setShowProfile(false);
//   };

//   const addTrainer = (trainer) => {
//     setTrainerData((prev) => [...prev, trainer]);
//     setShowNotification(true);
//     setTimeout(() => setShowNotification(false), 3000);
//   };

//   return (
    
//     <FullScreenContainer>
//       <div className="container-fluid mt-4 pt-2">
//   <div className="d-flex flex-row flex-nowrap justify-content-start align-items-center gap-3">
//     <Button variant="primary" onClick={handleProfileClick}>Admin Admin</Button>
//     <Button variant="secondary" onClick={handleMembershipClick}>Membership Plans</Button>
//     <Button variant="success" onClick={handleAddTrainerClick}>Add Trainer</Button>
//     <Button variant="info" onClick={handleTrainerListClick}>Trainer List</Button>
//     <Button variant="success" onClick={handleUserListClick}>User List</Button>
//     <Button variant="danger">Sign Out</Button>
//   </div>



//         {showNotification && (
//           <Alert variant="success" className="mt-3 text-center">
//             Trainer details have been saved successfully!
//           </Alert>
//         )}

//         {showPlans && <MembershipPlans />}
//         {showProfile && (
//           <div className="mt-5 text-center">
//             <h2>Welcome Admin</h2>
//             <h4>Profile</h4>
//             <div className="mt-4 mx-auto" style={{ maxWidth: '800px' }}>
//               <Table bordered>
//                 <tbody>
//                   <tr>
//                     <th>First Name</th>
//                     <td>admin</td>
//                   </tr>
//                   <tr>
//                     <th>Last Name</th>
//                     <td>admin</td>
//                   </tr>
//                   <tr>
//                     <th>Email</th>
//                     <td>admin@gmail.com</td>
//                   </tr>
//                   <tr>
//                     <th>Address</th>
//                     <td>Bhusawal</td>
//                   </tr>
//                 </tbody>
//               </Table>
//             </div>
//           </div>
//         )}

//         {showTrainerForm && <TrainerRegistrationForm onAddTrainer={addTrainer} />}
//         {showTrainerList && <TrainerList trainers={trainerData} />}
//         {showUserList && <UserList />}
//       </div>

//       <footer className="bg-dark text-white text-center py-4 mt-auto">
//         <p className="mb-0">Contact Us: info@FitFounder.com | Phone: (012) 456-7890</p>
//         <p>&copy; 2024 FitFounder Gym. All rights reserved.</p>
//       </footer>
//     </FullScreenContainer>
//   );
// };

// export default AdminDashboard;





















import React, { useState } from 'react';
import { Button, Alert, Table } from 'react-bootstrap';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import MembershipPlans from './MembershipPlan';
import TrainerRegistrationForm from './TrainerRegistrationForm';
import TrainerList from './TrainerList';
import UserList from './UserList';

// Styled-component for FullScreenContainer
const FullScreenContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const AdminDashboard = () => {
  const navigate = useNavigate();
  
  const [showPlans, setShowPlans] = useState(false);
  const [showProfile, setShowProfile] = useState(true);
  const [showTrainerForm, setShowTrainerForm] = useState(false);
  const [showTrainerList, setShowTrainerList] = useState(false);
  const [showUserList, setShowUserList] = useState(false);
  const [trainerData, setTrainerData] = useState([
    { firstName: 'Sagar', lastName: 'Bhanuse', mobile: '1234567890', email: 'sagar@example.com', address: 'City A' },
    { firstName: 'Prathmesh', lastName: 'Pathkar', mobile: '0987654321', email: 'prathmesh@example.com', address: 'City B' },
  ]);
  const [showNotification, setShowNotification] = useState(false);

  const handleMembershipClick = () => {
    setShowPlans(true);
    setShowProfile(false);
    setShowTrainerForm(false);
    setShowTrainerList(false);
    setShowUserList(false);
  };

  const handleProfileClick = () => {
    setShowPlans(false);
    setShowProfile(true);
    setShowTrainerForm(false);
    setShowTrainerList(false);
    setShowUserList(false);
  };

  const handleAddTrainerClick = () => {
    setShowTrainerForm(true);
    setShowPlans(false);
    setShowProfile(false);
    setShowTrainerList(false);
    setShowUserList(false);
  };

  const handleTrainerListClick = () => {
    setShowTrainerList(true);
    setShowTrainerForm(false);
    setShowPlans(false);
    setShowProfile(false);
    setShowUserList(false);
  };

  const handleUserListClick = () => {
    setShowUserList(true);
    setShowTrainerForm(false);
    setShowTrainerList(false);
    setShowPlans(false);
    setShowProfile(false);
  };

  const addTrainer = (trainer) => {
    setTrainerData((prev) => [...prev, trainer]);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleSignOut = () => {
    localStorage.removeItem("token"); // Remove token
    navigate("/"); // Redirect to Home
  };

  return (
    <FullScreenContainer>
      <div className="container-fluid mt-4 pt-2">
        <div className="d-flex flex-row flex-nowrap justify-content-start align-items-center gap-3">
          <Button variant="primary" onClick={handleProfileClick}>Admin Admin</Button>
          <Button variant="secondary" onClick={handleMembershipClick}>Membership Plans</Button>
          <Button variant="success" onClick={handleAddTrainerClick}>Add Trainer</Button>
          <Button variant="info" onClick={handleTrainerListClick}>Trainer List</Button>
          <Button variant="success" onClick={handleUserListClick}>User List</Button>
          <Button variant="danger" onClick={handleSignOut}>Sign Out</Button>
        </div>

        {showNotification && (
          <Alert variant="success" className="mt-3 text-center">
            Trainer details have been saved successfully!
          </Alert>
        )}

        {showPlans && <MembershipPlans />}
        {showProfile && (
          <div className="mt-5 text-center">
            <h2>Welcome Admin</h2>
            <h4>Profile</h4>
            <div className="mt-4 mx-auto" style={{ maxWidth: '800px' }}>
              <Table bordered>
                <tbody>
                  <tr>
                    <th>First Name</th>
                    <td>admin</td>
                  </tr>
                  <tr>
                    <th>Last Name</th>
                    <td>admin</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>admin@gmail.com</td>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <td>Bhusawal</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        )}

        {showTrainerForm && <TrainerRegistrationForm onAddTrainer={addTrainer} />}
        {showTrainerList && <TrainerList trainers={trainerData} />}
        {showUserList && <UserList />}
      </div>

      <footer className="bg-dark text-white text-center py-4 mt-auto">
        <p className="mb-0">Contact Us: info@FitFounder.com | Phone: (012) 456-7890</p>
        <p>&copy; 2024 FitFounder Gym. All rights reserved.</p>
      </footer>
    </FullScreenContainer>
  );
};

export default AdminDashboard;
