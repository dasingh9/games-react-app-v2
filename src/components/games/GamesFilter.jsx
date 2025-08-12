
import { useState } from "react";
import { Flexbox } from "../shared/Flexbox";

export function GamesFilter({ games, onFilter }) {
    const [keyword, setKeyword] = useState("");
    const [genre, setGenre] = useState("");

    function handleFilter() {
        let filteredGames = games.filter(game => game.title.toLowerCase().includes(keyword?.toLowerCase()));
        if(genre)
            filteredGames = filteredGames?.filter(game => game.genre === genre);
        console.log(filteredGames?.length);
        onFilter(filteredGames);
    }

    function handleKeywordChange(e) {
        setKeyword(e.target.value);
    }

    function handleGenreChange(e) {
        setGenre(e.target.value);
    }

    function clearFilters() {
        setKeyword("");
        setGenre("");
        onFilter(games);
    }

    return (
        <form onSubmit={e => { e.preventDefault(); handleFilter(); }}>
            <Flexbox>
                <input
                    type="text"
                    name="keyword"
                    className="input-name-filter"
                    value={keyword}
                    onChange={handleKeywordChange}
                    placeholder="Filter by title"
                />
                <select name="genre" id="genre" value={genre} onChange={handleGenreChange}>
                    <option value="">All Genres</option>
                    <option value="Shooter">Shooter</option>
                    <option value="ARPG">ARPG</option>
                    <option value="Strategy">Strategy</option>
                </select>
                <button type="submit" className="btn btn-primary">Apply Filter</button>
                <button type="button" className="btn btn-secondary" onClick={clearFilters}>Clear Filters</button>
            </Flexbox>
        </form>
    );
}