import React from 'react';
import ReactDOM from 'react-dom';
import './bark.mp3';

import { Jumbotron, Button } from 'react-bootstrap';

function HomePage() {

    function playAudio(url) {
        new Audio(url).play();
      }

    return (
        <Jumbotron>
            <h1>Dog Book</h1>
            <p>man's best friend</p>
            <Button onClick={playAudio('bark.mp3')}> woof!!</Button>
        </Jumbotron>
    )
}
export default HomePage