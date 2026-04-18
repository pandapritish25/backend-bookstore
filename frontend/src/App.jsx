import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import BookDetails from "./pages/BookDetails";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";

function App() {
  return (
    <main className="container mx-auto">
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/details/:_id" element={<BookDetails />}/>
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
      </Routes>
    </main>
  )
}

export default App
