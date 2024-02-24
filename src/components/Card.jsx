import "../styles/Card.scss"
import { useState } from "react"
import popcat from "../assets/images/popcat.png"


export default function Card({
    id, //card
    url, //card
    chosenIds, //display
    setChosenIds, //display
    // highScore, //app
    // setHighScore, //app
    setScore,
    score,
    setIsGameOver,
    setEndScore,
    maxScore

}){
    function handleCardClick(e){
        console.log("user clicked id: ",e.target.dataset.id)
        const id = e.target.dataset.id;
    
        if (chosenIds.includes(id)){ 
            setIsGameOver(true)
            setEndScore(score)
            console.log('setting endscore: ',score,setEndScore)
        }
        else{
            setScore(score+1)
            let nextRenderScore = score+1
            let copy = [...chosenIds]
            copy.push(id)
            setChosenIds(copy)

            if (nextRenderScore==maxScore){ //user has won the game
                setEndScore(maxScore)
                setIsGameOver(true)
            }

        }
    }    


    // const [isLoaded,setisLoaded] = useState(false)
    function handleLoad(e){
        //instead tell the dom one has Loaded?
        e.target.classList.remove('hide')
        e.target.nextElementSibling.classList.toggle('hide')

    }

    return(
        <>
            <div data-id={id} onClick={handleCardClick} key={id} className="card">
                {/* dont actually need the div below */}
                <div className="card-front"> 
                    <img data-id={id} onLoad={handleLoad} className="cat-img hide" src={url} alt="cat-img" />
                    <div className="card-loading">
                        <img src={popcat} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}