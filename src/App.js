import "./styles.css";
import { NavLink, Routes, Route } from "react-router-dom";
import SearchPage from "./components/searchPage";
import BookShelf from "./components/BookShelf";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BookShelf />} />

        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}
