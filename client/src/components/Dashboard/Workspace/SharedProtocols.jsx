import React, { useState, useEffect } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { HOST_URL } from '../../../data/data';
import {useDispatch, useSelector} from 'react-redux';
import { logout } from '../../../features/auth/useSlice';

import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as Chart} from '../../../assets/chart-icon.svg';

const SharedProtocols = () => {
    const [protocols, setProtocols] = useState([]);
    const [protocolsRun, setProtocolsRun] = useState([]);
    const dispatch = useDispatch();
    let location = useLocation();
    const { user } = useSelector((state) => state.auth)
    console.log(user.role);


    useEffect(() => {
        const protocolsLocal = JSON.parse(localStorage.getItem('protocolsRun'));
        let newArr = [];
        if (protocolsLocal) {
            protocolsLocal.map((item, index) => {
                newArr.push(Number(item.protocolId))
            })

            setProtocolsRun(newArr)
        }

    }, [])


    useEffect(() => {
        async function fetchData() {
            const user = JSON.parse(localStorage.getItem('user'));

            const params = {
                workspaceId: user.workspaceId[0][0].workspaceId
            }

            try {
                const resp = await axios.post(`${HOST_URL}/api/protocol/find/byworkspace`, {
                    ...params
                }, {
                    headers: {
                        "x-access-token": user.accessToken
                    }
                });

                console.log(resp.data);
                const sharedProtocols = [];
                resp.data.map(item => {
                    if (item.shared_status === 1) {
                        sharedProtocols.push(item)
                    }

                })

                setProtocols(sharedProtocols)
                // setProtocols(resp.data)

            } catch (error) {
                console.log(error);
                // good practice???
            }
        }

        fetchData();
    }, [])

    return (
        <>
            {!location.pathname.includes('data-visualization') ?
                <>
                    {protocols.length > 0 ?
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table" className='dashboard__table'>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Name</TableCell>
                                        <TableCell align="left">Owner</TableCell>
                                        <TableCell align="left">Last Modified</TableCell>
                                        {/* <TableCell align="left">Completed</TableCell> */}
                                        { user.roles === 'T' ?
                                        <TableCell align="left">Chart</TableCell>
                                            : '' }
                                        <TableCell align="left">Version</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {protocols ? protocols.map((item, index) => {
                                        console.log(item);
                                        return (
                                            <TableRow key={index}>
                                                <TableCell align="left"><Link to={item.end_run_status === 1 ? `/protocols/${item.protocol_id}/summary` : `/protocols/run/${item.protocol_id}`}>{item.name}</Link></TableCell>
                                                <TableCell align="left">{item.author}</TableCell>
                                                <TableCell align="left">{new Date(item.created_at).toLocaleString("en-US")}</TableCell>
                                                {user.roles === 'T' ?
                                                <TableCell align="left"><Link to={`${item.protocol_id}/data-visualization`}><Chart/></Link></TableCell>
                                                : '' }
                                                <TableCell align="left">v1.0</TableCell>
                                            </TableRow>
                                        )
                                    }) : ''}

                                </TableBody>
                            </Table>
                        </TableContainer>
                        : <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                            <h3>There are no shared protocols</h3>
                        </div>}
                    {/* <div className="workspace__body">
                <Button variant="outlined">
                    <Link to={"/protocols/description"}>+ Create protocol</Link>
                </Button>
            </div> */}
                </>

                : <Outlet />}
        </>
    );
}

export default SharedProtocols;
