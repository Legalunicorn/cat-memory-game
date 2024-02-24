import { useState, useEffect } from "react";

import getCats from "./API";
import DisplayChoices from "./DisplayChoices";

import "../styles/GameWindow.scss"

import popcat from "../assets/images/popcat.gif"

// import bg_aud from "../assets/sound/background_music.mp3"



export default function GameWindow({
    difficulty,
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
    // const [gameOver,setGameOver] = useState(false)


    // const bg = new Audio(bg_aud)

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

    function bgMusic(){
        let bg_audio = document.getElementById('audio');
        if (!bg_audio.ended){
            console.log('not over')
            bg_audio.play();
        }
        else{console.log('over')}

        // bg.play()
    }
    if (catsData.length==0){
        return(
            <>
                <div onLoad={bgMusic} className="loading-all">
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