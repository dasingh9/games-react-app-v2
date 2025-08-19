import { GamesList } from "./GamesList";
import GameService from "../../services/GameService";
import { GamesFilter } from "./GamesFilter";
import { useEffect, useState } from "react";
import { Flexbox } from "../shared/Flexbox";
import AddNewGame from "./AddNewGame";

const gameService = new GameService();

export default function GamesComponent() {

    const [allGames, setAllGames] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);
    const [showAddNewGameDialog, setShowAddNewGameDialog] = useState(false);
    
    useEffect(()=>{
        //gameService.getGames().then(gamesArray => {
        fetch("https://raw.githubusercontent.com/dasingh9/public/refs/heads/main/games-data.json")
        .then(response => response.json())
        .then(gamesArray=> {
            setAllGames(gamesArray);
            setFilteredGames(gamesArray);
        })
        
    }, []);

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