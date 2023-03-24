import React from 'react'
import { FaPlusCircle  } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function WatchlistEmpty() {
  return (
    <div className="empty-watchlist">
		<p>Your watchlist is looking a little empty...</p>
		<Link to="/"><h1><FaPlusCircle /> Let's add some movies!</h1></Link>
	</div>
  )
}
