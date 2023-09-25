// src/App.js
import React, { useState } from 'react';
import './App.css';
import Jogador from './components/Jogador';
import Computador from './components/Computador';
import Placar from './components/Placar';
import Resultado from './components/Resultado';

function App() {
  const [jogadorEscolha, setJogadorEscolha] = useState(null);
  const [computadorEscolha, setComputadorEscolha] = useState(null);
  const [jogadorPontos, setJogadorPontos] = useState(0);
  const [computadorPontos, setComputadorPontos] = useState(0);
  const [empates, setEmpates] = useState(0);
  const [resultado, setResultado] = useState('');
  const [jogadorVenceu, setJogadorVenceu] = useState(false);

  const opcoes = ['pedra', 'papel', 'tesoura'];

  const fazerJogada = (jogada) => {
    const computadorIndex = Math.floor(Math.random() * 3);
    const computadorEscolhaAtual = opcoes[computadorIndex];
    setComputadorEscolha(computadorEscolhaAtual);

    if (jogada === computadorEscolhaAtual) {
      setEmpates(empates + 1);
      setResultado('Empate!');
    } else if (
      (jogada === 'pedra' && computadorEscolhaAtual === 'tesoura') ||
      (jogada === 'papel' && computadorEscolhaAtual === 'pedra') ||
      (jogada === 'tesoura' && computadorEscolhaAtual === 'papel')
    ) {
      setJogadorPontos(jogadorPontos + 1);
      setResultado('Você venceu!');
      setJogadorVenceu(true);
    } else {
      setComputadorPontos(computadorPontos + 1);
      setResultado('Computador venceu!');
      setJogadorVenceu(false);
    }
  };

  const reiniciarPlacar = () => {
    setJogadorPontos(0);
    setComputadorPontos(0);
    setEmpates(0);
    setResultado('');
    setJogadorVenceu(false);
  };

  return (
    <div className="App">
      <Placar jogadorPontos={jogadorPontos} computadorPontos={computadorPontos} empates={empates} />
      <div className="botoes">
        <Jogador onEscolha={fazerJogada} />
      </div>
      <Computador escolha={computadorEscolha} />
      {resultado && <Resultado resultado={resultado} onReiniciar={reiniciarPlacar} jogadorVenceu={jogadorVenceu} />}
    </div>
  );
}

export default App;
