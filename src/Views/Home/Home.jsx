import { useNavigate } from 'react-router-dom';

import { BookDoctor, Features, Services, Newsletter, CAT } from '../../Containers';
import BannerSearch from '../../Components/BannerSearch/BannerSearch';
import './Home.css';

export default function Home() {
  let Navigate = useNavigate();

  return (
    <main>
      <div className='hero-container'>
        <div className='hero-info-section'>
          <h1 className='hero-heading blue-gradient'>Health Care Edge</h1>
          <h2 className='hero-subheading'>Search Doctors, and Make Appointments</h2>
          <p className='hero-description'>People who are more perfectionist are most likely to be depressed, Because they stress themselves out so much. Discover the best doctors, clinic and hospital in the city nearest to You.</p>
          <button className='hero-button main-bg' onClick={() => Navigate('signup')} >Sign up now</button>
        </div>
        <div className='home-banner-search'>
          <BannerSearch />
        </div>
      </div>
      <BookDoctor />
      <Features />
      <CAT />
      <Services />
      <Newsletter />
    </main>
  )
}