import React from 'react'
import { Box, Stack, Typography } from '@mui/material'


const Footer = () => {
  return (
    <Box mt="90px" bgcolor="#355E3B">
      <Stack gap="40px" alignContent="center" >
        <Typography height="40px" variant="h5" textAlign="center" mb="30px" mt="30px">
          SPARTX
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer