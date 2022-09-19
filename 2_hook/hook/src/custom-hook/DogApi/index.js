import useFetch from './useFetch';

function DogApi() {
    const [image, handleRandomImage] = useFetch();


    return (
        <div>
            <button onClick={handleRandomImage}>Random</button>
            {image && <img src={image} alt="image" style={{ width: 200 }} />}
        </div>
    )
}

export default DogApi