import "../styles/Card.scss";
import popcat from "../assets/images/popcat.png";
import card_audio from "../assets/sound/card.mp3";

export default function Card({
  id, //card
  url, //card
  chosenIds, //display
  setChosenIds, //display
  setScore,
  score,
  setIsGameOver,
  setEndScore,
  maxScore,
  setResult,
}) {
  const click_audio = new Audio(card_audio);
  function handleCardClick(e) {
    click_audio.play();
    const id = e.target.dataset.id;

    if (chosenIds.includes(id)) {
      setIsGameOver(true);
      setEndScore(score);
    } else {
      setScore(score + 1);
      let nextRenderScore = score + 1;
      let copy = [...chosenIds];
      copy.push(id);
      setChosenIds(copy);

      if (nextRenderScore == maxScore) {
        //user has won the game
        setEndScore(maxScore);
        setIsGameOver(true);
        setResult("victory");
      }
    }
  }

  function handleLoad(e) {
    e.target.classList.remove("hide");
    e.target.nextElementSibling.classList.toggle("hide");
  }

  return (
    <>
      <div data-id={id} onClick={handleCardClick} key={id} className="card">
        <div key={Date.now()} className="card-front">
          <img
            data-id={id}
            onLoad={handleLoad}
            className="cat-img hide"
            src={url}
            alt="cat-img"
          />
          <div className="card-loading">
            <img src={popcat} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
