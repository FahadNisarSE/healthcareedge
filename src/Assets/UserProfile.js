import Doctor from './doctor-2.jpg';
import Doctor2 from './doctor-3.jpg';
import Patient from './appointment_5.jpg';

const user = {
    name: 'Mikasa Ackreman',
    image: Patient,
    patientID: 'PT0016',
    address: 'Fyoki, Japan',
    phone: '+1 952 001 8562',
    age: '38',
    gender: 'male',
    bloodGroup: 'AB+',
    lastBooking: [
        {
            name: 'Dr. Mary Nielson',
            image: Doctor,
            sepciality: 'Medicine in Neurology',
            Date: '14 Nov 2050 5:00 PM'
        },
        {
            name: 'Dr. Mary Nielson',
            image: Doctor,
            sepciality: 'Medicine in Neurology',
            Date: '14 Nov 2050 5:00 PM'
        }
    ],
    appointments: [
        {
            name: 'Dr. Darren Elder',
            image: Doctor,
            sepciality: 'Dental',
            date: '14 Nov 2019',
            time: '10: 00 AM',
            bookingDate: '12 Nov 2019',
            amount: '160',
            followUp: '16 Nov 2019',
            status: 'confirmed'
        },
        {
            name: 'Dr. Darren Elder',
            image: Doctor,
            sepciality: 'Dental',
            date: '14 Nov 2019',
            time: '10: 00 AM',
            bookingDate: '12 Nov 2019',
            amount: '160',
            followUp: '16 Nov 2019',
            status: 'cancelled'
        },
        {
            name: 'Dr. Darren Elder',
            image: Doctor,
            sepciality: 'Dental',
            date: '14 Nov 2019',
            time: '10: 00 AM',
            bookingDate: '12 Nov 2019',
            amount: '160',
            followUp: '16 Nov 2019',
            status: 'pending'
        },
        {
            name: 'Dr. Darren Elder',
            image: Doctor,
            sepciality: 'Dental',
            date: '14 Nov 2019',
            time: '10: 00 AM',
            bookingDate: '12 Nov 2019',
            amount: '160',
            followUp: '16 Nov 2019',
            status: 'completed'
        },
    ],
    prescription: [
        {
            date: '14 Nov 2019',
            name: 'Dr. Ruby Perrin',
            image: Doctor,
            sepciality: 'Dental',
        },
        {
            date: '14 Nov 2019',
            name: 'Dr. Ruby Perrin',
            image: Doctor,
            sepciality: 'Dental',
        },
        {
            date: '14 Nov 2019',
            name: 'Dr. Ruby Perrin',
            image: Doctor,
            sepciality: 'Dental',
        },
        {
            date: '14 Nov 2019',
            name: 'Dr. Ruby Perrin',
            image: Doctor,
            sepciality: 'Dental',
        }
    ],
    medicalRecords: [
        {
            name: 'Dr. Ruby Perrin',
            sepciality: 'Dental',
            image: Doctor,
            id: '#MR-0010',
            date: '14 Nov 2019',
            description: 'Dental Filling',
        },
        {
            name: 'Dr. Ruby Perrin',
            sepciality: 'Dental',
            image: Doctor,
            id: '#MR-0010',
            date: '14 Nov 2019',
            description: 'Dental Filling',
        },
        {
            name: 'Dr. Ruby Perrin',
            sepciality: 'Dental',
            image: Doctor,
            id: '#MR-0010',
            date: '14 Nov 2019',
            description: 'Dental Filling',
        },
        {
            name: 'Dr. Ruby Perrin',
            sepciality: 'Dental',
            image: Doctor,
            id: '#MR-0010',
            date: '14 Nov 2019',
            description: 'Dental Filling',
        },
    ],
    invoiceNumber: [
        {
            invoiceNo: '#INV-0010',
            name: 'Ruby Perrin',
            sepciality: 'Dental',
            image: Doctor2,
            amount: 450,
            paidOn: '14 Nov 2019'
        }
    ]
}

export default user; 