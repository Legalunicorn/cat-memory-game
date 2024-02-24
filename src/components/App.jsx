//react
import { useState } from 'react'
import "../styles/App.scss"
import Menu from './Menu'
import GameWindow from './GameWindow';
import DisplayResult from './Result';
import victory from "../assets/images/victory.gif"
import lose from "../assets/images/lose.gif"
import background_music from "../assets/sound/menu_select.mp3"
import DisplayChoices from './DisplayChoices';

//test your API?


function App(){
  console.log('APP IS RERENDERING!!!!')
  const [difficulty,setDifficulty] = useState('')
  const [gameOver,setGameOver] = useState(false)
  const [highScore,setHighScore] = useState(0)
  const [endScore,setEndScore] = useState(0)
  const [result,setResult] = useState('')
  // const [isCatsLoaded,setIsCatsLoaded] = useState(false) //based on the user difficulty selected
  // const [catsData,setCatsData] = useState('')

  //audio
  const bg_music  = new Audio(background_music);

  function playBgMusic(){
    bg_music.play();
  }


  console.log('ES HS: ',endScore,highScore)
  if (endScore>highScore){
    setHighScore(endScore)
  }

  function getNoCats(difficulty){
    if (difficulty=='easy') return 5
    else if (difficulty=='medium') return 10
    else return 15
  }

  function handleMenuButton(){
    setDifficulty('')
    setGameOver(false)
    setEndScore(0)
    setResult('')
  }
  function handleRestartGame(){
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
                handleMenuButton={handleMenuButton}
                handleRestartGame={handleRestartGame}
                />
                // <>
                //   {result=='victory'?(
                //     <>
                //     <p>You Won!</p>
                //     <img src={victory} alt="victory_gif"></img>
                //     </>
                //   ):(
                //     <>
                //     <p>Game over!Better luck next time. </p>
                //     <img src={lose} alt="lose_gif"></img>
                //     </>
                //   )}
                  
                //   <button onClick={handleMenuButton}>Menu</button>                
                //   <button onClick={handleRestartGame}>Try Again</button>
                // </>
 
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
