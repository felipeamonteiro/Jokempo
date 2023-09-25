import React from 'react';

const Resultado = ({ resultado, onReiniciar }) => {
  return (
    <div>
      <h2>Resultado</h2>
      <p>{resultado}</p>
      <button onClick={onReiniciar}>Jogar Novamente</button>
    </div>
  );
};

export default Resultado;
