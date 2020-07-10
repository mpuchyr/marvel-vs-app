import React, { useState } from 'react'
import md5 from 'md5'


function useFetch (letter) {
    const publicKey = process.env.REACT_APP_API_KEY
    const privateKey = process.env.REACT_APP_API_PRIVATE_KEY
    const url = "https://gateway.marvel.com/"
    const charsUrl = url + 'v1/public/characters'

    let timeStamp = Date.now()
    let hash = md5(timeStamp + privateKey + publicKey)
    let fullUrl = charsUrl + `?nameStartsWith=${letter}&limit=100&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`

    fetch(fullUrl)
    .then(res => {
    if (res.status !== 200) {
        throw new Error(res.status.text)
    } else {
        return res.json()
    }
    })
    .then(info => {
        console.log(info)
        this.setState({
            characters: info.data.results
        })
    })
    .catch(err => console.log(err))
}

export default useFetch