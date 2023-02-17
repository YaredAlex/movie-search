import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import WatchList from "./pages/WatchList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/watch-list" element={<WatchList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
