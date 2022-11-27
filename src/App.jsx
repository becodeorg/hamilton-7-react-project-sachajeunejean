import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import SearchResults from './pages/SearchResults';
import './scss/app.scss'

function App() {
	const [searchInput, setSearchInput] = useState("");
  const [filtersElement, setFiltersElement] = useState([]);
	const [filters, setFilters] = useState([]);
	const [newTrendyGames, setNewTrendyGames] = useState([]);
	const [newReleasesGames, setNewReleasesGames] = useState([]);
	const [nextWeekReleasesGames, setNextWeekReleasesGames] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Homepage
            setSearchInput={setSearchInput}
            filtersElement={filtersElement}
            setFiltersElement={setFiltersElement}
            filters={filters}
            setFilters={setFilters}
            newTrendyGames={newTrendyGames}
            setNewTrendyGames={setNewTrendyGames}
            newReleasesGames={newReleasesGames}
            setNewReleasesGames={setNewReleasesGames}
            nextWeekReleasesGames={nextWeekReleasesGames}
            setNextWeekReleasesGames={setNextWeekReleasesGames}
          />}
        />
        <Route path="/search-results" element={
          <SearchResults
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            filtersElement={filtersElement}
            setFiltersElement={setFiltersElement}
            filters={filters}
            setFilters={setFilters}
          />} 
        />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
