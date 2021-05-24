import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, InputAdornment } from '@material-ui/core'
import {BiSearchAlt} from 'react-icons/bi'
// Styling
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '20ch',
    },
  },

}))


const SearchBox = (props) => {
    const classes = useStyles()
    console.log(props)
    return (
        <div className={classes.root}>
            <TextField
              id='outlined-basic'
              variant='outlined'
              label="Search..."
              value={props.value}
              onChange={(event) => props.setSearchValue(event.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <BiSearchAlt />
                  </InputAdornment>
                ),
              }}
            />
        </div>
    )
}

export default SearchBox
