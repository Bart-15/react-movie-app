import React, { Component } from 'react'
import data from './data'

const MovieContext = React.createContext()
class MovieProvider extends Component {
  state = {
    movies: [],
    favourites: [],
    isClick: false,
  }
  componentDidMount() {
    this.fetchFavourites()
    let movies = data

    this.setState({
      movies: movies,
    })
  }

  addFavourite = (movie) => {
    
    let newFavourites = []
    let newData  = {
      id: movie.id,
      title:movie.title,
      poster:movie.poster,
      year:movie.year
    }
    newFavourites.push(newData);
    newFavourites = newFavourites.concat(JSON.parse(localStorage.getItem('favList')||'[]'))
    localStorage.setItem("favList", JSON.stringify(newFavourites))

    this.setState({
      favourites: newFavourites
    })

  
  }

  fetchFavourites = () => {
    const json = localStorage.getItem('fav')
    const loadFavourites = JSON.parse(json)
    
    this.setState({
      favourites: loadFavourites
    })

 
  }  

  render() {
    return (
      <MovieContext.Provider
        value={{ ...this.state, addFavourite: this.addFavourite }}
      >
        {this.props.children}
      </MovieContext.Provider>
    )
  }
}

export { MovieProvider, MovieContext }
