import { useState, useEffect } from 'react';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { NavLink, useLocation } from 'react-router-dom';

import HealthCare from '../../Assets/health_care_edge.png';
import useSideBarState from '../../Store/sideBar';
import { Primary, Doctor, Patient, Admin } from '../../Constants/Menus';
import './Navbar.css';

const Navbar = () => {
  const { pathname } = useLocation();

  const [role] = useState('');
  const [menu, setMenu] = useState([]);
  const toggle = useSideBarState(state => state.toggle);
  const [currentpath, setCurrentPath] = useState(pathname);

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

  console.log(currentpath)

  return (
    <nav className='nav--container'>
      <HiOutlineMenuAlt1 onClick={toggle} className='menuIcon main-bg' />
      <img src={HealthCare} alt='health care edge' className='navbar--icon' />
      <div className='nav--menu--list' >
        {menu?.map((menu, index) => (
          <NavLink className='menu--heading' id={`${(currentpath === menu.link)? 'current-link' : ''}`} key={menu.name} to={menu.link}>
            <h3> <span> 0{index}.</span>{menu.name}</h3>
          </NavLink>
        ))}
      </div>
      <NavLink to={'/signup'}>
        <button className='nav--login--button main-bg'>Join for free</button>
      </NavLink>
    </nav>
  )
}

export default Navbar