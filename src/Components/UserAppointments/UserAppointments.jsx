import './UserAppointments.css';

const statusfun = (status) => {
  if (status === 'confirmed') {
    return 'green'
  } else if (status === 'cancelled') {
    return 'red'
  } else if (status === 'pending') {
    return 'yellow'
  } else if (status === 'completed') {
    return 'blue'
  }
}

const UserAppointments = ({ appointments }) => (
  <div className='profile-user-appointments'>
    <div className='profile-user-appointments-heading'>
      <h4 className='table-heading'>Doctor Info</h4>
      <h4 className='table-heading'>Appt Date</h4>
      <h4 className='table-heading'>Booking Date</h4>
      <h4 className='table-heading'>Amount</h4>
      <h4 className='table-heading'>Follow UP</h4>
      <h4 className='table-heading'>Status</h4>
    </div>
    <div className='profile-user-appointments-value-box'>
      {
        appointments.map((appointment, index) => (
          <div className='profile-user-appointments-value' key={appointment.name + index}>
            <div id='profile-user-appointment-doctor' className='info-column'>
              <img src={appointment.image} alt={appointment.name} />
              <div className='profile-user-appointment-doctor-info'>
                <h6>{appointment.name}</h6>
                <p>{appointment.sepciality}</p>
              </div>
            </div>
            <div className='info-column appointment-date'>
              <p className='info-value'>{appointment.date} <span className='highlight-date'>{appointment.time}</span> </p>
            </div>
            <div className='info-column'>
              <p className='info-value'>{appointment.bookingDate}</p>
            </div>
            <div className='info-column'>
              <p className='info-value'>$ {appointment.amount}</p>
            </div>
            <div className='info-column'>
              <p className='info-value'>{appointment.followUp}</p>
            </div>
            <div className='info-column status-button'>
              <p className={`${statusfun(appointment.status)}`}>{appointment.status} </p>
            </div>
          </div>
        ))
      }
    </div>
  </div>
)

export default UserAppointments