import React from 'react';

function DisplayLosingCharacters (props) {
    return props.characters.map(char => {
        const charImg = char.thumbnail.path + '.' + char.thumbnail.extension
        const charName = char.name
        const charId = char.id
        return (
            <img className="losing-char-img" src={charImg} alt={charName} key={charId}/>
        )
    })
}

export default DisplayLosingCharacters