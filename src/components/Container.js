import React, {useState} from 'react'

const Container = () => {
    const [clicked, setClicked] = useState(false)
    return (
        <>
        <h1>Container</h1>
        <button onClick={() => setClicked(true)}>Click Me!</button>
        <p>{clicked ? 'Button Clicked!' : ''}</p>
        </>
    )
}

export default Container;