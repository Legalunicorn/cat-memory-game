import { useState, useEffect } from "react";

import getCats from "./API";
import DisplayChoices from "./DisplayChoices";

import "../styles/GameWindow.scss"

import popcat from "../assets/images/popcat.gif"





export default function GameWindow({
    difficulty,
    // gameOver,
    setIsGameOver,
    highScore,
    setHighScore,
    endScore,
    setEndScore,
    setResult
}){

    let noCats;
    if (difficulty=='easy'){
        noCats=5
    }
    else if (difficulty=="medium"){
        noCats=10
    }
    else {
        noCats = 15
    }

    const [catsData,setCatsData] = useState([])
    const [gameOver,setGameOver] = useState(false)



    useEffect(()=>{ 
        async function startFetch(){
            setCatsData([])
            const data = await getCats(noCats)
            if (!ignore){
                setCatsData(data)
            }
        }
        let ignore = false;
        startFetch();
        return ()=>{
            ignore = true; //clean up: 
        }

    },[difficulty])
    if (catsData.length==0){
        return(
            <>
                <div className="loading-all">
                    <img src={popcat} alt="" />
                    <p>Loading your {noCats} cats....</p>
                </div>
            </>
        )
    }
    else {
        return(
            <DisplayChoices
                copyData={[...catsData]}
                setCatsData={setCatsData}
                noCats={noCats}
                setIsGameOver={setIsGameOver}
                highScore={highScore}
                setHighScore={setHighScore}
                // score={score}
                setEndScore={setEndScore}
                setResult={setResult}
            />
        )        
    }
}