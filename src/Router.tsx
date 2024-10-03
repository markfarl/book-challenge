import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './pages/Search'
import Book from './pages/Book'
import Home from './pages/Home'

export default function Router() {
  return (
    <BrowserRouter basename="/book-challenge/">
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
    </BrowserRouter>
  )
}
