import React, { useState } from 'react'
import md5 from 'md5'


function useFetch () {
    const publicKey = process.env.REACT_APP_API_KEY
    const privateKey = process.env.REACT_APP_API_PRIVATE_KEY
    const url = "https://gateway.marvel.com/"
    const charsUrl = url + 'v1/public/characters'
}

export default useFetch