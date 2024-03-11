/* eslint-disable react/prop-types */
import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';

export default function CustomizedInputBase({ switches }) {
  const { t } = useTranslation();

  const iconButtonStyles = {
    p: '10px',
    color: switches === 'dark' ? 'white' : 'black',
  };

  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        borderRadius: '26px',
      }}
    >
      <IconButton type="button" sx={iconButtonStyles} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={t('searches.searchInput')}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
    </Paper>
  );
}
