import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facilis molestias corrupti perferendis dolorum voluptatem quod? Ex molestias minus obcaecati ducimus dolor quia ipsam sunt cum adipisci! Dolores, quae nisi.</p>

      <p>Go to the <Link to="/">Homepage</Link>.</p>
    </div>
  )
}