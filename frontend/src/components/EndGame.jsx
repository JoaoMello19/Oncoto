import "./EndGame.css";

export default function EndGame({ tries, hints, selectedCountry }) {
    return (
        <div id="end-game">
            <p>Você acertou</p>
            <p id="country-name">{selectedCountry.country_pt}</p>
            <p>
                com {tries.length} tentativa(s) e {hints} dica(s)!
            </p>
        </div>
    );
}
