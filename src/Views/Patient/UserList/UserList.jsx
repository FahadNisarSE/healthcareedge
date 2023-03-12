import { AppointmentCard } from '../../../Components';
import appointments from '../../../Constants/DocotorAppointment'
import './UserList.css';

export default function UserList () {
  return (
    <main className='user-list-main'>
      <div className='user-list-container appoint--doctor--profile'>
        {
          appointments.map(appointment => (
            <AppointmentCard key={appointment.name} {...appointment} />
          ))
        }
      </div>
    </main>
  )
}