import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography} from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({ setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      setBodyParts(['all', ...bodyPartsData])
    }
    fetchExercisesData()
  }, [])

  const handleSearch = async () => {
    if(search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(exercise => exercise.name.toLowerCase().includes(search)
      || exercise.target.toLowerCase().includes(search) 
      || exercise.equipment.toLowerCase().includes(search) 
      || exercise.bodyPart.toLowerCase().includes(search) 
    )

    setSearch('')
    setExercises(searchedExercises)
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} 
        sx={{ 
          fontSize: { 
              lg: '44px', 
              xs: '32px' 
            }
        }} mb="50px" textAlign="center">
        build your workout from the below 1000+ exercises or use our search bar for a specific exercise.
      </Typography>
      <Box position="relative" mb="72px">
        <TextField height="76px" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder="Search workout" type="text"
          sx={{ input: { 
                  fontWeight: '700', 
                  border: 'none', 
                  borderRadius: '4px'
                },
                width: {
                  lg: '850px',
                  xs: '350px',
                  backgroundColor: '#FFF',
                  borderRadius: '40px'
                }
              }}
        />
      <Button className="search-btn" sx={{
        ':hover': {
          bgcolor: '#355E3B'
        },
        bgcolor: 'black',
        color: '#FFF',
        textTransform: 'none',
        width: {
          lg: '175px',
          xs: '80px'
        },
        fontSize: {
          lg: '20px',
          xs: '12px'
        },
        height: '56px',
        position: "absolute",
        right: '0'
      }}
      onClick={handleSearch}>
        Search
      </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px'}}>
          <HorizontalScrollbar data={bodyParts}
            bodyPart={bodyPart} setBodyPart={setBodyPart}
          />
      </Box>
    </Stack>
  )
}

export default SearchExercises