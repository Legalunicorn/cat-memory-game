import "../styles/GameWindow.scss";
import { useState } from "react";
import Card from "./Card";

export default function DisplayChoices({
  copyData,
  setIsGameOver,
  noCats,
  // score,
  // setScore,
  highScore,
  setHighScore,
  setEndScore,
  setResult,
}) {
  const [score, setScore] = useState(0);
  const [chosenIds, setChosenIds] = useState([]);
  const maxScore = copyData.length;

  let displayCount;
  if (noCats == 5) {
    displayCount = 3;
  } else if (noCats == 10) {
    displayCount = 5;
  } else {
    displayCount = 7;
  }

  function getUnpicked() {
    let found = false,
      rand;
    while (!found) {
      rand = Math.floor(Math.random() * maxScore);
      if (!chosenIds.includes(copyData[rand].id)) {
        found = true;
        return copyData[rand];
      }
    }
  }
  function populateOptions(chosenOne, displayCount, noCats) {
    const pickedID = [],
      catOptions = [];
    let randIndex, newID;
    catOptions.push(chosenOne);
    pickedID.push(chosenOne.id);

    while (catOptions.length < displayCount) {
      randIndex = Math.floor(Math.random() * (noCats - 1)) + 1;
      newID = copyData[randIndex].id;
      if (!pickedID.includes(newID)) {
        catOptions.push(copyData[randIndex]);
        pickedID.push(newID);
      }
    }
    return catOptions;
  }

  const chosenOne = getUnpicked();
  let options = populateOptions(chosenOne, displayCount, noCats);
  console.log("bef shuffle: ", options);
  options = options.sort(() => Math.random() - 0.5);
  console.log("aft shuffle: ", options);

  const CatsJSX = options.map((cat) => (
    <>
      <Card
        key={cat.id}
        id={cat.id}
        url={cat.url}
        // highScore={highScore}
        // setHighScore={setHighScore}
        chosenIds={chosenIds}
        setChosenIds={setChosenIds}
        score={score}
        setScore={setScore}
        setIsGameOver={setIsGameOver}
        setEndScore={setEndScore}
        maxScore={maxScore}
        setResult={setResult}
      />
    </>
  ));

  return (
    <div className="game-container">
      <div className="card-container">{CatsJSX}</div>
      <p className="score">
        Score: {score}/{maxScore}
      </p>
    </div>
  );
}
