import { Routes, Route } from 'react-router-dom';
import Search from './pages/Search'
import Book from './pages/Book'
import Home from './pages/Home'

function App() {
 return (
   <div>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route
          path="/search/:searchTerm"
          element={<Search />}
        />
        <Route
          path="book/:id"
          element={<Book />}
        />
     </Routes>
   </div>
 );
}

export default App; 
