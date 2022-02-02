import React from 'react'
import { Box, useTheme } from '@mui/system'
import { Chip, TextField } from '@mui/material'
import Autocomplete from '@mui/lab/Autocomplete'

const BadgeAutocomplete = () => {
    const theme = useTheme()

    return (
        <Box
            sx={{
                width: 500,
                '& > * + *': {
                    marginTop: theme.spacing(3),
                },
            }}
        >
            <Autocomplete
                multiple
                id="tags-standard"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="Assign Users"
                        placeholder=""
                        fullWidth
                    />
                )}
            />
            
        </Box>
    )
}

export default BadgeAutocomplete

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'Clark Kent', year: 1994 },
    { title: 'Jessica Jones', year: 1972 },
    { title: 'Bruce Wayne', year: 1974 },
    { title: 'Peter Parker', year: 2008 },
    { title: 'Selena Kyle', year: 1957 },
    { title: "Noran Rad", year: 1993 },
    { title: 'Sue Storm', year: 1994 },
    { title: 'Franklin Richards', year: 2003 },
    { title: 'Mathew Murdock', year: 1966 },
    { title: 'Wilson Fisk', year: 1999 },
    { title: 'Bruce Banner', year: 2001 },
    { title: 'Jane Foster', year: 1980 },
    { title: 'Kamila Kahn', year: 1994 },
    { title: 'Jean Grey', year: 2010 },
    
]
