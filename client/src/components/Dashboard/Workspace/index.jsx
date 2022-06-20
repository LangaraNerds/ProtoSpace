import React from 'react';
import { Outlet } from 'react-router-dom';

const Workspace = () => {
    return (
        <div className='workspace'>
            Workspace
            <Outlet />
        </div>
    );
}

export default Workspace;