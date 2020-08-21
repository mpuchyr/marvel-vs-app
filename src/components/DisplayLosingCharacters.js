import React from 'react';


function DisplayLosingCharacters (props) {
    return props.characters.map(char => {
        const charImg = char.thumbnail.path + '.' + char.thumbnail.extension
        const charName = char.name
        const charId = char.id
        return (
            <div className="losing-char">
                {/* <span className="losing-char-span">X</span> */}
                <div className="lineOne"></div>
                <div className="lineTwo"></div>
                <img className="losing-char-img" src={charImg} alt={charName} key={charId}/>
                 
            </div>
            
        )
    })
}

export default DisplayLosingCharacters