import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import Typewriter from 'typewriter-effect'

import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px'},
      ml: { sm: '50px'}
    }} position="relative" p="20px">
      <Typography color="#355E3B" fontWeight="600" fontSize="30px">
        SpartX
      </Typography>
      <Typography fontWeight={700} mb="23px"
        sx={{ fontSize: { lg: '44px', xs: '40px' } }}
      >
        <Typewriter options={{
          strings: ['Get Fit,', 'or Die Tryin\'.'],
          autoStart: true,
          loop: true
        }}/>
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={3}>
        Check out the most effective exercises
      </Typography>
      <Button href="#exercises" sx={{ 
          ':hover': {
              bgcolor: '#355E3B'
            },
            bgcolor: '#355E3B',
            padding: '10px',
            mt: '15px' 
        }} variant="contained">Find your workout
      </Button>
      <Typography fontWeight={600} color="#355E3B" fontSize="200px" mt="100px" sx={{ opacity: 0.2, display: { lg: 'block', xs: 'none' } }} >
        Calisthenics
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner