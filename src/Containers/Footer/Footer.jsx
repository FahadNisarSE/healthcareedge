import { BsApple } from 'react-icons/bs';
import { AiFillAndroid, AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Patient, Doctor, Admin, Others } from '../../Constants/Menus';
import './Footer.css';

const Footer = () => {

  const role1 = ['Patient', 'Doctor', 'Admin', 'Others'];
  const role2 = [Patient, Doctor, Admin, Others];

  return (
    <footer className="footer--container">
      <div className="footer--links--container">
        {
          role1.map((Role, index) => (
            <div key={Role} className="footer--link">
              <div className='link--name'>
                <h5>{Role}</h5>
              </div>
              {
                role2[index].map(item => (
                  <Link key={item.name} to={item.link} className='origional--link'>
                    <h6>{item.name}</h6>
                  </Link>
                ))
              }
            </div>
          ))
        }
      </div>
      <div className="footer--social-media">
        <div className="footer--social-media-icon">
          <p>Follow Us</p>
          <FaFacebookF className='social-media-icon'/>
          <AiOutlineTwitter className='social-media-icon'/>
          <FaLinkedinIn className='social-media-icon'/>
          <AiFillYoutube className='social-media-icon'/>
          <AiFillInstagram className='social-media-icon'/>
        </div>
        <div className="footer--social-media-icon">
          <p>Mobile App</p>
          <BsApple className='social-media-icon'/>
          <AiFillAndroid className='social-media-icon'/>
        </div>
      </div>
      <div className="footer--copyright">
        © 2022 Health Care Edge®
      </div>
    </footer >
  )
}

export default Footer