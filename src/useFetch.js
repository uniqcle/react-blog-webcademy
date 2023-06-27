import { useState, useEffect } from 'react'

const useFetch = (url, updateFlag) => {

    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {

        const abortControl = new AbortController();

        //setTimeout(() => {

        fetch(url, { signal: abortControl.signal }).then(
            res => {

                if (res.ok !== true) {
                    throw Error('Данные не загружены')
                }

                return res.json()

            }).then(data => {

                setData(data)
                setLoading(false)
                setError(null)

            }).catch((err) => {

                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    setError(err.message)
                    setLoading(false)
                }


            })


        //}, 1000)


        // вовзращаем стрелоч. ф-ию. Она будет выполняться, 
        // когда компонент размонтируется, где вызывается useEffect. 
        return () => {
            //console.log('clean up')
            abortControl.abort()
        }

    }, [updateFlag])

    return { data, isLoading, error }
}

export default useFetch; 