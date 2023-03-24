import { Link, Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className='root-layout'>
      <header className='header'>          
      <Link to="/"><h1>Find your film</h1></Link>
      <Link to="my-watchlist">My Watchlist</Link>
      </header>
      
      <main>
        <Outlet />
      </main>
    </div>
  )
}
