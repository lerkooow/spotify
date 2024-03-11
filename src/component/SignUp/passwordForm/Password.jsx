import {
  IconButton, InputAdornment, InputLabel, OutlinedInput,
} from '@mui/material';
import FormControl from '@mui/material/FormControl';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import React, { useState } from 'react';
import styles from './Password.module.scss';

function Password() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => e.preventDefault();

  return (
    <FormControl className={styles.password} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        endAdornment={(
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        )}
        label="Password"
      />
    </FormControl>
  );
}

export default Password;
