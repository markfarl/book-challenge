import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './pages/Search'
import Book from './pages/Book'
import Home from './pages/Home'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<Book />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
