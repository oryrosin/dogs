import React from 'react';
import ReactDOM from 'react-dom';
import './bark.mp3';

import { Jumbotron, Button } from 'react-bootstrap';

function HomePage() {
    
    
    function playSound() {
          var sound = document.getElementById("audio");
          sound.play();
      }
    
    function playAudio(url) {
        new Audio(url).play();
      }

    return (
        <Jumbotron>
            <h1>Dog Book</h1>
            <p>man's best friend</p>
            <audio id="audio" src='woof.wav' autoplay="false" ></audio>
            <Button onclick={playSound}> woof!</Button>
            <Button onClick={playAudio('woof.wav')}> woof!!</Button>
        </Jumbotron>
    )
}
export default HomePage