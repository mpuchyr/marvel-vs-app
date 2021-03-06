import { useState, useEffect } from 'react';
import md5 from 'md5';


function useFetch (letter) {
    const publicKey = process.env.REACT_APP_API_KEY
    const privateKey = process.env.REACT_APP_API_PRIVATE_KEY
    const url = "https://gateway.marvel.com/"
    const charsUrl = url + 'v1/public/characters'

    let timeStamp = Date.now()
    let hash = md5(timeStamp + privateKey + publicKey)
    let fullUrl = charsUrl + `?nameStartsWith=${letter}&limit=100&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`

    const [characters, setCharacters] = useState([])

    async function fetchData() {
        const res = await fetch(fullUrl)
        res
            .json()
            .then(res => setCharacters(res.data.results))
            .catch(err => console.log(err))
              
    }

    useEffect(() => {
        fetchData()
    }, [])


    return [characters]
}

export default useFetch