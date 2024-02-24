
import victory from "../assets/images/victory.gif"
import lose from "../assets/images/lose.gif"
import "../styles/DisplayResult.scss"

export default function DisplayResult({
    result,
    handleMenuButton,
    handleRestartGame
}){
    return(
        <div className="results">
        {result=='victory'?(
          <>
            <p>You Won!</p>
            <img className="meme"src={victory} alt="victory_gif"></img>
          </>
        ):(
          <>
            <p>Game over!Better luck next time. </p>
            <img className="meme" src={lose} alt="lose_gif"></img>
          </>
        )}
        <div className="menu-options">
        <button onClick={handleMenuButton}>Menu</button>                
        <button onClick={handleRestartGame}>Try Again</button>
        </div>
      </div>
    )
}