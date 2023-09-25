import React from 'react';

const Placar = ({ jogadorPontos, computadorPontos, empates }) => {
  return (
    <div className='placar'>
      <h2>Placar: </h2>
      <p>Jogador: {jogadorPontos}</p>
      <p>Computador: {computadorPontos}</p>
      <p>Empates: {empates}</p>
    </div>
  );
};

export default Placar;
