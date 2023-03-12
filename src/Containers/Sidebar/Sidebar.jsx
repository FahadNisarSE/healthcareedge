import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';

import HealthCare from '../../Assets/health_care_edge.png';
import useSideBarState from '../../Store/sideBar';
import { Primary, Patient, Doctor, Admin } from '../../Constants/Menus';

import './Sidebar.css';

const Sidebar = () => {
  const { pathname } = useLocation();
  let Navigate = useNavigate();
  const [role] = useState('');
  const [menu, setMenu] = useState([]);
  const toggle = useSideBarState(state => state.toggle)
  const [currentPath, setCurrentPath] = useState(pathname)

  useEffect(() => {
    setCurrentPath(pathname)
  }, [pathname])

  useEffect(() => {
    if (role === 'doctor') {
      setMenu(Doctor);
    } else if (role === 'patient') {
      setMenu(Patient);
    } else if (role === 'admin') {
      setMenu(Admin);
    } else {
      setMenu(Primary);
    }
  }, [role])

  return (
    <section className='section-container'>
      <div className='sidebar--header'>
        <img src={HealthCare} alt='Health Care Edge' className='sidebar--icon' />
        <HiOutlineMenuAlt1 className='menuIcon main-bg' onClick={toggle} />
      </div>
      <div className='sidebar--menu--list'>
        {menu.map((menu, index) => (
          <NavLink className='sidebar--menu--heading' onClick={toggle} to={menu.link} id={`${currentPath === menu.link ? 'current-Link' : ''}`} key={menu.name}>
            <h3><span> 0{index}.</span>{menu.name}</h3>
          </NavLink>
        ))
        }
      </div>
      <button className='sidebar--login--button box-shadow' onClick={() => {Navigate('/signup'); toggle()}}>Login / Signup</button>
    </section>
  )
}

export default Sidebar