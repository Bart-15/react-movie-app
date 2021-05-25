import React from 'react'
import { Container, Grid, Button, Typography } from '@material-ui/core'
import Movie from '../Movies/Movie'
import { Link } from 'react-router-dom'
import { AiFillHeart } from 'react-icons/ai'
import SearchBox from './SearchBox'
import MovieHeading from './MovieHeading'
import useStyles from './styles'
// import data from '../../data'
const Movies = ({ searchValue, setSearchValue, movies, handleFavourite, favourites }) => {
  const classes = useStyles()

  //   console.log(movie)
  return (
    <>
      <Container>
        <div className={classes.headingContainer}>
          <MovieHeading heading='Movies' />
          <div style={{display:'flex'}}>
            <SearchBox
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
            <Button component={Link} to="/favourites">
              <AiFillHeart size={40} color='red' />
              <Typography className={classes.heartLength} variant="subtitle1">{
                favourites.length <= 0 ? '' : favourites.length
              }</Typography>
            </Button>
          </div>
        </div>
        <Grid container spacing={3}>
          {movies.map((movie) => {
            return (
              <Grid key={movie.imdbID} item xs={12} md={4} lg={3}>
                <Movie movie={movie} handleFavourite={handleFavourite} />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </>
  )
}

export default Movies
