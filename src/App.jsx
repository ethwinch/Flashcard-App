import { useState } from 'react'
import './App.css'

const flashcards = [
  {front: "０", back: "零", hira: "れい"},
  {front: "１", back: "一", hira: "いち"},
  {front: "２", back: "二", hira: "に"},
  {front: "３", back: "三", hira: "さん"},
  {front: "４", back: "四", hira: "よん / し"},
  {front: "５", back: "五", hira: "ご"},
  {front: "６", back: "六", hira: "ろく"},
  {front: "７", back: "七", hira: "なな / しち"},
  {front: "８", back: "八", hira: "はち"},
  {front: "９", back: "九", hira: "きゅう / く"},
  {front: "１０", back: "十", hira: "じゅう"},
  {front: "１００", back: "百", hira: "ひゃく"},
  {front: "３００", back: "三百", hira: "さんびゃく", irregular: true},
  {front: "６００", back: "六百", hira: "ろっぴゃく", irregular: true},
  {front: "８００", back: "八百", hira: "はっぴゃく", irregular: true},
  {front: "１,０００", back: "千", hira: "せん"},
  {front: "３,０００", back: "三千", hira: "さんぜん", irregular: true},
  {front: "４,０００", back: "四千", hira: "よんせん"},
  {front: "７,０００", back: "七千", hira: "ななせん"},
  {front: "８,０００", back: "八千", hira: "はっせん", irregular: true},
  {front: "１０,０００", back: "一万", hira: "いちまん"}
];



function App() {

  const [currentCard, setCurrentCard] = useState(0);
  const [flipCard, setFlipCard] = useState(false);

  const curr = flashcards[currentCard];


  const nextCard = () => {
    setFlipCard(false);
    setCurrentCard((prev) => (prev+1) % flashcards.length); // % flashcards.length takes you to the first card if you try to go to the next card from the last card
  };
  const prevCard = () => {
    setFlipCard(false);
    setCurrentCard((prev) => prev === 0 ? flashcards.length -1 : prev-1); // prev on first card sends you to last card
  };


  return (
    <>
      <h1>Learn to Count from 0 to 10,000 in Japanese!</h1>
      <h4>Blue cards indicate the pronounciation is irregular.</h4>
      <h4>Total Cards: {flashcards.length}</h4>
      
      <div className={`flash-card ${flipCard ? "flipped" : ""}`} id={`${curr.irregular === true ? "irregular" : ""}`} onClick={() => setFlipCard(!flipCard)}>
        <div className={`${flipCard ? "back" : "front"}`}>
          {flipCard ? curr.back : curr.front}
          <br></br>
          {flipCard ? curr.hira : ""}
        </div>
      </div>

      <button onClick={prevCard}>← 前 (ぜん)</button>
      <button onClick={nextCard}>次 (つぎ) →</button>
    </>
  )
}

export default App
