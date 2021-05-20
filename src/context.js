import React, { Component } from 'react'
import data from './data'

const MovieContext = React.createContext()
 class MovieProvider extends Component {

    state = {
        movies: []
    }
    componentDidMount() {
        let movies = data;
        
       this.setState({
           movies: movies
       })
    }

   handleHover = () => {
     alert('hello')
   }
    render() {
        return (
          <MovieContext.Provider value={{ ...this.state,  }}>
            {this.props.children}
          </MovieContext.Provider>
        )
    }
}

export {MovieProvider, MovieContext}
