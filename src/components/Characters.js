import React from 'react';
import useFetch from '../hooks/useFetch'
import DisplayCharacter from './DisplayCharacter'

function Characters() {

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    let randLetterOne = alphabet[Math.floor(Math.random() * alphabet.length)]
    let randLetterTwo = alphabet[Math.floor(Math.random() * alphabet.length)]

    const [charactersA] = useFetch(randLetterOne)
    const [charactersB] = useFetch(randLetterTwo)

    let charOne = charactersA[Math.floor(Math.random() * charactersA.length)]
    let charTwo = charactersB[Math.floor(Math.random() * charactersB.length)]

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

    return (
        <div>
            <button onClick={() => showCharacters()}>Characters</button>
            <button onClick={() => showSingleCharacters()}>Single Characters</button>
            <DisplayCharacter character={charOne} />
            <DisplayCharacter character={charTwo} />
        </div>
    )
}

export default Characters