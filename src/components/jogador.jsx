import React from 'react';

const Jogador = ({ escolha, onEscolha }) => {
  return (
    <div>
      <h2>Jogador</h2>
      <button onClick={() => onEscolha('pedra')}>Pedra</button>
      <button onClick={() => onEscolha('papel')}>Papel</button>
      <button onClick={() => onEscolha('tesoura')}>Tesoura</button>
    </div>
  );
};

export default Jogador;
