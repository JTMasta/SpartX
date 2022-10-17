import React from 'react'
import { Typography, Stack } from '@mui/material'


const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target } = exerciseDetail

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row'}, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" className='detail-image'/>
      <Stack sx={{ gap: { lg: '35px', xs: '20px' }}}>
        <Typography variant="h3" sx={{ textTransform: 'capitalize'}}>
          {name}
        </Typography>
        <Typography variant="h6">
          The {name} {` `}

          works on the <strong>{bodyPart}</strong> portion of your body and specifically targets your <strong>{target}</strong>. Great workout to improve your overall physique!
        </Typography>
      </Stack>
    </Stack>
  )
}

export default Detail