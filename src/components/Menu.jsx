//menu component 
import "../styles/Menu.scss"



//menu button onlick
//start game? 
//startGame prop


export default function Menu({
    setDifficulty

}){
    function handleChangeDifficulty(e){
        setDifficulty(e.target.dataset.difficulty)
    }

    return(
        <>
            <div className="game-menu">
                <div className="menu-header">
                    <p className="">Choose a difficulty!</p>
                </div>
                <div className="menu-content">
                    <button onClick={handleChangeDifficulty} data-difficulty="easy" className="difficulty-option">Easy</button>
                    <button onClick={handleChangeDifficulty} data-difficulty="medium" className="difficulty-option">Medium</button>
                    <button onClick={handleChangeDifficulty} data-difficulty="hard" className="difficulty-option">Hard</button>
                </div>

            </div>
        </>
    )
}