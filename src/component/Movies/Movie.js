import React, { useState } from 'react'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import useStyles from './styles'
import Heart from 'react-animated-heart'

const Movie = ({ movie, addFavourite }) => {
  const [hover, setHover] = useState(-1)
  const [isClick, setClick] = useState(false)
  const handleHover = (id) => {
    setHover(id)
  }

  const handleClick = () => {
    setClick(!isClick)
    addFavourite(movie)
  }
  
  // const handleClick = () => {
  //   console.log('hello')
  // }
  const classes = useStyles()
  return (
    <Card
      className={classes.root}
      onMouseOver={() => handleHover(movie.id)}
      onMouseOut={() => setHover(-1)}
    >
      <CardMedia image={movie.poster} className={classes.media} />
      <CardContent className={classes.footerContainer}>
        <Typography variant='h6'>{movie.title}</Typography>
        <Typography variant='subtitle1' className={classes.left}>
          {movie.year}
        </Typography>
      </CardContent>
      <div className={hover === movie.id ? classes.showMiddle : classes.middle}>
        <Heart isClick={isClick} onClick={handleClick} />
      </div>
    </Card>
  )
}

export default Movie
