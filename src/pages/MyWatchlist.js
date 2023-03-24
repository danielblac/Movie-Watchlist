import { useState, useEffect } from 'react'
import { FaMinusCircle } from 'react-icons/fa'
import WatchlistEmpty from '../components/WatchlistEmpty'

export default function MyWatchlist() {
  const [myWatchlist, setMyWatchlist] = useState(() => {
    return JSON.parse(localStorage.getItem('myWatchlist')) || []
  })

  useEffect(() => {
    window.localStorage.setItem('myWatchlist', JSON.stringify(myWatchlist))
  }, [myWatchlist])

  const watchlist = myWatchlist.map(movie => {
    return (
      <div className="movie-container" key={movie.id}>
          <img className="movie-image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title} />	
          <h3 className="movie-title">{movie.title} <span>⭐ {movie.vote_average}</span></h3>
          <p className="movie-sub">
              <span>Release Date: {movie.release_date}</span>                    
              <span className="add-btn" onClick={() => {
                setMyWatchlist(prevMovies => prevMovies.filter(item => item.id !== movie.id))
              }}>
                  <FaMinusCircle /> Remove
              </span>
          </p>
          <p className="movie-text">{movie.overview}</p>
      </div>
    )
  })

  console.log(myWatchlist)
  return (
    <div className="container">
        {myWatchlist.length > 0 
          ? watchlist 
          : <WatchlistEmpty />
        }
    </div>
  )
}
