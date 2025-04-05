import React, { useState, useRef } from 'react';
import { Activity, TrendingUp, Award } from 'lucide-react';

const workoutData = [
  { 
    day: "Monday", 
    focus: "Chest & Triceps",
    gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYm5naTYxeXp1dThmeGJtajM1NGxxMjBnbmY1ajhwYzh0OHFhODk1OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8m7T6bBzt6rHPSgNnY/giphy.gif",
    color: "bg-blue-100",
    exercises: [
      { name: "Bench Press", sets: 4, reps: "8-10", gif: "https://media.giphy.com/media/26u4m1X2cDZaZfFTu/giphy.gif" },
      { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", gif: "https://media.giphy.com/media/l0K4fddzGvUwsI9ne/giphy.gif" },
      { name: "Tricep Pushdowns", sets: 3, reps: "12-15", gif: "https://media.giphy.com/media/3oKIPuHzSMqVhQJMyY/giphy.gif" },
      { name: "Overhead Tricep Extensions", sets: 3, reps: "10-12", gif: "https://media.giphy.com/media/3o7aDd4T1j8vFAPbPE/giphy.gif" }
    ]
  },
  { 
    day: "Tuesday", 
    focus: "Back & Biceps",
    gif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWp1NXBnZnZnc2llZ2VjNDMxMjJ2dnYzY2ZraXI5bXZoeXptNDJxdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RYqGuMl33SK9WIl0TD/giphy.gif",
    color: "bg-green-100",
    exercises: [
      { name: "Pull-Ups", sets: 4, reps: "8-10", gif: "https://media.giphy.com/media/3oKIPjTx9W3zFq1LZq/giphy.gif" },
      { name: "Barbell Rows", sets: 3, reps: "10-12", gif: "https://media.giphy.com/media/1X6zF2J6od7kQ/giphy.gif" },
      { name: "Lat Pulldowns", sets: 3, reps: "12-15", gif: "https://media.giphy.com/media/3oEjI2zKceFgGFH3g0/giphy.gif" },
      { name: "Bicep Curls", sets: 3, reps: "10-12", gif: "https://media.giphy.com/media/26u4mIMYzTw1fSEYw/giphy.gif" }
    ]
  },
  { 
    day: "Wednesday", 
    focus: "Leg Day",
    gif: "https://media.giphy.com/media/i8nd8pPWMsC1a/giphy.gif?cid=790b7611hh14x86xfligxl8g3x7vqxeh1fjs6hnjc3wu4uyc&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    color: "bg-red-100",
    exercises: [
      { name: "Squats", sets: 4, reps: "8-10", gif: "https://media.giphy.com/media/26BGzjPlPBmjygyQA/giphy.gif" },
      { name: "Leg Press", sets: 3, reps: "10-12", gif: "https://media.giphy.com/media/d2jjuY88dTg0t6UdX0/giphy.gif" },
      { name: "Romanian Deadlifts", sets: 3, reps: "10-12", gif: "https://media.giphy.com/media/26gJrfElB1HJ7giIY/giphy.gif" },
      { name: "Leg Extensions", sets: 3, reps: "12-15", gif: "https://media.giphy.com/media/l3q2Fw14gVVzKcB3O/giphy.gif" }
    ]
  },
  { 
    day: "Thursday", 
    focus: "Shoulders",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc25rZmphc3dzYXp1djR0aG9lbHV5N2hxdTN4cDhoYWRrcW9oeWxoaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/BpbzKaAdSmIOzBXbAQ/giphy.gif",
    color: "bg-purple-100",
    exercises: [
      { name: "Overhead Press", sets: 4, reps: "8-10", gif: "https://media.giphy.com/media/l3vR1OpwzARwM11yg/giphy.gif" },
      { name: "Lateral Raises", sets: 3, reps: "12-15", gif: "https://media.giphy.com/media/26gF1j7Y3TcETlb5a/giphy.gif" },
      { name: "Front Raises", sets: 3, reps: "10-12", gif: "https://media.giphy.com/media/l3q2DRffZZzBdF9D2/giphy.gif" },
      { name: "Reverse Flyes", sets: 3, reps: "12-15", gif: "https://media.giphy.com/media/3o6Zt9YZQkHDbyHnuc/giphy.gif" }
    ]
  },
  { 
    day: "Friday", 
    focus: "Core & Cardio",
    gif: "https://media3.giphy.com/media/nzYSDoMAuH92RxNR6l/giphy.gif?cid=6c09b9522a04kty2hgyn7iigrfj2686ofk1g5yaydjxcsg1v&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
    color: "bg-yellow-100",
    exercises: [
      { name: "Planks", sets: 3, reps: "60 seconds", gif: "https://media.giphy.com/media/xT0xemN7tOG4HcGn84/giphy.gif" },
      { name: "Russian Twists", sets: 3, reps: "20 reps", gif: "https://media.giphy.com/media/3o7aD0rA2fmKxdCRgA/giphy.gif" },
      { name: "Mountain Climbers", sets: 3, reps: "30 seconds", gif: "https://media.giphy.com/media/l4uMc4H3X0L3g9aN2/giphy.gif" },
      { name: "HIIT Cardio", sets: 4, reps: "30 sec work/30 sec rest", gif: "https://media.giphy.com/media/26gJrfElB1HJ7giIY/giphy.gif" }
    ]
  }
];

const UserDashboard = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const exercisesRef = useRef(null);

  const scrollToExercises = () => {
    exercisesRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Welcome, to Fit Founder 👋
              </h1>
              {/* <p className="text-gray-600 mt-2">Download your Diet Plan</p> */}
            </div>
            
          </div>
        </div>

        <a href="/src/pdf/diat.pdf" download>
          <button 
            style={{
              backgroundColor: '#3b82f6', 
              color: 'white', 
              padding: '4px 12px', 
              fontSize: '0.875rem', 
              borderRadius: '0.375rem', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
              margin: '24px auto',
              transition: 'background-color 0.3s',
              width: '40%',
              display: 'block',
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'} 
            onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
          >
            Download Diet Plan
          </button>
        </a>

        <div className="grid grid-cols-3 gap-6 mb-8">
          {workoutData.slice(0, 3).map((day, index) => (
            <div 
              key={index} 
              onClick={() => {
                setSelectedDay(day.day);
                scrollToExercises();
              }}
              className={`${day.color} rounded-2xl p-4 text-center shadow-lg hover:scale-105 transition-transform cursor-pointer`}
            >
              <h3 className="font-bold mb-2">{day.day}</h3>
              <img 
                src={day.gif} 
                alt={`${day.focus} workout`} 
                className="w-32 h-32 object-cover rounded-xl mx-auto mb-4"
              />
              <p className="text-lg">{day.focus}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          {workoutData.slice(3, 5).map((day, index) => (
            <div 
              key={index} 
              onClick={() => {
                setSelectedDay(day.day);
                scrollToExercises();
              }}
              className={`${day.color} rounded-2xl p-4 text-center shadow-lg hover:scale-105 transition-transform cursor-pointer`}
            >
              <h3 className="font-bold mb-2">{day.day}</h3>
              <img 
                src={day.gif} 
                alt={`${day.focus} workout`} 
                className="w-32 h-32 object-cover rounded-xl mx-auto mb-4"
              />
              <p className="text-lg">{day.focus}</p>
            </div>
          ))}
        </div>

        <div ref={exercisesRef} className="mt-16">
          {selectedDay && (
            <div>
              {workoutData
                .filter(day => day.day === selectedDay)
                .map((day, index) => (
                  <div key={index}>
                    <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
                      {day.day} Workout: {day.focus}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                      {day.exercises.map((exercise, index) => (
                        <div key={index} className="bg-gray-100 rounded-xl p-4 flex flex-col items-center">
                          <h3 className="text-xl font-semibold mb-4">{exercise.name}</h3>
                          <img 
                            src={exercise.gif} 
                            alt={exercise.name}
                            className="w-64 h-64 object-cover rounded-lg mb-4"
                          />
                          <p className="text-gray-700">
                            <span className="font-bold">Sets:</span> {exercise.sets} | 
                            <span className="font-bold"> Reps:</span> {exercise.reps}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;




























// // import React, { useState, useRef } from 'react';
// // import { Activity, TrendingUp, Award } from 'lucide-react';

// // const workoutData = [
// //   { 
// //     day: "Monday", 
// //     focus: "Chest & Triceps",
// //     gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYm5naTYxeXp1dThmeGJtajM1NGxxMjBnbmY1ajhwYzh0OHFhODk1OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8m7T6bBzt6rHPSgNnY/giphy.gif",
// //     color: "bg-blue-100",
// //     exercises: [
// //       { name: "Bench Press", sets: 4, reps: "8-10", gif: "https://media.giphy.com/media/26u4m1X2cDZaZfFTu/giphy.gif" },
// //       { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", gif: "https://media.giphy.com/media/l0K4fddzGvUwsI9ne/giphy.gif" },
// //       { name: "Tricep Pushdowns", sets: 3, reps: "12-15", gif: "https://media.giphy.com/media/3oKIPuHzSMqVhQJMyY/giphy.gif" },
// //       { name: "Overhead Tricep Extensions", sets: 3, reps: "10-12", gif: "https://media.giphy.com/media/3o7aDd4T1j8vFAPbPE/giphy.gif" }
// //     ]
// //   },
// //   // More workout data...
// // ];

// // const UserDashboard = () => {
// //   const [selectedDay, setSelectedDay] = useState(null);
// //   const exercisesRef = useRef(null);

// //   // Retrieve the username from localStorage
// //   const username = localStorage.getItem("username") || "User";

// //   const scrollToExercises = () => {
// //     exercisesRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
// //       <div className="container mx-auto">
// //         {/* Header Section */}
// //         <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
// //           <div className="flex items-center justify-between">
// //             <div>
// //               <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
// //                 Welcome, {username}! 👋
// //               </h1>
// //               <p className="text-gray-600 mt-2">Download your Diet Plan</p>
// //             </div>
// //           </div>
// //         </div>

// //         <a href="/path/to/diet-plan.pdf" download>
// //           <button 
// //             style={{
// //               backgroundColor: '#3b82f6', 
// //               color: 'white', 
// //               padding: '4px 12px', 
// //               fontSize: '0.875rem', 
// //               borderRadius: '0.375rem', 
// //               boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
// //               margin: '24px auto',
// //               transition: 'background-color 0.3s',
// //               width: '40%',
// //               display: 'block',
// //             }}
// //             onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'} 
// //             onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
// //           >
// //             Download Diet Plan
// //           </button>
// //         </a>

// //         <div className="grid grid-cols-3 gap-6 mb-8">
// //           {workoutData.slice(0, 3).map((day, index) => (
// //             <div 
// //               key={index} 
// //               onClick={() => {
// //                 setSelectedDay(day.day);
// //                 scrollToExercises();
// //               }}
// //               className={`${day.color} rounded-2xl p-4 text-center shadow-lg hover:scale-105 transition-transform cursor-pointer`}
// //             >
// //               <h3 className="font-bold mb-2">{day.day}</h3>
// //               <img 
// //                 src={day.gif} 
// //                 alt={`${day.focus} workout`} 
// //                 className="w-32 h-32 object-cover rounded-xl mx-auto mb-4"
// //               />
// //               <p className="text-lg">{day.focus}</p>
// //             </div>
// //           ))}
// //         </div>

// //         <div className="grid grid-cols-2 gap-6 mb-8">
// //           {workoutData.slice(3, 5).map((day, index) => (
// //             <div 
// //               key={index} 
// //               onClick={() => {
// //                 setSelectedDay(day.day);
// //                 scrollToExercises();
// //               }}
// //               className={`${day.color} rounded-2xl p-4 text-center shadow-lg hover:scale-105 transition-transform cursor-pointer`}
// //             >
// //               <h3 className="font-bold mb-2">{day.day}</h3>
// //               <img 
// //                 src={day.gif} 
// //                 alt={`${day.focus} workout`} 
// //                 className="w-32 h-32 object-cover rounded-xl mx-auto mb-4"
// //               />
// //               <p className="text-lg">{day.focus}</p>
// //             </div>
// //           ))}
// //         </div>

// //         <div ref={exercisesRef} className="mt-16">
// //           {selectedDay && (
// //             <div>
// //               {workoutData
// //                 .filter(day => day.day === selectedDay)
// //                 .map((day, index) => (
// //                   <div key={index}>
// //                     <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
// //                       {day.day} Workout: {day.focus}
// //                     </h2>

// //                     <div className="grid md:grid-cols-2 gap-6">
// //                       {day.exercises.map((exercise, index) => (
// //                         <div key={index} className="bg-gray-100 rounded-xl p-4 flex flex-col items-center">
// //                           <h3 className="text-xl font-semibold mb-4">{exercise.name}</h3>
// //                           <img 
// //                             src={exercise.gif} 
// //                             alt={exercise.name}
// //                             className="w-64 h-64 object-cover rounded-lg mb-4"
// //                           />
// //                           <p className="text-gray-700">
// //                             <span className="font-bold">Sets:</span> {exercise.sets} | 
// //                             <span className="font-bold"> Reps:</span> {exercise.reps}
// //                           </p>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 ))}
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default UserDashboard;















// // import React, { useState, useEffect, useRef } from 'react';
// // import axios from 'axios'; // You can use fetch as well
// // import { Activity, TrendingUp, Award } from 'lucide-react';

// // const workoutData = [
// //   { 
// //     day: "Monday", 
// //     focus: "Chest & Triceps",
// //     gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYm5naTYxeXp1dThmeGJtajM1NGxxMjBnbmY1ajhwYzh0OHFhODk1OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8m7T6bBzt6rHPSgNnY/giphy.gif",
// //     color: "bg-blue-100",
// //     exercises: [
// //       { name: "Bench Press", sets: 4, reps: "8-10", gif: "https://media.giphy.com/media/26u4m1X2cDZaZfFTu/giphy.gif" },
// //       { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", gif: "https://media.giphy.com/media/l0K4fddzGvUwsI9ne/giphy.gif" },
// //       { name: "Tricep Pushdowns", sets: 3, reps: "12-15", gif: "https://media.giphy.com/media/3oKIPuHzSMqVhQJMyY/giphy.gif" },
// //       { name: "Overhead Tricep Extensions", sets: 3, reps: "10-12", gif: "https://media.giphy.com/media/3o7aDd4T1j8vFAPbPE/giphy.gif" }
// //     ]
// //   },
// //   // More workout data...
// // ];

// // const UserDashboard = () => {
// //   const [selectedDay, setSelectedDay] = useState(null);
// //   const [username, setUsername] = useState('');  // To store the username
// //   const exercisesRef = useRef(null);

// //   useEffect(() => {
// //     const userId = localStorage.getItem("userId");  // Get the userId from localStorage or wherever it's stored

// //     if (userId) {
// //       // Make API request to fetch user data
// //       axios
// //         .get(`http://your-backend-api-url/api/v1/user/getUsersById?id=${userId}`)
// //         .then((response) => {
// //           const user = response.data;
// //           setUsername(user.name);  // Assuming 'name' is the field that contains the username
// //         })
// //         .catch((error) => {
// //           console.error("Error fetching user data", error);
// //           setUsername("User");  // Fallback if API call fails
// //         });
// //     }
// //   }, []);

// //   const scrollToExercises = () => {
// //     exercisesRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
// //       <div className="container mx-auto">
// //         {/* Header Section */}
// //         <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
// //           <div className="flex items-center justify-between">
// //             <div>
// //               <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
// //                 Welcome, {username || "User"}! 👋
// //               </h1>
// //               <p className="text-gray-600 mt-2">Download your Diet Plan</p>
// //             </div>
// //           </div>
// //         </div>

// //         <a href="/path/to/diet-plan.pdf" download>
// //           <button 
// //             style={{
// //               backgroundColor: '#3b82f6', 
// //               color: 'white', 
// //               padding: '4px 12px', 
// //               fontSize: '0.875rem', 
// //               borderRadius: '0.375rem', 
// //               boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
// //               margin: '24px auto',
// //               transition: 'background-color 0.3s',
// //               width: '40%',
// //               display: 'block',
// //             }}
// //             onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'} 
// //             onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
// //           >
// //             Download Diet Plan
// //           </button>
// //         </a>

// //         <div className="grid grid-cols-3 gap-6 mb-8">
// //           {workoutData.slice(0, 3).map((day, index) => (
// //             <div 
// //               key={index} 
// //               onClick={() => {
// //                 setSelectedDay(day.day);
// //                 scrollToExercises();
// //               }}
// //               className={`${day.color} rounded-2xl p-4 text-center shadow-lg hover:scale-105 transition-transform cursor-pointer`}
// //             >
// //               <h3 className="font-bold mb-2">{day.day}</h3>
// //               <img 
// //                 src={day.gif} 
// //                 alt={`${day.focus} workout`} 
// //                 className="w-32 h-32 object-cover rounded-xl mx-auto mb-4"
// //               />
// //               <p className="text-lg">{day.focus}</p>
// //             </div>
// //           ))}
// //         </div>

// //         <div ref={exercisesRef} className="mt-16">
// //           {selectedDay && (
// //             <div>
// //               {workoutData
// //                 .filter(day => day.day === selectedDay)
// //                 .map((day, index) => (
// //                   <div key={index}>
// //                     <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
// //                       {day.day} Workout: {day.focus}
// //                     </h2>

// //                     <div className="grid md:grid-cols-2 gap-6">
// //                       {day.exercises.map((exercise, index) => (
// //                         <div key={index} className="bg-gray-100 rounded-xl p-4 flex flex-col items-center">
// //                           <h3 className="text-xl font-semibold mb-4">{exercise.name}</h3>
// //                           <img 
// //                             src={exercise.gif} 
// //                             alt={exercise.name}
// //                             className="w-64 h-64 object-cover rounded-lg mb-4"
// //                           />
// //                           <p className="text-gray-700">
// //                             <span className="font-bold">Sets:</span> {exercise.sets} | 
// //                             <span className="font-bold"> Reps:</span> {exercise.reps}
// //                           </p>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 ))}
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default UserDashboard;











// // import React, { useState, useEffect, useRef } from 'react';
// // import axios from 'axios'; // You can use fetch as well
// // import { Activity, TrendingUp, Award } from 'lucide-react';

// // const workoutData = [
// //   { 
// //     day: "Monday", 
// //     focus: "Chest & Triceps",
// //     gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYm5naTYxeXp1dThmeGJtajM1NGxxMjBnbmY1ajhwYzh0OHFhODk1OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8m7T6bBzt6rHPSgNnY/giphy.gif",
// //     color: "bg-blue-100",
// //     exercises: [
// //       { name: "Bench Press", sets: 4, reps: "8-10", gif: "https://media.giphy.com/media/26u4m1X2cDZaZfFTu/giphy.gif" },
// //       { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", gif: "https://media.giphy.com/media/l0K4fddzGvUwsI9ne/giphy.gif" },
// //       { name: "Tricep Pushdowns", sets: 3, reps: "12-15", gif: "https://media.giphy.com/media/3oKIPuHzSMqVhQJMyY/giphy.gif" },
// //       { name: "Overhead Tricep Extensions", sets: 3, reps: "10-12", gif: "https://media.giphy.com/media/3o7aDd4T1j8vFAPbPE/giphy.gif" }
// //     ]
// //   },
// //   // More workout data...
// // ];

// // const UserDashboard = () => {
// //   const [selectedDay, setSelectedDay] = useState(null);
// //   const [username, setUsername] = useState('');  // To store the username
// //   const exercisesRef = useRef(null);

// //   useEffect(() => {
// //     const userId = localStorage.getItem("userId");  // Ensure it's correctly assigned here
    
// //     if (userId) {
// //       // Make API request to fetch user data
// //       axios
// //         .get(`http://localhost:8080/api/v1/user/getUsersById?id=${userId}`)
// //         .then((response) => {
// //           const user = response.data;
// //           setUsername(user.firstName || "User");  // Correctly use 'firstName' or fallback to "User"
// //         })
// //         .catch((error) => {
// //           console.error("Error fetching user data", error);
// //           setUsername("User");  // Fallback if API call fails
// //         });
// //     } else {
// //       console.error("User ID is missing from localStorage");
// //     }
// //   }, []);
  
  

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
// //       <div className="container mx-auto">
// //         {/* Header Section */}
// //         <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
// //           <div className="flex items-center justify-between">
// //             <div>
// //               <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
// //                 Welcome, to Fit Founder 

// //               </h1>

// //             <h4 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Lets Start Your fitness Journey.....</h4>
// //               <p className="text-gray-600 mt-2">Download your Diet Plan</p>
// //             </div>
// //           </div>
// //         </div>

// //         <a href="/path/to/diet-plan.pdf" download>
// //           <button 
// //             style={{
// //               backgroundColor: '#3b82f6', 
// //               color: 'white', 
// //               padding: '4px 12px', 
// //               fontSize: '0.875rem', 
// //               borderRadius: '0.375rem', 
// //               boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
// //               margin: '24px auto',
// //               transition: 'background-color 0.3s',
// //               width: '40%',
// //               display: 'block',
// //             }}
// //             onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'} 
// //             onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
// //           >
// //             Download Diet Plan
// //           </button>
// //         </a>

// //         <div className="grid grid-cols-3 gap-6 mb-8">
// //           {workoutData.slice(0, 3).map((day, index) => (
// //             <div 
// //               key={index} 
// //               onClick={() => {
// //                 setSelectedDay(day.day);
// //                 scrollToExercises();
// //               }}
// //               className={`${day.color} rounded-2xl p-4 text-center shadow-lg hover:scale-105 transition-transform cursor-pointer`}
// //             >
// //               <h3 className="font-bold mb-2">{day.day}</h3>
// //               <img 
// //                 src={day.gif} 
// //                 alt={`${day.focus} workout`} 
// //                 className="w-32 h-32 object-cover rounded-xl mx-auto mb-4"
// //               />
// //               <p className="text-lg">{day.focus}</p>
// //             </div>
// //           ))}
// //         </div>

// //         <div ref={exercisesRef} className="mt-16">
// //           {selectedDay && (
// //             <div>
// //               {workoutData
// //                 .filter(day => day.day === selectedDay)
// //                 .map((day, index) => (
// //                   <div key={index}>
// //                     <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
// //                       {day.day} Workout: {day.focus}
// //                     </h2>

// //                     <div className="grid md:grid-cols-2 gap-6">
// //                       {day.exercises.map((exercise, index) => (
// //                         <div key={index} className="bg-gray-100 rounded-xl p-4 flex flex-col items-center">
// //                           <h3 className="text-xl font-semibold mb-4">{exercise.name}</h3>
// //                           <img 
// //                             src={exercise.gif} 
// //                             alt={exercise.name}
// //                             className="w-64 h-64 object-cover rounded-lg mb-4"
// //                           />
// //                           <p className="text-gray-700">
// //                             <span className="font-bold">Sets:</span> {exercise.sets} | 
// //                             <span className="font-bold"> Reps:</span> {exercise.reps}
// //                           </p>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 ))}
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default UserDashboard;





















// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios'; // You can use fetch as well
// import { Activity, TrendingUp, Award } from 'lucide-react';

// const workoutData = [
//   { 
//     day: "Monday", 
//     focus: "Chest & Triceps",
//     gif: "https://www.example.com/gym1.jpg", // Gym image for the day (replace with real URL)
//     color: "bg-blue-100",
//     exercises: [
//       { name: "Bench Press", sets: 4, reps: "8-10", gif: "https://www.example.com/benchpress.jpg" },
//       { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", gif: "https://www.example.com/inclinepress.jpg" },
//       { name: "Tricep Pushdowns", sets: 3, reps: "12-15", gif: "https://www.example.com/triceppushdowns.jpg" },
//       { name: "Overhead Tricep Extensions", sets: 3, reps: "10-12", gif: "https://www.example.com/overheadtricep.jpg" }
//     ]
//   },
//   // More workout data...
// ];

// const UserDashboard = () => {
//   const [selectedDay, setSelectedDay] = useState(null);
//   const [username, setUsername] = useState('');  // To store the username
//   const exercisesRef = useRef(null);

//   useEffect(() => {
//     const userId = localStorage.getItem("userId");  // Ensure it's correctly assigned here
    
//     if (userId) {
//       // Make API request to fetch user data
//       axios
//         .get(`http://localhost:8080/api/v1/user/getUsersById?id=${userId}`)
//         .then((response) => {
//           const user = response.data;
//           setUsername(user.firstName || "User");  // Correctly use 'firstName' or fallback to "User"
//         })
//         .catch((error) => {
//           console.error("Error fetching user data", error);
//           setUsername("User");  // Fallback if API call fails
//         });
//     } else {
//       console.error("User ID is missing from localStorage");
//     }
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
//       <div className="container mx-auto">
//         {/* Header Section with Gym Background */}
//         <div className="bg-cover bg-center rounded-2xl shadow-xl p-8 mb-8" style={{ backgroundImage: 'url("https://www.example.com/gym-background.jpg")' }}>
//           <div className="flex items-center justify-between">
//             <div className="text-white">
//               <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
//                 Welcome, {username} 👋
//               </h1>
//               <h4 className="text-3xl font-semibold text-white">
//                 Let’s Start Your Fitness Journey
//               </h4>
//               <p className="text-gray-200 mt-2">Download your personalized Diet Plan</p>
//             </div>
//           </div>
//         </div>

//         {/* Diet Plan Button */}
//         <a href="/path/to/diet-plan.pdf" download>
//           <button 
//             style={{
//               backgroundColor: '#3b82f6', 
//               color: 'white', 
//               padding: '12px 24px', 
//               fontSize: '1rem', 
//               borderRadius: '0.375rem', 
//               boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
//               margin: '24px auto',
//               transition: 'background-color 0.3s',
//               width: '50%',
//               display: 'block',
//             }}
//             onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'} 
//             onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
//           >
//             Download Diet Plan
//           </button>
//         </a>

//         {/* Workout Days Section */}
//         <div className="grid grid-cols-3 gap-6 mb-8">
//           {workoutData.slice(0, 3).map((day, index) => (
//             <div 
//               key={index} 
//               onClick={() => {
//                 setSelectedDay(day.day);
//                 scrollToExercises();
//               }}
//               className={`${day.color} rounded-2xl p-6 text-center shadow-lg hover:scale-105 transition-transform cursor-pointer`}
//             >
//               <h3 className="font-bold mb-2 text-xl">{day.day}</h3>
//               <img 
//                 src={day.gif} 
//                 alt={`${day.focus} workout`} 
//                 className="w-40 h-40 object-cover rounded-xl mx-auto mb-4"
//               />
//               <p className="text-lg text-blue-900 font-semibold">{day.focus}</p>
//             </div>
//           ))}
//         </div>

//         {/* Exercises Section */}
//         <div ref={exercisesRef} className="mt-16">
//           {selectedDay && (
//             <div>
//               {workoutData
//                 .filter(day => day.day === selectedDay)
//                 .map((day, index) => (
//                   <div key={index}>
//                     <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
//                       {day.day} Workout: {day.focus}
//                     </h2>

//                     <div className="grid md:grid-cols-2 gap-6">
//                       {day.exercises.map((exercise, index) => (
//                         <div key={index} className="bg-gray-100 rounded-xl p-4 flex flex-col items-center">
//                           <h3 className="text-xl font-semibold mb-4">{exercise.name}</h3>
//                           <img 
//                             src={exercise.gif} 
//                             alt={exercise.name}
//                             className="w-64 h-64 object-cover rounded-lg mb-4"
//                           />
//                           <p className="text-gray-700">
//                             <span className="font-bold">Sets:</span> {exercise.sets} | 
//                             <span className="font-bold"> Reps:</span> {exercise.reps}
//                           </p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
