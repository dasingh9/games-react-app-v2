import { GamesList } from "./GamesList";
import GameService from "../../services/GameService";
import { GamesFilter } from "./GamesFilter";
import { useState } from "react";

const gameService = new GameService();

export default function GamesComponent() {

    const gamesArray = gameService.getGames();

    const [allGames, setAllGames] = useState(gamesArray);
    const [filteredGames, setFilteredGames] = useState(gamesArray);

    const handleFilteredGames = (filteredRecords)=> {
        setFilteredGames(filteredRecords);
    }

    return (
        <>
        <GamesFilter games={allGames} onFilter={handleFilteredGames} />
        <GamesList games={filteredGames} displayType="cards" />
        </>
    )
}