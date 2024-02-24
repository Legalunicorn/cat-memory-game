//react
import { useState } from 'react'
import "../styles/App.scss"
import Menu from './Menu'
import GameWindow from './GameWindow';
import DisplayResult from './Result';
import background_music from "../assets/sound/background_music.mp3"

import card_audio from "../assets/sound/card.mp3"
//test your API?


function App(){
  const [difficulty,setDifficulty] = useState('')
  const [gameOver,setGameOver] = useState(false)
  const [highScore,setHighScore] = useState(0)
  const [endScore,setEndScore] = useState(0)
  const [result,setResult] = useState('')
  // const [isCatsLoaded,setIsCatsLoaded] = useState(false) //based on the user difficulty selected
  // const [catsData,setCatsData] = useState('')

  //audio
  const card_sound  = new Audio(card_audio);
  const bg = new Audio(background_music)

  if (endScore>highScore){
    setHighScore(endScore)
  }


  function handleMenuButton(){
    card_sound.play()
    setDifficulty('')
    setGameOver(false)
    setEndScore(0)
    setResult('')
  }
  function handleRestartGame(){
    card_sound.play()
    setDifficulty(difficulty)
    setGameOver(false)
    setEndScore(0)
    setResult('')
  }


  return (
    <>
      <div className="header">
        <h1>Cat Memory Game</h1>
        <p>High score: {highScore}</p>
      </div>

      <div className="content">  
        {difficulty==''?
            (<Menu
              difficulty={difficulty}
              setDifficulty={setDifficulty}
            />)
          :(
            <>
              {/* game over,render,hit back this function */}
              {gameOver?(
                <DisplayResult
                result={result}
                endScore={endScore}
                handleMenuButton={handleMenuButton}
                handleRestartGame={handleRestartGame}
                />
                
 
              ):(
                <GameWindow
                  difficulty={difficulty}
                  gameOver={gameOver}
                  setIsGameOver={setGameOver}
                  highScore={highScore}
                  setHighScore={setHighScore}
                  setEndScore={setEndScore}
                  setResult = {setResult}
        
                />
              )}

              {/* difficulty has been picked liao 
              if gameOvver? pull up a dialoguse <Diaglog>
              
              */}
            </>
          )
        }
      </div>

      <div className="footer">

      </div>
    </>
  )
}

export default App
