import {useState} from 'react'

const images = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];

function App() {
    const [current, setCurrent] = useState(0);
    const handlePrevious = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1)
    }

    const handleNext = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1)
    }

    return (
        <>
            <button onClick={handlePrevious}>«</button>
            <button onClick={handleNext}>»</button>
            {images.map((value, index) => {
                if(current === index){
                    return <div key={value}>
                        <img src={value} width="500px" />
                    </div>
                }
            })}
        </>
    )
}

export default App
