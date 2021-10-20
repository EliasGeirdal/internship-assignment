import React from 'react';

const NavItem = (props) => {
    return (
        // here we can direct according to props.url
        <li>{props.name}</li>
    );
};

export default NavItem;
