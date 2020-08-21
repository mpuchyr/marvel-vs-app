import React, {useState} from 'react';
import useFetch from '../hooks/useFetch'
import DisplayCharacter from '../components/DisplayCharacter'
import DisplayWinningCharacters from '../components/DisplayWinningCharacters'
import DisplayLosingCharacters from '../components/DisplayLosingCharacters'

function Characters() {
    const [winningChars, setWinningChars] = useState([])
    const [losingChars, setLosingChars] = useState([])
    
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let badImg = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"

    let randLetterOne = alphabet[Math.floor(Math.random() * alphabet.length)]
    let randLetterTwo = alphabet[Math.floor(Math.random() * alphabet.length)]

    const [charactersA] = useFetch(randLetterOne)
    const [charactersB] = useFetch(randLetterTwo)

    let charOne = charactersA[Math.floor(Math.random() * charactersA.length)]
    if (charOne) {
        while (charOne.thumbnail.path === badImg || winningChars.includes(charOne) || losingChars.includes(charOne)) {
            charOne = charactersA[Math.floor(Math.random() * charactersA.length)]
        }
    }


    let charTwo = charactersB[Math.floor(Math.random() * charactersB.length)]
    if (charTwo) {
        while (charTwo.thumbnail.path === badImg || winningChars.includes(charTwo) || losingChars.includes(charTwo)) {
            charTwo = charactersB[Math.floor(Math.random() * charactersB.length)]
        }
    }

    function showCharacters () {
        console.log(charactersA)
        console.log(charactersA.length)
        console.log(charactersB)
        console.log(charactersB.length)
    }

    function showSingleCharacters () {
        console.log(charOne)
        console.log(charTwo)
    }

    function addWinningCharacter (char) {
        if (winningChars.includes(char) !== true) {
            setWinningChars([...winningChars, char])
        } else {
            setWinningChars([...winningChars])
        }

        console.log(winningChars)
    }

    function addLosingCharacter (char) {
        if (losingChars.includes(char) !== true) {
            setLosingChars([...losingChars, char])
        } else {
            setLosingChars([...losingChars])
        }
        console.log(losingChars)
    }

    return (
        <div className="main">
            <h2>Winning Team</h2>
            <div className="winning-chars">
                <DisplayWinningCharacters characters={winningChars} />
            </div>
            {/* <button onClick={() => showCharacters()}>Characters</button>
                <button onClick={() => showSingleCharacters()}>Single Characters</button> */}
            <div className="char-main">
                <div id="char-one" onClick={() => {
                    addWinningCharacter(charOne)
                    addLosingCharacter(charTwo)    
                }}>
                    <DisplayCharacter character={charOne} />
                </div>
                <div id="char-two" onClick={() => {
                    addWinningCharacter(charTwo)
                    addLosingCharacter(charOne)
                }}>
                    <DisplayCharacter character={charTwo} />
                </div>
            </div>

            <h2>Losing Team</h2>
            <div className="losing-chars">
                <DisplayLosingCharacters characters={losingChars} />
            </div>
            

        </div>
    )
}

export default Characters