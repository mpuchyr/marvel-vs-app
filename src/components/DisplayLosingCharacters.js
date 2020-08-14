import React from 'react';
import LosingCharacterOverlay from './LosingCharacterOverlay';

function DisplayLosingCharacters (props) {
    return props.characters.map(char => {
        const charImg = char.thumbnail.path + '.' + char.thumbnail.extension
        const charName = char.name
        const charId = char.id
        return (
            <>
                <LosingCharacterOverlay />
                <img className="losing-char-img" src={charImg} alt={charName} key={charId}/>  
            </>
            
        )
    })
}

export default DisplayLosingCharacters