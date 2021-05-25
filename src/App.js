import React, {useState, useEffect} from 'react'
import Movies from './component/Movies/Movies'
import Favourites from './component/Favourite/Favourites'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
const App = () => {
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

  //  remove favourites
   const removeFavourites = (movie) => {
     const newFavourites = favourites.filter(
       (favourite) => favourite.imdbID !== movie.imdbID
     )
     setFavourites(newFavourites)
     saveToLocalStorage(newFavourites)
   }


   //save to local storage
   const saveToLocalStorage = (items) => {
     localStorage.setItem('my-favourites', JSON.stringify(items))
   }

   //Empty local storage

   const removeAll = () => {
      localStorage.removeItem('my-favourites')
      setFavourites([])

   }


   useEffect(() => {
     fetchMovie(searchValue)
   }, [searchValue])

   useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem('my-favourites'))

    setFavourites(movieFavourites)
   }, [])

   
   const addFavouriteMovie = (movie) => {
     const newFavourites = [...favourites, movie]
     setFavourites(newFavourites)
     saveToLocalStorage(newFavourites);
   }
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Movies
            favourites={favourites}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            movies={movies}
            handleFavourite={addFavouriteMovie}
          />
        </Route>
        <Route path='/favourites'>
          <Favourites
            removeAll={removeAll}
            favourites={favourites}
            removeFavourites={removeFavourites}
          />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
