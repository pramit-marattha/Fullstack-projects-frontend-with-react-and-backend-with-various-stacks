import React from 'react';
import { FiHome } from 'react-icons/fi';
import { AiFillDashboard} from 'react-icons/ai';
import { BiTable} from 'react-icons/bi';
import { FcComboChart} from 'react-icons/fc';

const INITIAL_STATE = {
    activeMenu: {
        name: 'Covid-19 stats',
        icon: <FiHome />,
        path: '/'
    },
    itens: [
        {
            name: 'Covid Stats Dashboard',
            icon: <AiFillDashboard />,
            path: '/'
        },
        {
            name: 'Covid Stats Tables',
            icon: <BiTable />,
            path: '/tables'
        },
        {
            name: 'Charts',
            icon: <FcComboChart />,
            path: '/cards'
        },
    ],
};

export default function sidebarMenu(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_MENU_ACTIVE':
            return { ...state, activeMenu: action.menu }
            // break;
        default:
            return state
            // break;
    }
}
