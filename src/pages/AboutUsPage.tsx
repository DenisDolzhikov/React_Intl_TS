import { FC } from 'react'
import { Container, Typography } from '@mui/material'
import { FormattedMessage } from 'react-intl'

const AboutUsPage: FC = () => {
  return (
    <Container sx={{ minHeight: '65vh' }}>
      <Typography component='h1' variant='h3'>
        <FormattedMessage id='about_project' />
      </Typography>
    </Container>
  )
}

export default AboutUsPage