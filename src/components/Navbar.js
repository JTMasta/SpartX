import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material' 

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-round" 
      sx=
      {{ 
        gap: { sm: '122px', xs: '40px'}, 
        mt: { sm: '32px', xs: '20px'},
        justifyContent: 'none'
      }}
      px="20px"
    >
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to="/" style={{ textDecoration: 'none', color: "#000", borderBottom: '3px solid #355E3B'}}>Home</Link>
        <a href="#exercises" style={{textDecoration: 'none', color: '#000'}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar