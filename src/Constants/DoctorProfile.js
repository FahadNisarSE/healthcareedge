import Review1 from '../Assets/Review1.jpg';
import Review2 from '../Assets/Review2.jpg';

const DoctorInfo = {
    id: 1,
    name: 'Dr. Darren Elder',
    qualification: 'BDS, MDS-Oral and Maxillofaical Surgery',
    speciality: 'Dentist',
    stars: 4,
    totalReviews: 35,
    address: 'Newyork, USA',
    tags: ['Dental Filling', 'Teeth Whitneing'],
    rating: 99,
    feedBack: 25,
    feePerHour: 100
}

export default DoctorInfo;

export const review = [
    {
        name: 'Richard Wilson',
        image: Review1,
        date: '12-Dec-2022',
        stars: 4,
        good: true,
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus',
    },
    {
        name: 'Charlene Reed',
        image: Review2,
        date: '1-November-2022',
        stars: 3,
        good: false,
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus',
    }
]

export const about = {
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    education: [
        {
            institueName: 'American Dental Medical University',
            degree: 'BDS',
            duration: '1998-2003'
        },
        {
            institueName: 'American Dental Medical University',
            degree: 'MDS',
            duration: '2003-2005'
        }
    ],
    works: [
        {
            jobName: 'Glowing Smiles Family Dental Clinic',
            duration: '2010 - Present (5 years)'
        },
        {
            jobName: 'Glowing Smiles Family Dental Clinic',
            duration: '2010 - Present (5 years)'
        },
        {
            jobName: 'Glowing Smiles Family Dental Clinic',
            duration: '2010 - Present (5 years)'
        },
    ],
    awards: [
        {
            date: 'July 2019',
            name: 'Humanitarian Award',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
        },
        {
            date: 'March 2011',
            name: 'Certificate For Internation Volunteer Service',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
        },
    ],
    services: ['Tooth cleaning', 'Root Canal Therapy', 'Implants', 'Composite Bonding', 'Fissure Sealants', 'Surgical Extraction'],
    specializations: ['Children Care', 'Dental Care', 'Oral Surgery', 'Orthodontist', 'Periodontist', 'Prosthodontics'
    ]
}