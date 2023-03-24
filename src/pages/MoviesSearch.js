import { useState, useEffect } from 'react'
import { FaSearch, FaPlusCircle  } from 'react-icons/fa'
import StartPage from '../components/StartPage'

export default function MoviesSearch() {

  const [search, setSearch] = useState('')
  const [movieData, setMovieData] = useState([])
  const [watchlist, setWatchlist] = useState(() => {
    return JSON.parse(localStorage.getItem('myWatchlist')) || []
  })

  useEffect(() => {
    window.localStorage.setItem('myWatchlist', JSON.stringify(watchlist))
  }, [watchlist])
  
  function handleChange(event) {
    setSearch(event.target.value)
  }

  function searchMovie(e) {
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=8b71fc20ecabe803d011198b7885b4ec&language=en-US&query=${search}&page=1&include_adult=false`)
      .then(res => res.json())
      .then(data => setMovieData(data.results))
      .catch(err => console.error(err))

    setTimeout(() => {setSearch('')}, 1500)
  }

  const movieResult = movieData.filter(movie => movie.poster_path  && movie.overview).map(movie => {
    return (
      <div className="movie-container" key={movie.id}>
          <img className="movie-image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title} />	
          <h3 className="movie-title">{movie.title} <span>⭐ {movie.vote_average}</span></h3>
          <p className="movie-sub">
              <span>Release Date: {movie.release_date}</span>                    
              <span className="add-btn" onClick={() => {
                setWatchlist(prevMovies => {
                  if (prevMovies.includes(movie)) {
                    return [...prevMovies]
                  }
                  return [...prevMovies, movie]
                })
              }}>
                <p><FaPlusCircle /> Watchlist</p>
              </span>
          </p>
          <p className="movie-text">{movie.overview}</p>
      </div>
    )
  })
  
  return (
    <>
      <div className='search-input'>
        <form className="search-form" onSubmit={searchMovie} >
          <FaSearch className='search-icon' />
          <input 
            type="search"
            placeholder="Search for a movie"
            name="movieSearch"
            className="form-input"
            value={search}
            onChange={handleChange}
            required
          /> 
          <button onClick={searchMovie} className="search-button">Search</button>
        </form>
      </div>
      <div className="container">
        {movieData.length > 0 
          ? movieResult 
          : <StartPage />
        }
      </div>
    </>
    
  )
}
