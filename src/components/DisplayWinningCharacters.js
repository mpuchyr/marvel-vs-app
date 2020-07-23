import React from 'react';

function DisplayWinningCharacters(props) {
    return props.characters.map(char => {
        const charImg = char.thumbnail.path + '.' + char.thumbnail.extension
        const charName = char.name
        const charId = char.id
        return (
            <img src={charImg} alt={charName} key={charId}/>
        )
    })
}

export default DisplayWinningCharacters