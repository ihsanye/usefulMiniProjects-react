import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './styles.css'

function StarRating({ noOfStars = 5 }) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex)
    }
    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex)
    }
    function handleMouseLeave(getCurrentIndex) {
        setHover(rating)
    }

    return (
        <div className='star-rating'>
            {
                [...Array(noOfStars)].map((_, index) => {
                    index += 1;
                    return (
                        <FaStar
                            className={index <= (hover || rating) ? 'active' : 'inactive'}
                            key={index}
                            onClick={() => handleClick(index)}
                            onMouseMove={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave()}
                            size={50}
                        />)
                })
            }
        </div>
    )
}

export default StarRating