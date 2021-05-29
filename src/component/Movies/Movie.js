import React, { useState } from 'react'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import useStyles from './styles'
import dfImage from '../../img/defaultImage.png'
import Heart from 'react-animated-heart'

const Movie = ({ movie, handleFavourite }) => {
  const [hover, setHover] = useState(-1)
  const [isClick, setClick] = useState(false)
  const handleHover = (id) => {
    setHover(id)
  }
  
  
  // const handleClick = () => {
  //   console.log('hello')
  const classes = useStyles()
  // }


  return (
    <Card
      className={classes.root}
      onMouseOver={() => handleHover(movie.imdbID)}
      onMouseOut={() => setHover(-1)}
    >
      <CardMedia image={movie.Poster === "N/A" ? dfImage : movie.Poster} className={classes.media} />
      <CardContent className={classes.footerContainer}>
        <Typography variant='subtitle1' style={{fontSize:'18px'}}>{movie.Title}</Typography>
        <Typography variant='subtitle1' className={classes.left}>
          {movie.Year.substring(0,4)}
        </Typography>
      </CardContent>
      <div
        className={hover === movie.imdbID ? classes.showMiddle : classes.middle}
      >
        <div onClick={()=>handleFavourite(movie)}>
          <Heart
            styles={{ width: '100px' }}
            isClick={isClick}
            onClick={() => setClick(!isClick)}
          />
        </div>
      </div>
    </Card>
  )
}

export default Movie
