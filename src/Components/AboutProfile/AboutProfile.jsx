import { AiOutlineRight } from 'react-icons/ai';

import './AboutProfile.css';

const AboutProfile = ({ about }) => (
    <div className='profile-about-box'>
        <div>
            <h3 className='profile-headings blue-gradient'>About me</h3>
            <p className='profile-about-body'>{about.body}</p>
        </div>
        <div>
            <h3 className='profile-headings blue-gradient'>Education</h3>
            <div className='profile-box-1'>
                {
                    about.education.map(edu => (
                        <div key={edu.degree}>
                            <div className='circle' />

                            <h4 className='profile-sub-headings'>{edu.institueName}</h4>
                            <span className='profile-about-body'>{edu.degree}</span>
                            <span className='profile-about-body'>{edu.duration}</span>
                        </div>
                    ))
                }
            </div>
        </div>
        <div>
            <h3 className='profile-headings blue-gradient'>Work & Experience</h3>
            <div className='profile-box-1'>
                {
                    about.works.map(work => (
                        <div key={work.jobName}>
                            <div className='circle' />

                            <h4 className='profile-sub-headings'>{work.jobName}</h4>
                            <span className='profile-about-body'>{work.duration}</span>
                        </div>
                    ))
                }
            </div>
        </div>
        <div>
            <h3 className='profile-headings blue-gradient'>Work & Experience</h3>
            <div className='profile-box-1'>
                {
                    about.awards.map(award => (
                        <div key={award.name}>
                            <div className='circle' />

                            <h4 className='profile-sub-headings'>{award.date}</h4>
                            <h4 className='profile-sub-headings'>{award.name}</h4>
                            <span className='profile-about-body'>{award.desc}</span>
                        </div>
                    ))
                }
            </div>
        </div>
        <div>
            <h3 className='profile-headings blue-gradient'>Services</h3>
            <div className='speiclization--box'>
                {
                    about.services.map(service => (
                        <div className='profile-about-body speiclization' key={service}>
                            <AiOutlineRight /> <p>{service}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        <div>
            <h3 className='profile-headings blue-gradient'>Specilaization</h3>
            <div className='speiclization--box'>
                {
                    about.specializations.map(specialization => (
                        <div className='profile-about-body speiclization' key={specialization}>
                            <AiOutlineRight /> <p>{specialization}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
)


export default AboutProfile