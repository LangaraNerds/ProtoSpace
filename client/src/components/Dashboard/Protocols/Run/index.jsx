import React, { useEffect, useState } from 'react';
import './runProtocol.scss';
import './runPreview.scss';
import { Link, Outlet, useOutletContext, useParams, useNavigate, useLocation } from 'react-router-dom';
import { HOST_URL } from '../../../../data/data';
import axios from 'axios';
import Button from '@mui/material/Button';

const ProtocolRun = () => {
    // const { protocols, setProtocols } = useOutletContext();
    const [protocolInfo, setProtocolInfo] = useState({});
    let navigate = useNavigate();
    let location = useLocation();
    const { protocolId } = useParams();




    useEffect(() => {
        // const protocolNew = protocols.find(item => item.protocol_id === Number(protocolId));
        // console.log('New: ', protocolNew);
        // setProtocolInfo(protocolNew);

        async function fetchData() {
            const user = JSON.parse(localStorage.getItem('user'));

            const params = {
                protocolId: protocolId
            }

            try {
                const resp = await axios.post(`${HOST_URL}/api/protocol/find`, {
                    ...params
                }, {
                    headers: {
                        "x-access-token": user.accessToken
                    }
                });

                console.log(resp);

                setProtocolInfo(resp.data);

            } catch (error) {
                console.log(error);
            }
        }

        fetchData();

    }, []);

    // useEffect(() => {
    //     if (location.pathname.includes('/protocols/run')) {
    //         console.log('INFO: ', protocolInfo);
    //         if (protocolInfo.start_run_status === 1) {
    //             navigate(`/protocols/${protocolId}/summary`)
    //         }
    //     }
    // }, [protocolInfo])

    return (
        <section className='section-protocol-run'>

            <Outlet context={{ protocolInfo }} />

            {/*Name: {protocolInfo.name}*/}
            {/*Author: {protocolInfo.author}*/}
            {/* <Link to={`/protocols/run/${protocolId}/preview`}>Preview</Link> */}
            {/*<Link to={`preview`}>Preview</Link>*/}
        </section>
    );
}

export default ProtocolRun;
