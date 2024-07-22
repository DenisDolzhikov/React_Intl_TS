import { FC, MouseEvent, useState } from 'react';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store';
import { changeCurrentLanguage } from '../store/slices/selectLangSlice';
import { LOCALES } from '../i18n/locales';

const languages = [
  { name: 'EN', code: LOCALES.ENGLISH },
  { name: 'RU', code: LOCALES.RUSSIAN },
];

const LanguageToggler: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  
  const dispatch = useAppDispatch();
  const currentLanguageName = useAppSelector(state => state.languageState.currentLanguage);
  
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLanguage = (languageCode: LOCALES) => {
    dispatch(changeCurrentLanguage(languageCode));
  }

  return (
    <>
      <Button 
        sx={{ color: 'white' }}
        id="demo-positioned-button" 
        onClick={handleClick}
      >
        <Typography component='span' variant='body2'>
          {currentLanguageName}
        </Typography>
      </Button>
      <Menu
        id="language-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {languages.map(({ name, code }) => (
          <MenuItem key={code} value={code} onClick={() => { handleClose(); handleChangeLanguage(code); }}>
            {name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default LanguageToggler