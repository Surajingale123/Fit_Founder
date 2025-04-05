import React, { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');
  const [error, setError] = useState(null); 

  const calculateBMI = async () => {
    setError(null); 
    if (!weight || !height) {
      setError("Please enter both weight and height.");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters ** 2)).toFixed(2);
    setBMI(bmiValue);
    setBmiCategory(getBMICategory(bmiValue));

    try {
      const response = await fetch(process.env.REACT_APP_API_URL + '/api/bmi/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ height: heightInMeters * 100, weight }), // Send height in cm
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to save BMI data.");
      }
      console.log('BMI data sent to backend.');
    } catch (error) {
      console.error('Error sending BMI data:', error);
      setError(error.message); // Set the error message for display
    }
  };

  const getBMICategory = (bmi) => {
    
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
      <label>
        Weight (kg):
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <br />
      <label>
        Height (cm):
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <br />
      <button onClick={calculateBMI}>Calculate</button>
      {bmi && (
        <div>
          <p>Your BMI is: {bmi}</p>
          <p>Your BMI category is: {bmiCategory}</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;