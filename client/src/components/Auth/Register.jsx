import React, { useState, useEffect } from 'react';
import { TextField, FormControl, FormHelperText, InputLabel, Input, Button } from '@mui/material';
import { Link } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [collegeNumber, setCollegeNumber] = useState('');
    const [role, setRole] = useState('S');


    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            name: name,
            email: email,
            password: password,
            college_number: collegeNumber,
            role: role
        }

        console.log(userData);
    }

    return (
        <form style={{ display: 'flex', flexDirection: 'column', gap: 10 }} onSubmit={handleSubmit}>
            <FormControl >
                <InputLabel htmlFor="name-register">Name</InputLabel>
                <Input id="name-register" value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl >
                <InputLabel htmlFor="email-register">Email</InputLabel>
                <Input id="email-register" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl >
                <InputLabel htmlFor="password-register">Password</InputLabel>
                <Input id="password-register" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <FormControl >
                <InputLabel htmlFor="password2-register">Confirm Password</InputLabel>
                <Input id="password2-register" value={password2} onChange={(e) => setPassword2(e.target.value)} />
            </FormControl>
            <FormControl >
                <InputLabel htmlFor="collegeNumber-register">College Number</InputLabel>
                <Input id="collegeNumber-register" value={collegeNumber} onChange={(e) => setCollegeNumber(e.target.value)} />
            </FormControl>
            <FormControl >
                <InputLabel htmlFor="role-register">Role</InputLabel>
                <Input id="role-register" value={role} onChange={(e) => setRole(e.target.value)} />
            </FormControl>

            <Button type='submit' variant="contained" style={{ alignSelf: 'center' }}>Login</Button>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <p>Already have an account?</p>
                <Link to={'/'}>Login</Link>
            </div>
        </form>
    );
}

export default Register;
