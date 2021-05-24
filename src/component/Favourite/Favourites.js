import React from 'react'
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@material-ui/core'

import useStyles from '@material-ui/core'
const Favourites = ({favourites}) => {
    if(!favourites) {
        return <h1>''</h1>
    }
    return (
      <div>
        <Container>
          <Typography variant='h4'>Favourite Movies</Typography>
          <Grid container spacing={3}>
            {favourites.map((movie) => {
                console.log(movie.Poster)
              return (
                <Grid item key={movie.imdbID} xs={12} md={4} lg={3}>
                  <Card>
                    <CardMedia image={movie.Poster} />
                    <CardContent>
                      <Typography variant='h6'>{movie.Title}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </div>
    )
}

export default Favourites
