import { useState } from 'react'
// import { useParams } from 'react-router-dom'

import { DetailDoctorProfile, Review, AboutProfile } from '../../../Components';
import { review, about } from '../../../Constants/DoctorProfile';
import './SingleDoctor.css';

export default function SingleDoctor () {
  const [showReview, setShowReview] = useState(false);
  //  const { id } = useParams(); We will need this parameter to get id when implementing network requests

  return (
    <main className='single--doctor--detail'>
      <div id='doctor-box'>
        <DetailDoctorProfile />
      </div>
      <div className='single-doctor-profiles'>
        <div className={`single-profile-about-us ${(!showReview) ? 'blue-gradient visible' : ''}`} onClick={() => setShowReview(false)}>
          About me
        </div>
        <div className={`single-profile-reviews ${(showReview) ? 'blue-gradient visible' : ''}`} onClick={() => setShowReview(true)}>
          Reviews
        </div>
      </div>
      <div>
        {
          showReview ? (
            review.map(item => (
              <Review key={item.name} {...item} />
            ))
          ) : (
            <AboutProfile about={about} />
          )
        }
      </div>
    </main>
  )
}