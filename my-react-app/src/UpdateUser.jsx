
// import React, { useState } from 'react';
// import { Modal, Button, Form, Alert } from 'react-bootstrap';
// import axios from 'axios';

// const UpdateUser = ({ show, handleClose, user }) => {
//   const [formData, setFormData] = useState({
//     firstName: user.firstName || '',
//     lastName: user.lastName || '',
//     phoneNo: user.phoneNo || '',
//     email: user.email || '',
//     address: user.address || '',
//     height: user.height || '',
//     weight: user.weight || '',
//     age: user.Age || '',
//     bmi: user.bmi || ''
//   });

//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess('');

//     const token = localStorage.getItem("token");

//     if (!token) {
//       setError("Authentication token missing. Please log in again.");
//       setLoading(false);
//       return;
//     }

//     console.log("Sending data to the backend:", formData); // Log the data to inspect it

//     try {
//       await axios.put(
//         `http://localhost:8080/api/v1/admin/updateUsersById/${user.id}`,
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json'
//           }
//         }
//       );

//       console.log("User ID:", user.id);
//       setSuccess("User details updated successfully!"); // Set success message

//       // Hide the modal after 2 seconds
//       setTimeout(() => {
//         handleClose();
//       }, 2000);
//     } catch (err) {
//       console.error("Error occurred:", err.response);
//       setError(err.response?.data?.message || 'Failed to update user');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Modal show={show} onHide={handleClose} size="lg">
//       <Modal.Header closeButton>
//         <Modal.Title>Update User Details</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         {error && <Alert variant="danger">{error}</Alert>}
//         {success && <Alert variant="success">{success}</Alert>} {/* Success message */}
        
//         <Form onSubmit={handleSubmit}>
//           <div className="row">
//             <div className="col-md-6">
//               <Form.Group className="mb-3">
//                 <Form.Label>First Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </div>
            
//             <div className="col-md-6">
//               <Form.Group className="mb-3">
//                 <Form.Label>Last Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </div>
//           </div>

//           <div className="row">
//             <div className="col-md-6">
//               <Form.Group className="mb-3">
//                 <Form.Label>Phone Number</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="phoneNo"
//                   value={formData.phoneNo}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </div>
            
//             <div className="col-md-6">
//               <Form.Group className="mb-3">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </div>
//           </div>

//           <Form.Group className="mb-3">
//             <Form.Label>Address</Form.Label>
//             <Form.Control
//               as="textarea"
//               rows={3}
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//             />
//           </Form.Group>

//           <div className="row">
//             <div className="col-md-3">
//               <Form.Group className="mb-3">
//                 <Form.Label>Height</Form.Label>
//                 <Form.Control
//                   type="number"
//                   step="0.01"
//                   name="height"
//                   value={formData.height}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </div>
            
//             <div className="col-md-3">
//               <Form.Group className="mb-3">
//                 <Form.Label>Weight</Form.Label>
//                 <Form.Control
//                   type="number"
//                   step="0.01"
//                   name="weight"
//                   value={formData.weight}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </div>
            
//             <div className="col-md-3">
//               <Form.Group className="mb-3">
//                 <Form.Label>Age</Form.Label>
//                 <Form.Control
//                   type="number"
//                   name="age"
//                   value={formData.age}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </div>
            
//             <div className="col-md-3">
//               <Form.Group className="mb-3">
//                 <Form.Label>BMI</Form.Label>
//                 <Form.Control
//                   type="number"
//                   step="0.01"
//                   name="bmi"
//                   value={formData.bmi}
//                   onChange={handleChange}
//                 />
//               </Form.Group>
//             </div>
//           </div>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose} disabled={loading}>
//           Cancel
//         </Button>
//         <Button variant="primary" onClick={handleSubmit} disabled={loading}>
//           {loading ? 'Updating...' : 'Update User'}
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default UpdateUser;



















import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios';

const UpdateUser = ({ show, handleClose, user }) => {
  const [formData, setFormData] = useState({
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    phoneNo: user.phoneNo || '',
    email: user.email || '',
    address: user.address || '',
    height: user.height || '',
    weight: user.weight || '',
    age: user.Age || '',
    bmi: user.bmi || '',
    trainerId: user.trainerId || '', // Adding trainerId field
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [trainers, setTrainers] = useState([]);

  // Fetch trainers from the backend
  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Authentication token missing. Please log in again.");
          return;
        }

        const response = await axios.get(
          "http://localhost:8080/api/v1/admin/getTrainers",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          }
        );

        setTrainers(response.data);
      } catch (err) {
        setError('Failed to fetch trainers.');
      }
    };

    fetchTrainers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    const token = localStorage.getItem("token");

    if (!token) {
      setError("Authentication token missing. Please log in again.");
      setLoading(false);
      return;
    }

    try {
      await axios.put(
        `http://localhost:8080/api/v1/admin/updateUsersById/${user.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      setSuccess("User details updated successfully!");
      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Update User Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}

        <Form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
          </div>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </Form.Group>

          <div className="row">
            <div className="col-md-3">
              <Form.Group className="mb-3">
                <Form.Label>Height</Form.Label>
                <Form.Control
                  type="number"
                  step="0.01"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            
            <div className="col-md-3">
              <Form.Group className="mb-3">
                <Form.Label>Weight</Form.Label>
                <Form.Control
                  type="number"
                  step="0.01"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            
            <div className="col-md-3">
              <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            
            <div className="col-md-3">
              <Form.Group className="mb-3">
                <Form.Label>BMI</Form.Label>
                <Form.Control
                  type="number"
                  step="0.01"
                  name="bmi"
                  value={formData.bmi}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
          </div>

          {/* Add Trainer Dropdown */}
          <Form.Group className="mb-3">
            <Form.Label>Assign Trainer</Form.Label>
            <Form.Control
              as="select"
              name="trainerId"
              value={formData.trainerId}
              onChange={handleChange}
            >
              <option value="">Select Trainer</option>
              {trainers.map((trainer) => (
                <option key={trainer.id} value={trainer.id}>
                  {trainer.firstName} {trainer.lastName}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} disabled={loading}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit} disabled={loading}>
          {loading ? 'Updating...' : 'Update User'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateUser;
