import React, { Component } from 'react'

import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@material-ui/core'

import {MovieContext} from '../../context'
export default class Favourites extends Component {
    static  contextType = MovieContext;
    render() {
        let {favourites} = this.context;
        console.log(favourites);
        if(!favourites) {
            return <div>Hello </div>
        }
        return (
            <>
                <Container>
                    <Typography variant="h4">Favourite Movies</Typography>
                    <Grid container spacing={3}>
                        {
                            favourites.map((movie, id) => {
                                return (
                                <Grid item key={id} xs={12} md={4} lg={3}>
                                    <Card>
                                        <CardMedia image={movie.poster} />
                                        <CardContent>
                                            <Typography variant='h6'>{movie.title}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                )
                            })
                        }
                    </Grid>
                </Container>
            </>
        )
    }
}

