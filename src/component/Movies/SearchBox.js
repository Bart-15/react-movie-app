import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, InputAdornment } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
// Styling
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '20ch',
    },
  },

  [theme.breakpoints.up('md')]: {
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50ch',
      },
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
              label={<SearchIcon/>}
              placeholder="Search Movie"
              value={props.value}
              onChange={(event) => props.setSearchValue(event.target.value)}
            
            />
        </div>
    )
}

export default SearchBox
