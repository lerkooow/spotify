import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Password from './passwordForm/Password';

import styles from './SignUp.module.scss';

function SignUp() {
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
          background: '#1ed760',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 48,
          padding: '0 30px',
          marginBottom: '30px',
        }}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default SignUp;
