import RatingComponent from '../RatingComponent/RatingComponent'
import { AiFillLike, AiFillDislike } from 'react-icons/ai';

import './Review.css';

const Review = ({ name, image, date, stars, good, body }) => {
    return (
        <div className='review-box'>
            <div className='reviewer-image-box'>
                <img src={image} alt={name}  className='reviewer-image' />
            </div>
            <div className='review-content'>
                <div className='reviewer-content-1'>
                    <div>
                        <h3 className='reviewer-name blue-gradient'>{name}</h3>
                        <p className='review-date'>Reviewed on: {date}</p>
                    </div>
                    <div>
                        <RatingComponent rating={stars} />
                    </div>
                </div>
                <div className='reviewer-content-2'>
                    {
                        good ? (
                            <div className='positive-recommendation'>
                                <AiFillLike /><span className='recomm'> I recommend the doctor. </span>
                            </div>
                        ) : (
                            <div className='negative-recommendation'>
                                <AiFillDislike /> <span className='recomm'>I don't recommend the doctor.</span>
                            </div>
                        )
                    }
                    <p className='review-body'>
                        {body}
                    </p>
                </div>
                <div className='reviewer-content-3'>
                    <p className='review-body'>Recommend?</p>
                    <div className='recommend-review-box'>
                        <button className='Like-review'><AiFillLike /> Yes</button>
                        <button className='Dislike-review'><AiFillDislike /> No</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review