import React from 'react';

function DisplayWinningCharacters(props) {
    return props.characters.map(char => {
        const charImg = char.thumbnail.path + '.' + char.thumbnail.extension
        const charName = char.name
        const charId = char.id
        return (
            <div className="winning-char">
                <img className="winning-char-img" src={charImg} alt={charName} key={charId}/>
            </div>
            
        )
    })
}

export default DisplayWinningCharacters