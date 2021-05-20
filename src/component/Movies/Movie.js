import React, {useState} from 'react'
import {Card, CardContent, CardMedia, Typography} from '@material-ui/core'
import useStyles from './styles'
const Movie = ({movie:{id,title, poster, year} }) => {

  const [hover, setHover] = useState(-1);


  const handleHover = (id) => {
    setHover(id)
  }
    const classes = useStyles();
    return (
      <Card
        className={classes.root}
        onMouseOver={() => handleHover(id)}
        onMouseOut={() => setHover(-1)}
      >
        <CardMedia image={poster} className={classes.media} />
        <CardContent className={classes.footerContainer}>
          <Typography variant='h6'>{title}</Typography>
          <Typography variant='subtitle1' className={classes.left}>
            {year}
          </Typography>
        </CardContent>
        <div className={
          hover === id ? classes.showMiddle : classes.middle
        }>
         <Typography variant="h4">Hello</Typography>
        </div>
      </Card>
    )
}

export default Movie
