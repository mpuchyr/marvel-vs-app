import React from 'react';

function DisplayCharacter(props) {

    if (props.character !== undefined) {
        
        const charImg = props.character.thumbnail.path + '.' + props.character.thumbnail.extension

        return (
            <div className="large-char-img-container">
                <img src={charImg} alt={props.character.name}/>
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