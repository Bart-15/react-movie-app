import React, { useState, useEffect } from 'react'
import { Container, Grid } from '@material-ui/core'
import Movie from '../Movies/Movie'
import SearchBox from './SearchBox'
import MovieHeading from './MovieHeading'
import useStyles from './styles'
import Favourites from '../Favourite/Favourites'
// import data from '../../data'
const Movies = () => {
  const classes = useStyles()
  const [movies, setMovie] = useState([])
  const [favourites, setFavourites] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const fetchMovie = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=f3946ab3`

    const response = await fetch(url)
    const responseData = await response.json()

    if (responseData.Search) {
      setMovie(responseData.Search)
    }
  }

  useEffect(() => {
    fetchMovie(searchValue)
  }, [searchValue])
  const addFavouriteMovie = (movie) => {
    const newFavourites = [...favourites, movie];
    setFavourites(newFavourites)
  }
  
  //   console.log(movie)
  return (
    <>
    <Container>
      <div className={classes.headingContainer}>
        <MovieHeading heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <Grid container spacing={3}>
        {movies.map((movie) => {
          return (
            <Grid key={movie.imdbID} item xs={12} md={4} lg={3}>
              <Movie movie={movie} handleFavourite={addFavouriteMovie} />
            </Grid>
          )
        })}
      </Grid>
    </Container>
    <Favourites favourites={favourites} />
    </>
  )
}

export default Movies
