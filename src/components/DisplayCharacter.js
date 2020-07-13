import React from 'react';

function DisplayCharacter(props) {

    if (props.character !== undefined) {
        

        return (
            <div>
                <h1>{props.character.name}</h1>
            </div>
        )
    } else {
        return(
            <div>Please Wait</div>
        )
    }
    }


export default DisplayCharacter