import React from 'react';


function DisplayLosingCharacters (props) {
    return props.characters.map(char => {
        const charImg = char.thumbnail.path + '.' + char.thumbnail.extension
        const charName = char.name
        const charId = char.id
        return (
            <div className="losing-char">
                <img className="losing-char-img" src={charImg} alt={charName} key={charId}/>
                 
            </div>
            
        )
    })
}

export default DisplayLosingCharacters