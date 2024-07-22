import { AppBar, Box, Button, Container, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FC } from 'react';
import LanguageToggler from './LanguageToggler';
import Navigation from './Navigation';
import { FormattedMessage } from 'react-intl';

const Header: FC = () => {
  return (
    <AppBar>
      <Container maxWidth='x1'>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton size="large" edge="start" color="inherit" sx={{ mr: 5 }}>
              <MenuIcon />
            </IconButton>

            <Navigation />
          </Box>

          <Box>
            <LanguageToggler />

            <Button color="inherit">
              <FormattedMessage id='login' />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;