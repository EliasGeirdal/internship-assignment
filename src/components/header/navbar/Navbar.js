import React, {useState} from 'react';
import './Navbar.css';
import data from './data.json';
import NavItem from "./navitem/NavItem";

const Navbar = () => {
    const [active, setActive] = useState(false);

    function activateNavbar() {
        setActive(prev => !prev);
    }

    function handleBurgerbarClickEvent() {
        const nav = document.querySelector('.navbar-container');
        nav.style.display = active ? 'none' : 'block';
    }

    function renderNavbar(element, index) {
        if (element == null) {
            return;
        } else if (element.children != null) {
            index = index + 1;
            if (element.name == 'root') {
                return <ul>{element.children.map(item => renderNavbar(item, index))}</ul>
            }
            // active-link should be toggled dynamically instead.
            return <li className='active-link'>{element.name}
                <ul className={'navbar-' + index + "-list"}>
                    <div className='navbar-sub-container'>{element.children.map(item => renderNavbar(item, index))}
                    </div>
                </ul>
            </li>
        }
        if (element.children == null) {
            return <NavItem {...element} />
        }
    }

    return (
        <div>
            <div className='burgerbar-icon-container' onClick={activateNavbar}>
                {active || <img onClick={handleBurgerbarClickEvent} className='burgerbar-icon' src='/images/menu.svg'
                                alt='open menu'/>}
                {active && <img onClick={handleBurgerbarClickEvent} className='burgerbar-icon' src='/images/cross.svg'
                                alt='close menu'/>}
            </div>

            <div className='navbar-container'>
                {renderNavbar(data, 0)}
            </div>

        </div>
    );
};

export default Navbar;
