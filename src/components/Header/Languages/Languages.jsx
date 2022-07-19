import { useState } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from 'react-i18next';
import { StyledSelect, StyledForm } from './Languages.styled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelector';

export const Languages = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('');
  const isLogged = useSelector(getIsLoggedIn);

  const handleChange = event => {
    setLanguage(event.target.value);
  };
  const changeLanguage = ln => {
    return () => {
      i18n.changeLanguage(ln);
    };
  };

  return (
    <div>
      <StyledForm
        size="small"
        sx={{
          ml: 3,
          p: 0,
          top: 6,
        }}
        islogged={isLogged ? isLogged.toString() : undefined}
      >
        {!language && (
          <InputLabel id="demo-simple-select-label">
            <LanguageIcon />
          </InputLabel>
        )}
        <StyledSelect
          sx={{
            '.MuiSelect-icon': {
              color: 'white',
            },
            ml: 3,
            p: 0,
            top: 5,
          }}
          IconComponent=""
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          label="Age"
          onChange={handleChange}
          variant="outlined"
        >
          <MenuItem onClick={changeLanguage('en')} value={'en'}>
            🇺🇸
          </MenuItem>
          <MenuItem onClick={changeLanguage('ua')} value={'ua'}>
            🇺🇦
          </MenuItem>
        </StyledSelect>
      </StyledForm>
    </div>
  );
};
