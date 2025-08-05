export function GameCard({ game }) {
    return (
        <div className="card">
            <img src={game.thumbnail} alt="Game Image" />
            <div className="card-content">
                <h3 className="game-title">{game.title}</h3>
                <p className="game-description">{game.shortDescription}</p>
                <a className="play-btn" href={game.gameUrl} target="_blank">Play</a>
            </div>
        </div>
    )
}