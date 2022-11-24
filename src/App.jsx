import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import './scss/app.scss'

function App() {
	const [searchInput, setSearchInput] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage setSearchInput={setSearchInput} />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
