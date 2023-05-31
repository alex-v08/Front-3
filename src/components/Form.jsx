import React from 'react'
import { useState } from 'react';
import Card from './Card';
import "./Form.css";

const Form = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showCard, setShowCard] = useState(false);
    const [cardData, setCardData] = useState({ input1: '', input2: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
    
   
        if (input1.trim().length < 3 || input1.trim().startsWith(' ') || input2.length < 6) {
          setErrorMessage('Por favor chequea que la información sea correcta');
          setShowCard(false);
          return;
        }
    
   
        setCardData({ input1, input2 });
        setShowCard(true);
    
       
        setInput1('');
        setInput2('');
        setErrorMessage('');
      };
  
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}  >
        <div>
          <label>Ingrese su Nombre:</label>
          <input
            type="text"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
        </div>
        <div>
          <label>Ingrese su Grupo favorito:</label>
          <input
            type="text"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
        </div>
        <button className ="button" type="submit">Enviar</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {showCard && <Card data={cardData} />}
    </div>
  )
}

export default Form