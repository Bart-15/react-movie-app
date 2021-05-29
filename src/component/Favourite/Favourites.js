import React from 'react'
import {
  Container,
  Grid,
  Card,
  CardMedia,
  Button,
} from '@material-ui/core'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {Link} from 'react-router-dom'
import MovieHeading from '../Movies/MovieHeading'
import useStyles from './styles'
const Favourites = ({favourites, removeFavourites, removeAll}) => {
  const classes = useStyles();
  
  // console.log(favourites)
 
  // const getUnique = (items, value) => {
  //   return [...new Set(items.map((item) => item[value]))]
  // }

  // let filteredMovies = getUnique(favourites, 'imdbID')
  // filteredMovies = ['imdbID', ...filteredMovies]

  // console.log(filteredMovies)


  if(favourites <= 0) {
    return (
      <Container style={{padding:'30px'}}>
        <MovieHeading heading="Your Favourites Is Currently Empty"  />
        <Button className={classes.btn} component={Link} to="/" color="primary">Back to home</Button>
      </Container>
    )
  }
    return (
      <div>
        <Container style={{marginTop:'30px'}}>
          <MovieHeading heading='My Favourites' />
          <Grid container spacing={3} style={{marginTop:'10px'}}> 
            {favourites.map((movie, index) => {
              console.log(movie.Poster)
              return (
                <Grid item key={index} xs={12} md={4} lg={3}>
                  <Card className={classes.root}>
                    <CardMedia className={classes.media} image={movie.Poster}>
                      <RiDeleteBin6Line
                        onClick={() => removeFavourites(movie)}
                        className={classes.deleteIcon}
                        size={50}
                      />
                    </CardMedia>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
          <div style={{ float: 'right', padding: '30px' }}>
            <Button
              className={classes.btn}
              component={Link}
              to='/'
             
            >
              +Add More
            </Button>
            <Button
              className={classes.btn}
              onClick={removeAll}
              
            >
              Delete All
            </Button>
          </div>
        </Container>
      </div>
    )
}

export default Favourites
