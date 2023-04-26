import React, { useState } from 'react';
import DrinkChoiceForm from './DrinkChoiceForm';
import axios from 'axios';

const App = () => {
  const [decision, setDecision] = useState(null);

  const handleSubmit = async (event, formData) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'https://api.tom.ai/v1/models/drink_choice/predict',
        formData
      );
      setDecision(response.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <DrinkChoiceForm handleSubmit={handleSubmit} />
      {decision && (
        <div>
          <h3>Decision: {decision}</h3>
        </div>
      )}
    </div>
  );
};


//database function
const drink = new Drink({
    name: model.name,
    inputVariables: Object.keys(formData),
    decision: result.decision
});
  
drink.save()
.then(() => {
    console.log('Drink saved to database.');
})
.catch((err) => {
    console.error(err);
});

    
export default App;
