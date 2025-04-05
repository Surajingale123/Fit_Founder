

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { UserCircle, Crown, Dumbbell, Award } from "lucide-react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const GymMembership = () => {
//   const [selectedMembership, setSelectedMembership] = useState(null);
//   const [selectedHeight, setSelectedHeight] = useState("");
//   const [selectedWeight, setSelectedWeight] = useState("");
//   const [selectedTrainer, setSelectedTrainer] = useState("");
//   const [trainers, setTrainers] = useState([]);
//   const [heightOptions, setHeightOptions] = useState([
//     "4'5\"", "4'6\"", "4'7\"", "4'8\"", "4'9\"", "5'0\"",
//     "5'1\"", "5'2\"", "5'3\"", "5'4\"", "5'5\"", "5'6\"",
//     "5'7\"", "5'8\"", "5'9\"", "6'0\"",
//     "150 cm", "155 cm", "160 cm", "165 cm", "170 cm", "175 cm", "180 cm", "185 cm", "190 cm"
//   ]);
//   const [weightOptions, setWeightOptions] = useState([
//     "40 kg", "45 kg", "50 kg", "55 kg", "60 kg", "65 kg", "70 kg", "75 kg", "80 kg", "85 kg", "90 kg"
//   ]);

//   // Membership options
//   const memberships = [
//     {
//       title: "Basic",
//       duration: "3 Months",
//       price: "$99",
//       icon: <UserCircle size={40} className="text-primary" />,
//       features: ["Basic Equipment Access", "Locker Room", "Fitness Assessment"],
//       bgColor: "bg-light",
//     },
//     {
//       title: "Premium",
//       duration: "6 Months",
//       price: "$179",
//       icon: <Award size={40} className="text-warning" />,
//       features: ["All Basic Features", "Group Classes", "Personal Training"],
//       bgColor: "bg-warning",
//     },
//     {
//       title: "Elite",
//       duration: "12 Months",
//       price: "$299",
//       icon: <Crown size={40} className="text-danger" />,
//       features: ["All Premium Features", "Unlimited Classes", "Nutrition Plan"],
//       bgColor: "bg-danger text-white",
//     }
//   ];

//   // Fetch trainers from backend
//   useEffect(() => {
//     axios.get("https://your-api-url.com/trainers") // Replace with actual API URL
//       .then(response => {
//         setTrainers(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching trainers:", error);
//       });
//   }, []);

//   return (
//     <div className="container py-5">
//       {/* Header Section */}
//       <div className="text-center mb-5">
//         <Dumbbell size={60} className="text-primary mb-3" />
//         <h1 className="fw-bold">Premium Gym Membership Plans</h1>
//         <p className="text-muted">Choose the best plan for your fitness journey.</p>
//       </div>

//       {/* Membership Cards (Side by Side) */}
//       <div className="row justify-content-center">
//         {memberships.map((membership, index) => (
//           <div className="col-md-4 mb-4" key={index}>
//             <div
//               className={`card shadow-lg text-center p-4 ${membership.bgColor} ${selectedMembership === index ? 'border-dark border-3' : ''}`}
//               onClick={() => setSelectedMembership(index)}
//               style={{
//                 cursor: "pointer",
//                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
//               }}
//               className1="hover-scale"
//             >
//               {membership.icon}
//               <h3 className="mt-3">{membership.title}</h3>
//               <h4>{membership.duration}</h4>
//               <h2 className="fw-bold">{membership.price}</h2>
//               <ul className="list-unstyled mt-3">
//                 {membership.features.map((feature, i) => (
//                   <li key={i}>✅ {feature}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Select & Add Height + Weight + Trainer Selection */}
//       <div className="row justify-content-center mt-4">
//         <div className="col-md-4">
//           <label className="form-label fw-bold">Select Height</label>
//           <select className="form-select" value={selectedHeight} onChange={(e) => setSelectedHeight(e.target.value)}>
//             <option value="">Choose Height</option>
//             {heightOptions.map((height, index) => (
//               <option key={index} value={height}>{height}</option>
//             ))}
//           </select>
//         </div>

//         <div className="col-md-4">
//           <label className="form-label fw-bold">Select Weight</label>
//           <select className="form-select" value={selectedWeight} onChange={(e) => setSelectedWeight(e.target.value)}>
//             <option value="">Choose Weight</option>
//             {weightOptions.map((weight, index) => (
//               <option key={index} value={weight}>{weight}</option>
//             ))}
//           </select>
//         </div>

//         <div className="col-md-4">
//           <label className="form-label fw-bold">Select Trainer</label>
//           <select className="form-select" value={selectedTrainer} onChange={(e) => setSelectedTrainer(e.target.value)}>
//             <option value="">Choose Trainer</option>
//             {trainers.length > 0 ? (
//               trainers.map((trainer, index) => (
//                 <option key={index} value={trainer.name}>{trainer.name}</option>
//               ))
//             ) : (
//               <option disabled>Loading trainers...</option>
//             )}
//           </select>
//         </div>
//       </div>

