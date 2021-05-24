import React from 'react'
import { Typography} from '@material-ui/core'
const MovieHeading = (props) => {
    return (
            <Typography variant="h5">{props.heading}</Typography>
    )
}

export default MovieHeading
