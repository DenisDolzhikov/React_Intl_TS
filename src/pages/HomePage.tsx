import { FC } from 'react';
import { Box, Typography } from '@mui/material'
import { FormattedMessage } from 'react-intl';

const HomePage: FC = () => {
  return (
    <Box component='main' sx={{ minHeight: '50vh' }}>
      <Typography component='h1' variant='h3' color='black'>
        <FormattedMessage id='learn_to' />
      </Typography>

      <Typography component='p' variant='h4'>
        <FormattedMessage id='price_display' values={{ n: 59.99 }} />
      </Typography>

      <Typography component='p' variant='h5'>
        <FormattedMessage id='number_display' values={{ n: 2000 }} />
      </Typography>

      <Typography component='p' variant='h6'>
        <FormattedMessage id='start_today' values={{ d: new Date() }} />
      </Typography>
    </Box>
  )
}

export default HomePage