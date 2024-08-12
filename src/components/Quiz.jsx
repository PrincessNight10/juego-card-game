// src/components/Quiz.js
import React, { useState } from 'react';

const questions = [
  {
    question: "¿Cuales son los factores tecnicos y ambientales?",
    options: ["son Aspectos que impactan la comodidad y eficiencia en el trabajo.", "Un tipo de trabajo", "Una regla social", "ninguna respuesta es"],
    answer: "son Aspectos que impactan la comodidad y eficiencia en el trabajo."
  },
  {
    question: "¿Qué significa Ergonomia?",
    options: ["un acronimo", " Estudio de la interacción entre los humanos y otros elementos de un sistema.", "nada", "otra cosa"],
    answer: " Estudio de la interacción entre los humanos y otros elementos de un sistema."
  },

  {
    question: "¿La altura del escritorio debe ser?",
    options: ["12 a 15 cm", "sin altura", "puedes ubicarlo como quieras", "Entre 70-75 cm desde el suelo."],
    answer: "Entre 70-75 cm desde el suelo."
  },
  {
    question: "¿como debe ser la distancia del monitor?",
    options: ["-50-70 cm de los ojos para evitar fatiga visual.", "lejana", "cercana", "sin pantalla"],
    answer: "-50-70 cm de los ojos para evitar fatiga visual."
  },
  {
    question: "¿cual es el nivel de temperatura?",
    options: ["0°C", " Entre 20-24°C con buena ventilación", "47°C", "sin temperatura"],
    answer: " Entre 20-24°C con buena ventilación"
  }, 
];

const Quiz = ({ onAnswer, onComplete }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    const question = questions[currentQuestionIndex];
    if (selectedOption === question.answer) {
      onAnswer(true);
    } else {
      onAnswer(false);
    }
    setSelectedOption(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  if (currentQuestionIndex >= questions.length) {
    onComplete();
    return null;
  }

  const question = questions[currentQuestionIndex];

  return (
    <div>
      <h2>{question.question}</h2>
      {question.options.map((option, index) => (
        <div key={index}>
          <input 
            type="radio" 
            value={option} 
            checked={selectedOption === option} 
            onChange={handleOptionChange} 
          />
          {option}
        </div>
      ))}
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
};

export default Quiz;
