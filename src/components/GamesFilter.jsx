import { Flexbox } from "./Flexbox";

export function GamesFilter() {
    return (
        <form>
            <Flexbox>
                <input
                    type="text" name="keyword"
                    className="input-name-filter">
                </input>
                <select name="genre" id="genre">
                    <option value="Shooter">Shooter</option>
                    <option value="ARPG">ARPG</option>
                    <option value="Strategy">Strategy</option>
                </select>
            </Flexbox>
        </form>
    )
}