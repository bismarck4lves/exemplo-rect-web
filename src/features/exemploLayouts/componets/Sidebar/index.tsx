import React, { FC } from "react";

interface IProps { };

const Sidebar: FC<IProps> = (props) => {
    const menuList = [
        { name: 'Home' },
        { name: 'Forum' },
        { name: 'Settings' },
        { name: 'About' },

    ];

    return <ul>
        {menuList.map(item => (
            <li> {item.name} </li>
        ))}
    </ul>;
};

export default Sidebar;