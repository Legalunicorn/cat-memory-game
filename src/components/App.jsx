//react
import { useState } from 'react'
import "../styles/App.scss"
import Menu from './Menu'
import GameWindow from './GameWindow';
import getCats from './API';
import popcat from "../assets/images/popcat.png"

//test your API?


function App(){
  console.log('APP IS RERENDERING!!!!')
  const [difficulty,setDifficulty] = useState('')
  const [gameOver,setGameOver] = useState(false)
  const [highScore,setHighScore] = useState(0)
  const [endScore,setEndScore] = useState(0)
  // const [isCatsLoaded,setIsCatsLoaded] = useState(false) //based on the user difficulty selected
  // const [catsData,setCatsData] = useState('')

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
  }
  function handleRestartGame(){
    setGameOver('false')
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
                <>
                  <p>THE GAME HAS ENDED</p>
                  <button onClick={handleMenuButton}>Menu</button>                
                  <button onClick={handleRestartGame}>Try Again</button>
                </>
 
              ):(
                <GameWindow
                  difficulty={difficulty}
                  gameOver={gameOver}
                  setIsGameOver={setGameOver}
                  highScore={highScore}
                  setHighScore={setHighScore}
                  setEndScore={setEndScore}
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
