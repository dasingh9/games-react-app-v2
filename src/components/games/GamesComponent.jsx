import { GamesList } from "./GamesList";
import GameService from "../../services/GameService";
import { GamesFilter } from "./GamesFilter";

export default function GamesComponent() {
    const gameService = new GameService();
    const gamesArray = gameService.getGames();

    return (
        <>
        <GamesFilter />
        <GamesList games={gamesArray} displayType="cards" />
        </>
    )
}