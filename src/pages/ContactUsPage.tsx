import { FC } from 'react';
import { Container, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';

const ContactUsPage: FC = () => {
  return (
    <Container sx={{ minHeight: "65vh" }}>
      <Typography component="h1" variant='h3'>
        <FormattedMessage id='contact_us' />
      </Typography>
    </Container>
  );
};

export default ContactUsPage;