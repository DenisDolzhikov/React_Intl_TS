import { FC, useState } from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import { FormattedDate, FormattedMessage, FormattedNumber } from 'react-intl';

const Footer: FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <Box>
      <Typography component='p' variant='h5'>
        <FormattedDate value={Date.now()} />
      </Typography>
      <Divider />

      <Typography component='p' variant='h6'>
        <FormattedNumber value={2000} />
      </Typography>
      <Divider />

      <Typography component='p'>
        <FormattedMessage id='click_button' />
      </Typography>
      <Divider />

      <Button variant='outlined' onClick={handleClick}>
        <FormattedMessage id='click_here' />
      </Button>
      
      <Typography component='p'>
        <FormattedMessage id='click_count' values={{ count }} />
      </Typography>
      <Divider />
    </Box>
  )
};

export default Footer;