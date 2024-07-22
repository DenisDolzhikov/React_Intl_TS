import { AppBar, Button, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FC } from 'react';
import LanguageToggler from './LanguageToggler';
import Navigation from './Navigation';

const Header: FC = () => {
  return (
    <AppBar>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >

        <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>

        <Navigation />

        <LanguageToggler />

        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;