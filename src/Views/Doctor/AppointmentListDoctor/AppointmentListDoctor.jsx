import { AppointmentCard, DetailDoctorProfile } from '../../../Components';
import appointments from '../../../Constants/DocotorAppointment';
import './AppointmentListDoctor.css';

export default function AppointmentListPage() {
  return (
    <main className='appointmentList--main'>
      <div className='appoint--doctor--profile'>
        <DetailDoctorProfile />
      </div>
      <div className='appointmentList--container'>
        {
          appointments.map(appointment => (
            <AppointmentCard key={appointment.name} {...appointment} />
          ))
        }
      </div>
    </main>
  )
}