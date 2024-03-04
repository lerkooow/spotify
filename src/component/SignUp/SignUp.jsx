import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Password from './passwordForm/Password';

import styles from "./SignUp.module.scss"
import { Button } from '@mui/material';

const SignUp = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.signup}>
                <Link className={styles.return_home} to="/">Back to home</Link>
                <h2 className={styles.title_signup}>Sign Up</h2>
                <TextField className={styles.input_name} label="name" />
                <TextField label="email" className={styles.input_email} />
                <Password />
                <TextField label="age" className={styles.input_age} />
                <Link className={styles.return_login} to="/login">I already have an account</Link>
                <Button sx={{
                    background: 'linear-gradient(45deg, #3333A3 50%, #fff 90%)',
                    borderRadius: 3,
                    border: 0,
                    color: 'white',
                    height: 48,
                    padding: '0 30px',
                    marginBottom: "30px"
                }}>Sign Up</Button>
            </div>
        </div>
    );
}

export default SignUp;