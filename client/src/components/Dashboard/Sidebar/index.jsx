import React from 'react';
import {
    useLocation,
    useParams
} from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import { Button } from '@mui/material';
import CustomLink from './CustomLink';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../features/auth/useSlice';

import './sidebar.scss'


const Sidebar = () => {
    let location = useLocation();
    const dispatch = useDispatch();
    const { protocolId } = useParams();


    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div className='sidebar'>
            {
                location.pathname.includes('/protocols') ?

                    <div className='sidebar__container'>
                        <div className='sidebar__btn'>
                            <CustomLink to={location.pathname.includes('/protocols/run') ? `/protocols/run/${protocolId}/description` : `/protocols/description`}>Description</CustomLink>
                        </div>
                        <div className='sidebar__btn'>
                            <CustomLink to={location.pathname.includes('/protocols/run') ? `/protocols/run/${protocolId}/guidelines` : `/protocols/guidelines`}>Guidelines</CustomLink>

                        </div>
                        <div className='sidebar__btn'>
                            <CustomLink to={location.pathname.includes('/protocols/run') ? `/protocols/run/${protocolId}/materials` : `/protocols/materials`}>Materials</CustomLink>
                        </div>
                        <div className='sidebar__btn'>
                            <CustomLink to={location.pathname.includes('/protocols/run') ? `/protocols/run/${protocolId}/steps` : `/protocols/steps`}>Steps</CustomLink>
                        </div>
                    </div>


                    :

                    <div className='sidebar__container'>
                        <div className='sidebar__btn'>
                            <PersonIcon />
                            <div>Shared with me</div>
                        </div>
                        <div className='sidebar__btn'>
                            <CreateNewFolderIcon />
                            <div>My workspace</div>
                        </div>
                    </div>
            }

            <div>
                <Button type='outlined' onClick={handleLogout}>Log out</Button>
            </div>
        </div>
    );
}

export default Sidebar;
