import React from 'react'
import { AiFillStar } from 'react-icons/ai';

const RatingComponent = ({ rating }) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        stars.push(
            <AiFillStar
                className='rating'
                style={{ color: `${i < rating ? '#FFFF00' : '#757575'}` }} />
        )
    }

    return stars
}

export default RatingComponent