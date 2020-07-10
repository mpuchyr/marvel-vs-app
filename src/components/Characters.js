import React, { useState, useEffect } from 'react';
import md5 from 'md5';
import useFetch from '../hooks/useFetch'

function Characters() {
    const [characters] = useFetch('a')
    // const publicKey = process.env.REACT_APP_API_KEY
    // const privateKey = process.env.REACT_APP_API_PRIVATE_KEY
    // const url = "https://gateway.marvel.com/"
    // const charsUrl = url + 'v1/public/characters'

    // let letter = 'a'
    // let timeStamp = Date.now()
    // let hash = md5(timeStamp + privateKey + publicKey)
    // let fullUrl = charsUrl + `?nameStartsWith=${letter}&limit=100&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
 

    // const [characters, setCharacters] = useState([])

    // async function fetchData() {
    //     const res = await fetch(fullUrl)
    //     res
    //         .json()
    //         .then(res => setCharacters(res))
    //         .catch(err => console.log(err))
              
    // }

    // useEffect(() => {
    //     fetchData()
    // }, [])

    function showCharacters () {
        console.log(JSON.stringify(characters))
    }

    return (
        <div>
            <button onClick={() => showCharacters()}>Characters</button>
        </div>
    )
}

export default Characters