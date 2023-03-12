import { useState } from 'react';
import { ImLocation } from 'react-icons/im';

import { UserAppointments, UserBilling, UserMedicalRecords, UserPrescriptions } from '../../../Components';
import user from '../../../Assets/UserProfile';
import './UserProfile.css';

const initialNavbar = {
  appointment: false,
  prescription: false,
  medicalRecords: false,
  billing: false
}

const UserProfile = () => {
  const [nav, setNav] = useState({
    appointment: true,
    prescription: false,
    medicalRecords: false,
    billing: false
  })

  return (
    <main id='user--profile--container'>
      <div className='user-profile-info box-shadow'>
        <div className='user-profile-info-1'>
          <img src={user.image} alt={user.name} className='profile--image' />
          <h1 className='profile-heading blue-gradient'>{user.name}</h1>
          <h5 className='profile-patientID'> <span>Patient ID: </span> {user.patientID}</h5>
          <p className='profile-address'> <ImLocation className='profile-icon' /> {user.address}</p>
        </div>
        <div className='user-profile-info-2'>
          <div className='user-profile-subInfo'>
            <h5>Phone: </h5>
            <p>{user.phone}</p>
          </div>
          <div className='user-profile-subInfo'>
            <h5>Age: </h5>
            <p>{user.age} Years</p>
          </div>
          <div className='user-profile-subInfo'>
            <h5>Blood Group: </h5>
            <p>{user.bloodGroup}</p>
          </div>
        </div>
      </div>
      <div className='user-last-bookings box-shadow'>
        <h2 className='blue-gradient'>Last Booking</h2>
        {
          user.lastBooking.map((booking, index) => (
            <div className='user-last-booking' key={booking.name + 1}>
              <img src={booking.image} alt={booking.name} />
              <div className='user-last-booking-info'>
                <h5>{booking.name}</h5>
                <p>{booking.sepciality}</p>
                <p>{booking.Date}</p>
              </div>
            </div>
          ))
        }
      </div>
      <div className='user-profile-detail'>
        <div className='user-profile-navbar'>
          <h6 onClick={() => setNav({ ...initialNavbar, appointment: true })} className={`${nav.appointment ? 'current' : ''}`}>Appointments</h6>
          <h6 onClick={() => setNav({ ...initialNavbar, prescription: true })} className={`${nav.prescription ? 'current' : ''}`}>Presciptions</h6>
          <h6 onClick={() => setNav({ ...initialNavbar, medicalRecords: true })} className={`${nav.medicalRecords ? 'current' : ''}`}>Medical Records</h6>
          <h6 onClick={() => setNav({ ...initialNavbar, billing: true })} className={`${nav.billing ? 'current' : ''}`}>Billing</h6>
        </div>
        <div>
          {nav.appointment && <UserAppointments appointments={user.appointments} />}
          {nav.billing && <UserBilling />}
          {nav.medicalRecords && <UserMedicalRecords medicalRecords={user.medicalRecords} />}
          {nav.prescription && <UserPrescriptions prescriptions={user.prescription} />}
        </div>
      </div>
    </main>
  )
}

export default UserProfile