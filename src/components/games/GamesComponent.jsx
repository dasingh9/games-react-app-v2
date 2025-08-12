import { GamesList } from "./GamesList";
import GameService from "../../services/GameService";
import { GamesFilter } from "./GamesFilter";
import { useState } from "react";
import { Flexbox } from "../shared/Flexbox";
import AddNewGame from "./AddNewGame";

const gameService = new GameService();

export default function GamesComponent() {

    const gamesArray = gameService.getGames();

    const [allGames, setAllGames] = useState(gamesArray);
    const [filteredGames, setFilteredGames] = useState(gamesArray);

    const [showAddNewGameDialog, setShowAddNewGameDialog] = useState(false);

    console.log(`COMPONENT RENDRED AT ${new Date()}`);

    const handleFilteredGames = (filteredRecords) => {
        setFilteredGames(filteredRecords);
    }

    const handleAddGame = (game) => {
        const games = [...allGames, game];
        setAllGames(games);
        setFilteredGames(games);


    }

    return (
        <>
            <Flexbox>
                <button className="btn btn-success" onClick={() => { setShowAddNewGameDialog(true) }}>Create New Game</button>
            </Flexbox>
            
            {showAddNewGameDialog && <AddNewGame onAdd={handleAddGame} onClose={() => { setShowAddNewGameDialog(false) }} />}

            <GamesFilter games={allGames} onFilter={handleFilteredGames} />
            <GamesList games={filteredGames} displayType="cards" />
        </>
    )
}