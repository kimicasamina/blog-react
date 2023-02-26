import {React, useEffect, useState} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
          fetch(url)
          .then(res => {
            if (res.ok){
              return res.json()
            } else {
              throw new Error('Failed to fetch data...')
            }
          })
          .then(data => {
            setIsLoading(false)
            setData(data)
          })
          .catch(err => {
            setError(err.message)
          })
        }, 1000)
    }, [url])
    
    return {data, error, isLoading}

}

export default useFetch