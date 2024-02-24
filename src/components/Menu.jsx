//menu component
import "../styles/Menu.scss";
import menu_audio from "../assets/sound/enter_game.mp3";

export default function Menu({ setDifficulty }) {
  const MENU_AUDIO = new Audio(menu_audio);
  function handleChangeDifficulty(e) {
    MENU_AUDIO.play();
    setDifficulty(e.target.dataset.difficulty);
  }

  return (
    <>
      <div className="game-menu">
        <div className="menu-header">
          <p className="">Choose a difficulty!</p>
        </div>
        <div className="menu-content">
          <button
            onClick={handleChangeDifficulty}
            data-difficulty="easy"
            className="difficulty-option"
          >
            Easy
          </button>
          <button
            onClick={handleChangeDifficulty}
            data-difficulty="medium"
            className="difficulty-option"
          >
            Medium
          </button>
          <button
            onClick={handleChangeDifficulty}
            data-difficulty="hard"
            className="difficulty-option"
          >
            Hard
          </button>
        </div>
        <div>Dont pick the same cat twice!</div>
      </div>
    </>
  );
}
