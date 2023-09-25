import React from 'react';

const Computador = ({ escolha }) => {
  return (
    <div>
      <h2>Computador</h2>
      <p className='escolha'>Escolha do Computador: {escolha}</p>
    </div>
  );
};

export default Computador;
