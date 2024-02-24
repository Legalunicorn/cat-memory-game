
import victory from "../assets/images/victory.gif"
import vicory_audio from "../assets/sound/win.mp3"
import lose_audio from "../assets/sound/lose.mp3"
import lose from "../assets/images/lose.gif"
import "../styles/DisplayResult.scss"

export default function DisplayResult({
    result,
    handleMenuButton,
    handleRestartGame,
    endScore
}){

  function queSound(){
    let result_audio;
    if (result=='victory'){
      result_audio = new Audio(vicory_audio)
    }
    else{
      result_audio = new Audio(lose_audio)
    }
    result_audio.play()

  }
    return(
        <div className="results">
        {result=='victory'?(
          <>
            <p>You Won!</p>
            <p>Score: {endScore}</p>
            <img onLoad={queSound} className="meme"src={victory} alt="victory_gif"></img>
          </>
        ):(
          <>
            <p>Game over!Better luck next time. </p>
            <p>Score: {endScore}</p>
            <img onLoad={queSound} className="meme" src={lose} alt="lose_gif"></img>
          </>
        )}
      
        <div className="menu-options">
        <button onClick={handleMenuButton}>Menu</button>                
        <button onClick={handleRestartGame}>Try Again</button>
        </div>
      </div>
    )
}