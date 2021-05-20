import React, { Component } from 'react'
import {MovieContext} from '../../context'
import {Container, Typography, Grid} from '@material-ui/core'
import Movie from './Movie'
export default class Movies extends Component {
    static contextType = MovieContext;
    render() {
        let {movies, addFavourite} = this.context;
        return (
            <Container>
                <Typography variant="h4">Movies</Typography>
                <Grid container spacing={3}>
                    {
                        movies.map((movie, id) => {
                            return (
                                <Grid key={id} item xs={12} md={4} lg={3}>
                                    <Movie movie={movie} addFavourite={addFavourite} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
        )
    }
}
