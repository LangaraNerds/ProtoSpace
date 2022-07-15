import React from 'react';
import './profile.scss';
import {
    Link
} from "react-router-dom";
import { TextField } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {useEffect, useState} from "react";
import axios from "axios";

import {HOST_URL} from "../../data/data";


const Profile = () => {

    const [ userInfo, setUserInfo] = useState ({
        name:'',
        email:'',
        updated_at:'',
        password:'',
        photo:''
    });
    const [newPassword, setNewPassword] = useState({
        password:'',
        showPass: false,
    });
    const [newPasswordConf, setNewPasswordConf] = useState({
        password:'',
        showPass2: false,
    });


        const handleChangeN = (prop) => (event) => {
        setNewPassword({ ...newPassword, [prop]: event.target.value });
    };

    const handleClickShowPasswordN = () => {
        setNewPassword({
            ...newPassword,
            showPass: !newPassword.showPass,
        });
    };
    const handleChangeN2 = (prop) => (event) => {
        setNewPasswordConf({ ...newPasswordConf, [prop]: event.target.value });
    };

    const handleClickShowPasswordN2 = () => {
        setNewPasswordConf({
            ...newPasswordConf,
            showPass2: !newPasswordConf.showPass2,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const fileSelectedHandler = (event) => {
        console.log(event.target.files[0]);
    };
    const fileUploadHandler = event =>{

    }

    useEffect(() => {
        async function fetchData() {
            const user = JSON.parse(localStorage.getItem('user'));

            const params = {
                id: user.id
            }

            try {
                const resp = await axios.post(`${HOST_URL}/api/users/profile/`, {
                    ...params
                }, {
                    headers: {
                        "x-access-token": user.accessToken
                    }
                });

                setUserInfo(resp.data);

            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [])



    return <>
        <section className={"profile-container"}>
            <h2>Your Profile</h2>
            <form action={"/"} method={"POST"}>
            <div className={"image-container"}>
                <input className={"input-image hidden"} type={"file"} name={"photo-image"} id={"photo-image"} accept={"image/png, image/jpeg"} onChange={fileSelectedHandler} src={userInfo.photo} />
                {/*<button><CameraAltIcon /> Change profile </button>*/}
            </div>
            <div className={"user-info-container"}>
                <div className={"container-header"}>
                    <h4>Account Information</h4>
                    <div className={"updated-container"}>Last Update: <span>{userInfo.updated_at.slice(0,10)}</span></div>
                    <div className={"mandatory-def"}><span className={"mandatory"}>*</span> This section need to be filled</div>
                </div>
                <div className={"user-info-fields"}>
                    <div>
                        <label>Name<span className={"mandatory"}>*</span></label>
                        <TextField type={'text'} value={userInfo.name}/>
                    </div>

                    <div>
                        <label>Email<span className={"mandatory"}>*</span></label>
                        <TextField type={'text'} value={userInfo.email}/>
                    </div>
                </div>
                <div className={"password-fields"}>
                    <h4>Password</h4>
                    <div>
                        <label>Password</label>
                        <OutlinedInput
                            id="outlined-adornment-password-current"
                            type={'password'}
                            value={userInfo.password}
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="outlined-adornment-password" >New Password<span className={"mandatory"}>*</span></InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password-new"
                            type={newPassword.showPass ? 'text' : 'password'}
                            onChange={handleChangeN('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPasswordN}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {newPassword.showPass ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="outlined-adornment-password">Confirm New Password<span className={"mandatory"}>*</span></InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password-new-confirm"
                            type={newPasswordConf.showPass2 ? 'text' : 'password'}
                            onChange={handleChangeN2('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPasswordN2}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {newPasswordConf.showPass2 ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </div>
                </div>
            </div>
            <div className={"buttons"}>
                <Button variant={"text"} className={"cancel-btn"} type={"reset"}>Cancel</Button>
                <Button variant={"contained"}className={"update-btn"} type={"submit"}>Update</Button>
            </div>
            </form>
        </section>
    </>
}
export default Profile;