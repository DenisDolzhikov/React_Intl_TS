import { FC } from 'react';
import { Box, Stack, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const Navigation: FC = () => {
  return (
    <Box>
      <Stack direction="row" spacing={2}>

        <Link component={RouterLink} to='/' color='#ffffff' variant='body1'>
          {/* Home */}
          <FormattedMessage id='homepage_title' />
        </Link>

        <Link component={RouterLink} to='/about' color='#ffffff' variant='body1'>
          {/* About */}
          <FormattedMessage id='about_project' />
        </Link>

        <Link component={RouterLink} to='/contact' color='#ffffff' variant='body1'>
          {/* Contact us */}
          <FormattedMessage id='contact_us' />
        </Link>
      </Stack>
    </Box>
  );
};

export default Navigation;