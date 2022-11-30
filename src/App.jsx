import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import SearchResults from './pages/SearchResults';
import SingleGame from './pages/SingleGame';
import './scss/app.scss'

function App() {
	const [searchInput, setSearchInput] = useState("");
  const [filtersElement, setFiltersElement] = useState([]);
	const [filters, setFilters] = useState([]);
	const [newTrendyGames, setNewTrendyGames] = useState([]);
	const [newReleasesGames, setNewReleasesGames] = useState([]);
	const [nextWeekReleasesGames, setNextWeekReleasesGames] = useState([]);
  const [game, setGame] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Homepage
            setGame={setGame}
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
        <Route path="/SearchResults" element={
          <SearchResults
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            filtersElement={filtersElement}
            setFiltersElement={setFiltersElement}
            filters={filters}
            setFilters={setFilters}
          />} 
        />
        <Route path="/SingleGame/:name" element={
          <SingleGame
            game={game}
            setSearchInput={setSearchInput}
				    setFilters={setFilters}
				    setFiltersElement={setFiltersElement}
          />} 
        />
        <Route path="*" element={
          <Homepage
            setGame={setGame}
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
