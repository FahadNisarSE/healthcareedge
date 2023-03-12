import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi';

import './MenuList.css'

const MenuList = ({ menuName, menuOptions, active, context }) => {
    const [show, setShow] = useState(false);
    return (
        <menu className={`menu-container ${context === 'sidebar' ? ' sidebar--menu--container' : ''}`}>
            <h3
                onClick={() => setShow(show => !show)}
                className={`menu--heading ${active ? ' active' : ''}`}
            >
                {menuName}
                <FiChevronDown className={`${show ? 'rotate' : ''}`} />
            </h3>
            {show && (
                <div className={`${context === 'sidebar' ? 'sidebar--menu--list--container' : 'menu-list-container'}`}>
                    <h4 className='menu--subheading'>{menuName}</h4>
                    {(menuOptions.map((option, index) => (
                        <p
                            key={option}
                            className='menu--list'
                            onClick={() => setShow(!show)}
                        >{option}</p>
                    )))}
                </div>
            )}
        </menu>
    )
}

export default MenuList