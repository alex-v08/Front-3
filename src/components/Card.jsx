import React from 'react';
import "../css/Card.css";


//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

const Card = ({ data }) => {
  return (
    <div className="card">
      <h2>Información ingresada:</h2>
      <p>A el usuario {data.input1}</p>
      <p>Le gusta el Color {data.input2}</p>
    </div>
  );
};

export default Card;
