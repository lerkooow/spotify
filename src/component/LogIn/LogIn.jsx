import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';

import styles from "./LogIn.module.scss"
import { Button } from '@mui/material';

const LogIn = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.login}>
                <Link className={styles.return_home} to="/">Back to home</Link>
                <h2 className={styles.title_login}>Log In</h2>
                <TextField className={styles.input_name} label="name" />
                <TextField label="email" className={styles.input_email} />
                <Button sx={{
                    background: 'linear-gradient(45deg, #3333A3 50%, #fff 90%)',
                    borderRadius: 3,
                    border: 0,
                    color: 'white',
                    height: 48,
                    padding: '0 30px',
                    marginBottom: "30px"
                }}>Log In</Button>
            </div>
        </div>
    );
}

export default LogIn;