//       {/* Call to Action */}
//       <div className="text-center mt-5">
//         <button className="btn btn-primary btn-lg px-5 shadow-lg hover-scale">Start Your Fitness Journey</button>
//       </div>
//     </div>
//   );
// };

// export default GymMembership;
















// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { UserCircle, Crown, Dumbbell, Award } from "lucide-react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const GymMembership = () => {
//   const [selectedMembership, setSelectedMembership] = useState(null);
//   const [selectedHeight, setSelectedHeight] = useState("");
//   const [selectedWeight, setSelectedWeight] = useState("");
//   const [selectedTrainer, setSelectedTrainer] = useState("");
//   const [trainers, setTrainers] = useState([]);
//   const [memberships, setMemberships] = useState([]);

//   // Fetch membership plans from backend
//   useEffect(() => {
//     axios.get("http://localhost:8080/api/v1/user/getAllPlans")
//       .then(response => {
//         setMemberships(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching membership plans:", error);
//       });
//   }, []);

//   // Fetch trainers from backend
//   useEffect(() => {
//     axios.get("http://localhost:8080/api/v1/user/getTrainers") // Replace with actual API URL
//       .then(response => {
//         setTrainers(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching trainers:", error);
//       });
//   }, []);

//   return (
//     <div className="container py-5">
//       <div className="text-center mb-5">
//         <Dumbbell size={60} className="text-primary mb-3" />
//         <h1 className="fw-bold">Premium Gym Membership Plans</h1>
//         <p className="text-muted">Choose the best plan for your fitness journey.</p>
//       </div>

//       <div className="row justify-content-center">
//         {memberships.map((membership, index) => (
//           <div className="col-md-4 mb-4" key={index}>
//             <div
//               className={`card shadow-lg text-center p-4 ${selectedMembership === index ? 'border-dark border-3' : ''}`}
//               onClick={() => setSelectedMembership(index)}
//               style={{ cursor: "pointer", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
//             >
//               <h3 className="mt-3">{membership.planName}</h3>
//               <h4>{membership.Duration} Months</h4>
//               <h2 className="fw-bold">${membership.Price}</h2>
//               <ul className="list-unstyled mt-3">
//                 {membership.Feature.split(',').map((feature, i) => (
//                   <li key={i}>✅ {feature.trim()}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="text-center mt-5">
//         <button className="btn btn-primary btn-lg px-5 shadow-lg">Start Your Fitness Journey</button>
//       </div>
//     </div>
//   );
// };

// export default GymMembership;


























// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// const GymTrainers = () => {
//   const [trainers, setTrainers] = useState([]);
//   const [token, setToken] = useState(""); // Set your token here

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/api/v1/user/getTrainers", {
//         headers: {
//           Authorization: `Bearer ${token}`, // Include JWT token
//         },
//       })
//       .then((response) => {
//         setTrainers(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching trainers:", error);
//       });
//   }, [token]);

//   return (
//     <div className="container py-5">
//       <h1 className="text-center fw-bold mb-4">Available Gym Trainers</h1>
//       <div className="table-responsive">
//         <table className="table table-striped table-hover shadow-lg">
//           <thead className="table-dark">
//             <tr>
//               <th>#</th>
//               <th>Name</th>
//               <th>Experience (Years)</th>
//               <th>Specialization</th>
//               <th>Contact</th>
//             </tr>
//           </thead>
//           <tbody>
//             {trainers.length > 0 ? (
//               trainers.map((trainer, index) => (
//                 <tr key={trainer.id}>
//                   <td>{index + 1}</td>
//                   <td>{trainer.name}</td>
//                   <td>{trainer.experience}</td>
//                   <td>{trainer.specialization}</td>
//                   <td>{trainer.contact}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center">
//                   No trainers available.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default GymTrainers;



















// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// const GymMembershipPlans = () => {
//   const [membershipPlans, setMembershipPlans] = useState([]);
//   const [token, setToken] = useState(""); // Set your token here

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/api/v1/user/getAllPlans", {
//         headers: {
//           Authorization: `Bearer ${token}`, // Include JWT token
//         },
//       })
//       .then((response) => {
//         setMembershipPlans(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching membership plans:", error);
//       });
//   }, [token]);

//   return (
//     <div className="container py-5">
//       <h1 className="text-center fw-bold mb-4">Gym Membership Plans</h1>
//       <div className="table-responsive">
//         <table className="table table-striped table-hover shadow-lg">
//           <thead className="table-dark">
//             <tr>
//               <th>#</th>
//               <th>Plan Name</th>
//               <th>Price ($)</th>
//               <th>Duration (Months)</th>
//               <th>Features</th>
//             </tr>
//           </thead>
//           <tbody>
//             {membershipPlans.length > 0 ? (
//               membershipPlans.map((plan, index) => (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{plan.planName}</td>
//                   <td>${plan.price}</td>
//                   <td>{plan.duration}</td>
//                   <td>
//                     {plan.feature ? (
//                       <ul className="list-unstyled mb-0">
//                         {plan.feature.split(",").map((feature, i) => (
//                           <li key={i}>✅ {feature.trim()}</li>
//                         ))}
//                       </ul>
//                     ) : (
//                       "No features available"
//                     )}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center">
//                   No membership plans available.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default GymMembershipPlans;














// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// const GymMembershipPlans = () => {
//   const [membershipPlans, setMembershipPlans] = useState([]);
//   const [token, setToken] = useState(localStorage.getItem("token") || ""); // Retrieve token from localStorage

//   useEffect(() => {
//     if (token) {
//       axios
//         .get("http://localhost:8080/api/v1/user/getAllPlans", {
//           headers: {
//             Authorization: `Bearer ${token}`, // Include JWT token
//           },
//         })
//         .then((response) => {
//           if (response.data && Array.isArray(response.data)) {
//             setMembershipPlans(response.data);
//           } else {
//             console.error("Unexpected API response structure:", response.data);
//             setMembershipPlans([]);
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching membership plans:", error);
//           setMembershipPlans([]);
//         });
//     } else {
//       console.error("Token is missing. Please provide a valid token.");
//     }
//   }, [token]); // Fetch only when the token changes

//   const handleSelectMembership = (planName) => {
//     alert(`You have selected the ${planName} plan.`);
//     // You can add further functionality here, like storing the selected plan in a state or proceeding to the next page.
//   };

//   const handleProceedFitnessJourney = () => {
//     alert("Proceeding with your fitness journey...");
//     // Add functionality for the next step in the journey, like redirecting to a new page or starting the signup process.
//   };

//   return (
//     <div className="container py-5">
//       <h1 className="text-center fw-bold mb-4">Gym Membership Plans</h1>
//       <div className="table-responsive">
//         <table className="table table-striped table-hover shadow-lg">
//           <thead className="table-dark">
//             <tr>
//               <th>#</th>
//               <th>Plan Name</th>
//               <th>Price ($)</th>
//               <th>Duration (Months)</th>
//               <th>Features</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {membershipPlans.length > 0 ? (
//               membershipPlans.map((plan, index) => (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{plan.planName}</td>
//                   <td>${plan.price}</td>
//                   <td>{plan.duration}</td>
//                   <td>
//                     {plan.feature ? (
//                       <ul className="list-unstyled mb-0">
//                         {plan.feature.split(",").map((feature, i) => (
//                           <li key={i}>✅ {feature.trim()}</li>
//                         ))}
//                       </ul>
//                     ) : (
//                       "No features available"
//                     )}
//                   </td>
//                   <td>
//                     <button
//                       className="btn btn-primary me-2"
//                       onClick={() => handleSelectMembership(plan.planName)}
//                     >
//                       Select Membership
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="6" className="text-center">
//                   No membership plans available.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//         {/* Button to proceed with the fitness journey below the table */}
//         <div className="text-center mt-4">
//           <button
//             className="btn btn-success"
//             onClick={handleProceedFitnessJourney}
//           >
//             Proceed to Fitness Journey
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GymMembershipPlans;









import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const GymMembershipPlans = () => {
  const [membershipPlans, setMembershipPlans] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || ""); // Retrieve token from localStorage
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:8080/api/v1/user/getAllPlans", {
          headers: {
            Authorization: `Bearer ${token}`, // Include JWT token
          },
        })
        .then((response) => {
          if (response.data && Array.isArray(response.data)) {
            setMembershipPlans(response.data);
          } else {
            console.error("Unexpected API response structure:", response.data);
            setMembershipPlans([]);
          }
        })
        .catch((error) => {
          console.error("Error fetching membership plans:", error);
          setMembershipPlans([]);
        });
    } else {
      console.error("Token is missing. Please provide a valid token.");
    }
  }, [token]); // Fetch only when the token changes

  const handleSelectMembership = (planName) => {
    alert(`You have selected the ${planName} plan.`);
    // You can add further functionality here, like storing the selected plan in a state or proceeding to the next page.
  };

  const handleProceedFitnessJourney = () => {
    navigate("/UserDasboard"); // Navigate to UserDashboard
  };

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">Gym Membership Plans</h1>
      <div className="table-responsive">
        <table className="table table-striped table-hover shadow-lg">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Plan Name</th>
              <th>Price ($)</th>
              <th>Duration (Months)</th>
              <th>Features</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {membershipPlans.length > 0 ? (
              membershipPlans.map((plan, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{plan.planName}</td>
                  <td>${plan.price}</td>
                  <td>{plan.duration}</td>
                  <td>
                    {plan.feature ? (
                      <ul className="list-unstyled mb-0">
                        {plan.feature.split(",").map((feature, i) => (
                          <li key={i}>✅ {feature.trim()}</li>
                        ))}
                      </ul>
                    ) : (
                      "No features available"
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => handleSelectMembership(plan.planName)}
                    >
                      Select Membership
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No membership plans available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {/* Button to proceed with the fitness journey below the table */}
        <div className="text-center mt-4">
          <button
            className="btn btn-success"
            onClick={handleProceedFitnessJourney}
          >
            Proceed to Fitness Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default GymMembershipPlans;
