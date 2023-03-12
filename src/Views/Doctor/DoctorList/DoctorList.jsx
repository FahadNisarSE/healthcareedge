import { useLocation } from 'react-router-dom';

import { Filter, DetailDoctorProfile } from '../../../Components';
import './DoctorList.css';

export default function DoctorList() {
  const { state } = useLocation();
  console.log(state);

  return (
    <main className='DoctorList_container'>
      <div className='DoctorList--filter'>
        <Filter />
      </div>
      <div className='doctorList-card-container'>
        <DetailDoctorProfile />
        <DetailDoctorProfile />
        <DetailDoctorProfile />
        <DetailDoctorProfile />
        <div className="Load--More--Button">
          <button className='main-bg'>Load More</button>
        </div>
      </div>
    </main>
  )
}