

// import React, { useState } from 'react';
// import { Table, Button, Form, Alert } from 'react-bootstrap';

// const MembershipPlans = () => {
//   const [plans, setPlans] = useState([
//     { name: 'Basic', price: '₹ 500', duration: '1 Month', features: 'Access to gym' },
//     { name: 'Premium', price: '₹ 700', duration: '3 Months', features: 'Access to gym + Trainer' },
//     { name: 'Gold', price: '₹ 900', duration: '6 Months', features: 'Access to gym + Trainer + Nutrition Plan' },
//   ]);

//   const [showForm, setShowForm] = useState(false);
//   const [newPlan, setNewPlan] = useState({
//     name: '',
//     price: '',
//     duration: '',
//     features: '',
//   });

//   const [error, setError] = useState('');  // State for error message

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewPlan({ ...newPlan, [name]: value });
//   };

//   // Handle form submission with validation
//   const handleAddPlan = (e) => {
//     e.preventDefault();

//     // Validation for Price
//     const price = parseFloat(newPlan.price);
//     if (price <= 0 || price > 1000) {
//       setError('Price must be greater than 0 and less than or equal to 1000.');
//       return;
//     }

//     // Validation for Duration
//     const duration = parseInt(newPlan.duration);
//     if (duration <= 1 || duration > 12) {
//       setError('Duration must be between 2 and 12 months.');
//       return;
//     }

//     // Check if any field is empty
//     if (newPlan.name && newPlan.price && newPlan.duration && newPlan.features) {
//       setPlans([...plans, newPlan]); // Add new plan to the table
//       setNewPlan({ name: '', price: '', duration: '', features: '' }); // Reset form fields
//       setShowForm(false); // Hide the form
//       setError(''); // Clear any error message
//     } else {
//       setError('Please fill in all fields.');
//     }
//   };

//   return (
//     <div className="mt-4 mx-auto" style={{ maxWidth: '800px' }}>
//       <h3>Membership Plans</h3>
//       <Table bordered>
//         <thead>
//           <tr>
//             <th>Plan Name</th>
//             <th>Price</th>
//             <th>Duration</th>
//             <th>Features</th>
//           </tr>
//         </thead>
//         <tbody>
//           {plans.map((plan, index) => (
//             <tr key={index}>
//               <td>{plan.name}</td>
//               <td>{plan.price}</td>
//               <td>{plan.duration}</td>
//               <td>{plan.features}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       {/* Add Membership Plan Button */}
//       <Button variant="primary" className="mt-3" onClick={() => setShowForm(!showForm)}>
//         {showForm ? 'Cancel' : 'Add Membership Plan'}
//       </Button>

//       {/* Display error message if validation fails */}
//       {error && <Alert variant="danger" className="mt-3">{error}</Alert>}

//       {/* Conditional Rendering for the Form */}
//       {showForm && (
//         <Form className="mt-4" onSubmit={handleAddPlan}>
//           <Form.Group controlId="planName">
//             <Form.Label>Plan Name</Form.Label>
//             <Form.Control
//               type="text"
//               name="name"
//               value={newPlan.name}
//               onChange={handleInputChange}
//               placeholder="Enter plan name"
//             />
//           </Form.Group>
//           <Form.Group controlId="planPrice">
//             <Form.Label>Price</Form.Label>
//             <Form.Control
//               type="text"
//               name="price"
//               value={newPlan.price}
//               onChange={handleInputChange}
//               placeholder="Enter price"
//             />
//           </Form.Group>
//           <Form.Group controlId="planDuration">
//             <Form.Label>Duration</Form.Label>
//             <Form.Control
//               type="text"
//               name="duration"
//               value={newPlan.duration}
//               onChange={handleInputChange}
//               placeholder="Enter duration"
//             />
//           </Form.Group>
//           <Form.Group controlId="planFeatures">
//             <Form.Label>Features</Form.Label>
//             <Form.Control
//               type="text"
//               name="features"
//               value={newPlan.features}
//               onChange={handleInputChange}
//               placeholder="Enter features"
//             />
//           </Form.Group>
//           <Button variant="success" type="submit">
//             Add Plan
//           </Button>
//         </Form>
//       )}
//     </div>
//   );
// };

// export default MembershipPlans;







// // React.useEffect(() => {
// //   const fetchProfileData = async () => {
// //     try {
// //       const response = await axios.get(
// //         http://localhost:8080/api/sharks/{id}
// //       ); // Replace '1' with dynamic ID
// //       setFormData(response.data);
// //     } catch (error) {
// //       console.error("Error fetching profile data:", error);
// //     }
// //   };

// //   fetchProfileData();
// // }, []);







import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Alert, Button, Form } from 'react-bootstrap';

const MembershipPlan = () => {
  const [planData, setPlanData] = useState({
    planName: '',
    description: '',
    price: 0,
    duration: 0,
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  // Handling input changes
  const handleChange = (e) => {
    setPlanData({ ...planData, [e.target.name]: e.target.value });
  };

  // Handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Get the token from localStorage
    const token = localStorage.getItem('token');

    if (!token) {
      setError('Authentication token missing. Please log in again.');
      return;
    }

    try {
      // Make the API request to add the membership plan
      const response = await axios.post(
        'http://localhost:8080/api/v1/admin/AddMemberShipPlan',
        planData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, // Add token in header for authentication
          },
        }
      );

      if (response.status === 200) {
        setSuccess('Membership Plan added successfully');
        // Optionally, redirect to another page after success
        navigate('/AdminDashboard');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred while adding the plan.');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Add Membership Plan</h1>
      
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      <Form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
        <Form.Group className="mb-3">
          <Form.Label>Plan Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Plan Name"
            name="planName"
            value={planData.planName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter Plan Description"
            name="description"
            value={planData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Plan Price"
            name="price"
            value={planData.price}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Duration (in months)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Plan Duration"
            name="duration"
            value={planData.duration}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Add Plan
        </Button>
      </Form>
    </div>
  );
};

export default MembershipPlan;
