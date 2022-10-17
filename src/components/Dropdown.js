import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Dropdown.scss';
import { MenuItems } from './MenuItems'

export default function Dropdown() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
      
    return (
        <>
        <ul
            onClick={handleClick}
            className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
              {MenuItems.map((item, index) => {
                return (
                  <li className='dropdown_links' key={index}>
                    <Link
                      className={item.cName}
                      to={item.path}
                      onClick={() => setClick(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </>
      );
}