import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from "./components/IdCard.js"
import Greetings from "./components/Greetings.js"
import Random from "./components/Random.js"
import BoxColor from "./components/BoxColor.js"
import LikeButton from "./components/LikeButton.js"
import ClickablePicture from "./components/ClickablePicture.js"
import Dice from  "./components/Dice.js"
import Carousel from "./components/Carousel.js"


function App() {
  return (
  <div>

    <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>
<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
  <Greetings lang='de'>Ludwig</Greetings>
  <Greetings lang='fr'>François</Greetings>
  <Random min={1} max={6}/>
  <Random min={1} max={100}/>
  <BoxColor r={255} g={0} b={0} />
  <BoxColor r={128} g={255} b={0} />
  <LikeButton /><LikeButton />
  <ClickablePicture
  img='/img/persons/maxence.png'
  imgClicked='/img/persons/maxence-glasses.png'
  />
  <Dice/>
  <Carousel
  imgs={[
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]}
/>

  </div>
  );
}

export default App;
