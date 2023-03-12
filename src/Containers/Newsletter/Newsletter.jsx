import { useInView } from 'react-intersection-observer';

import './Newsletter.css';


export default function Newsletter() {
  const { ref: myRef, inView: isElementVisible } = useInView();
  
  return (
    <section ref={myRef} className={`news-letter box-shadow ${isElementVisible ? 'move-up' : ''}`}>
      <div className='letter-section-1'>
        <h2 className=''>
          Subscribe to our <span className='blue-gradient'>Newsletter</span>
        </h2>
        <p>Subscribe today for our exclusive offers, latest news and updates about health care programs.</p>
      </div>
      <div className='letter-section-2'>
        <input type="email" placeholder='Enter Your Email Address' />
        <button className='letter-button'>
          Subscribe
        </button>
      </div>
    </section>
  )
}