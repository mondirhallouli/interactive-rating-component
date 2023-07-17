import { useState } from 'react'
import './App.css'
import RateComponent from './components/RateComponent'
import ThanksComponent from './components/ThanksComponent'

function App() {
    const [rate, setRate] = useState(null);

    const handleRating = (event) => {
        event.preventDefault()

        const formData = event.target.rating.value
        setRate(formData)
    }

    return (
        <div className='bg-gray-950 w-screen h-screen p-4'>
            {!rate && <RateComponent rateHandler={handleRating} />}
            {rate && <ThanksComponent rate={rate} />}
            <div class="text-center w-76 mx-auto mt-36 text-light-gray text-[15px]">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="https://www.linkedin.com/in/mondir-hallouli" target="_blank">Mondir Hallouli</a>.
            </div>
        </div>
    )
}

export default App
