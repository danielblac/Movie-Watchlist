import {
  createBrowserRouter, createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import MoviesSearch from "./pages/MoviesSearch"
import MyWatchlist from "./pages/MyWatchlist"
import NotFound from "./components/NotFound"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <RootLayout />}>
      <Route index element={ <MoviesSearch /> } />
      <Route path="my-watchlist" element={ <MyWatchlist /> } />

      <Route path="*" element={ <NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
