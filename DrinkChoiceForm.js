
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DrinkChoiceForm = () => {
  const [modelName, setModelName] = useState('');
  const [inputVariables, setInputVariables] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://api.tom.ai/v1/models/drink_choice'
      );
      setModelName(response.data.name);
      setInputVariables(response.data.inputs);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Drink Choice Model</h1>
      <h2>Model Name: {modelName}</h2>
      <form onSubmit={handleSubmit}>
        {inputVariables.map((input) => (
          <div key={input.name}>
            <label>
              {input.name}:<br />
              <input
                type="text"
                name={input.name}
                onChange={handleInputChange}
              />
            </label>
          </div>
        ))}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DrinkChoiceForm;