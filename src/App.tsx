import React from 'react';

const App = () => {
  // Access VITE_API_KEY safely
  const apiKey = import.meta.env.VITE_API_KEY;

  return (
    <div>
      <h1>SMILE-AI-VEO3</h1>
      <p>Your API key is: {apiKey ? 'Loaded ✅' : 'Missing ❌'}</p>
    </div>
  );
};

export default App;
