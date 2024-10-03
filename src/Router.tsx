import { HashRouter , Routes, Route } from "react-router-dom";
import Search from './pages/Search'
import Book from './pages/Book'
import Home from './pages/Home'

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/search/:searchTerm?/:page?/:limit?"
          element={<Search />}
        />
        <Route
          path="book/:isbn"
          element={<Book />}
        />
         <Route path="/users/:userId" element={<Book />} />
      </Routes>
    </HashRouter>
  )
}
