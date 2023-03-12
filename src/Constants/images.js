import Urology from '../Assets/Urology.png';
import Cardiologist from '../Assets/cardiologist.png';
import Neurology from '../Assets/Neurology.png'
import Orthopedic from '../Assets/Orthopedic.png'
import Dentist from '../Assets/Dentist.png'

import test from '../Assets/test.svg';
import doctor from '../Assets/doctor.svg';
import tablet from '../Assets/tablets.svg';

import profile_1 from '../Assets/doctor-profile-1.jpg';
import profile_2 from '../Assets/doctor-profile-2.jpg';
import profile_3 from '../Assets/doctor-profile-3.jpg';
import profile_4 from '../Assets/doctor-profile-4.jpg';

import Review1 from '../Assets/Review1.jpg';
import Review2 from '../Assets/Review2.jpg';
import appointment_3 from '../Assets/appointment_3.jpg';
import appointment_4 from '../Assets/appointment_4.jpg';
import appointment_5 from '../Assets/appointment_5.jpg';

const features = [
    { image: Urology, name: 'Urology' },
    { image: Cardiologist, name: 'Cardiologist' },
    { image: Neurology, name: 'Neurology' },
    { image: Orthopedic, name: 'Orthopedic' },
    { image: Dentist, name: 'Dentist' },
];

export default features;

export const services = [
    { image: doctor, name: 'Visit a Doctor', button: 'Book Now', info: 'We hire the best specialists to deliver top-notch diagnostic services for you.', id: 'blue' },
    { image: tablet, name: 'Find a Pharmacy', button: 'Coming Soon', info: 'We provide the a wide range of medical services, so every person could have the opportunity.', id: 'green' },
    { image: test, name: 'Find a Labortary', button: 'Coming Soon', info: 'We use the first-class medical equipment for timely diagnostics of various diseases timely diagnostics of various diseases diseases timely diagnostics of various diseases.', id:'red' },
]

export const profileImage = [
    { name: 'great', image: profile_1 },
    { name: 'awesome', image: profile_2 },
    { name: 'vowww', image: profile_3 },
    { name: 'magnificent', image: profile_4 },
]

export const appointmentImages = [
    Review1,
    Review2,
    appointment_3,
    appointment_4,
    appointment_5
]