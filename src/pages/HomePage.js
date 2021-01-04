import React from 'react';
import ReactDOM from 'react-dom';

import { Jumbotron, Button } from 'react-bootstrap';

function HomePage() {

    return (
        <div>
            <Jumbotron>
                <h1>Dog Book</h1>
                <p>man's best friend</p>
                <Button  >woof!</Button>
            </Jumbotron>
        </div>
    )
}
export default HomePage