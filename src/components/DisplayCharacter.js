import React from 'react';

function DisplayCharacter(props) {

    return (
        <div>
            <h1>{props.character.name}</h1>
        </div>
    )
}

export default DisplayCharacter