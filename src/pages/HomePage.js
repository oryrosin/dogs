import React from 'react';
import ReactDOM from 'react-dom';

import { Jumbotron, Button } from 'react-bootstrap';

function HomePage() {

    return (
        <Jumbotron>
            <h1>Dog Book</h1>
            <p>man's best friend</p>
            <Button onClick="bark.mp3"> woof!</Button>
        </Jumbotron>
    )
}
export default HomePage