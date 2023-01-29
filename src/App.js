import React, { useState, useEffect } from "react";
import Die from "./components/Die";
import Timer from "./components/Timer";
import RollCount from "./components/RollCount";
import FastestTime from "./components/FastestTime";
import Footer from "./components/Footer";
import Confetti from "react-confetti";
import { nanoid } from "nanoid";
import "./App.css";

export default function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dice]);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function rollDice() {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
      setCount(count + 1);
      setGameStarted(true);
    } else {
      setTenzies(false);
      setDice(allNewDice());
      setCount(0);
      setTime(0);
      setGameStarted(false);
    }
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
    setGameStarted(true);
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <div className="app">
      {tenzies && <Confetti />}
      <div className="app--inner">
        <main>
          <h1 className="title">Tenzies</h1>
          {!tenzies && (
            <p className="instructions">
              Roll until all dice are the same. Click each die to freeze it at
              its current value between rolls.
            </p>
          )}
          {tenzies && <p className="you-won">YOU WON!</p>}
          <div className="count-timer-container">
            <RollCount count={count} />
            <Timer
              gameStarted={gameStarted}
              time={time}
              setTime={setTime}
              tenzies={tenzies}
              holdDice={holdDice}
            />
          </div>
          <div className="dice-container">{diceElements}</div>
          <button className="roll-btn" onClick={rollDice}>
            {tenzies ? "New Game" : "Roll"}
          </button>
          {fastestTime && <FastestTime fastestTime={fastestTime} />}
        </main>
        <Footer />
      </div>
    </div>
  );
}
