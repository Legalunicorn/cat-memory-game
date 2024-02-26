import { useState, useEffect } from "react";
import getCats from "./API";
import DisplayChoices from "./DisplayChoices";
import "../styles/GameWindow.scss";
import popcat from "../assets/images/popcat.gif";


export default function GameWindow({
  difficulty,
  setIsGameOver,
  highScore,
  setHighScore,
  setEndScore,
  setResult,
}) {
  let noCats;
  if (difficulty == "easy") {
    noCats = 5;
  } else if (difficulty == "medium") {
    noCats = 10;
  } else {
    noCats = 15;
  }

  const [catsData, setCatsData] = useState([]);


  useEffect(() => {
    async function startFetch() {
      setCatsData([]);
      const data = await getCats(noCats);
      if (!ignore) {
        setCatsData(data);
      }
    }
    let ignore = false;
    startFetch();
    return () => {
      ignore = true; //clean up:
    };
  }, [difficulty]);

  function bgMusic() {
    let bg_audio = document.getElementById("audio");
    if (bg_audio.paused) {
      bg_audio.play();
    }
    //
    else {
      console.log("bg music overover");
    }

  }
  if (catsData.length == 0) {
    return (
      <>
        <div onLoad={bgMusic} className="loading-all">
          <img src={popcat} alt="" />
          <p>Loading your {noCats} cats....</p>
        </div>
      </>
    );
  } else {
    return (
      <DisplayChoices
        copyData={[...catsData]}
        setCatsData={setCatsData}
        noCats={noCats}
        setIsGameOver={setIsGameOver}
        setEndScore={setEndScore}
        setResult={setResult}
      />
    );
  }
}
