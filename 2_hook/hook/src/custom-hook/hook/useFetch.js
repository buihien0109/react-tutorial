import { useState, useEffect } from "react";

const useFetch = () => {
    const [image, setImage] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        fetch(`https://dog.ceo/api/breeds/image/random`, {
            signal: controller.signal
        })
            .then(res => res.json())
            .then(data => setImage(data.message))
            .catch(err => console.log(err))

        return () => {
            controller.abort();
        }
    }, [])

    const handleRandomImage = () => {
        fetch(`https://dog.ceo/api/breeds/image/random`)
            .then(res => res.json())
            .then(data => setImage(data.message))
            .catch(err => console.log(err))
    }

    return [image, handleRandomImage];
}

export default useFetch;