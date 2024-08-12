// src/components/GameBoard.js
import React, { useState } from 'react';
import Quiz from './Quiz';

const GameBoard = () => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleAnswer = (correct) => {
    if (correct) {
      setScore(score + 10); // Gana 10 puntos por respuesta correcta
    } else {
      setScore(score - 5);  // Pierde 5 puntos por respuesta incorrecta
    }
  };

  const handleGameComplete = () => {
    setGameOver(true);
  };

  // Mensaje de derrota personalizado
  const getDefeatMessage = () => {
    if (score <= -10) {
      return "¡Lo siento, has perdido! , los Drunns estan muy cerca de conquistar el mundo.";
    } else if (score <= 0) {
      return "Has dejado que los Drunns ganen.";
    }
    return "";
  };

  return (
    <div>
      <h1>Juego de Preguntas sobre puesto de trabajo ideal derrota a los Druns respondiendo correctamente</h1>
      {gameOver ? (
        <div>
          <h2>{score > 0 ? '¡Felicidades, ganaste los Drunss fueron destruidos gracuias a tu confianza y valentia !' : getDefeatMessage()}</h2>
          <p>Tu puntaje final es: {score}</p>
        </div>
      ) : (
        <div>
          <Quiz onAnswer={handleAnswer} onComplete={handleGameComplete} />
          <h2>Puntaje: {score}</h2>
        </div>
      )}
    </div>
  );
};

export default GameBoard;

