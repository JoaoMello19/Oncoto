import InputContainer from "./components/InputContainer";
import RulesModal from "./components/RulesModal";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import CountryList from "./components/CountryList";

export default function App() {
    const [countries, setCountries] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const [showInput, setShowInput] = useState(true);
    const [hintCount, setHintCount] = useState(0);
    const [tries, setTries] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/data")
            .then((response) => response.json())
            .then((data) => {
                setCountries(
                    data.map((country) => {
                        return {
                            ...country,
                            population: Number.parseInt(country.population),
                            area: Number.parseInt(country.area),
                        };
                    })
                );
                const randomIndex = Math.floor(Math.random() * data.length);
                setSelectedCountry(data[randomIndex]);
            })
            .catch(console.error);
    }, []);

    // TODO: implementar pequenas correções no nome
    function levenshteinDistance(a, b) {
        const matrix = Array(a.length + 1)
            .fill(null)
            .map(() => Array(b.length + 1).fill(null));

        for (let i = 0; i <= a.length; i++) {
            matrix[i][0] = i;
        }
        for (let j = 0; j <= b.length; j++) {
            matrix[0][j] = j;
        }

        for (let i = 1; i <= a.length; i++) {
            for (let j = 1; j <= b.length; j++) {
                const cost = a[i - 1] === b[j - 1] ? 0 : 1;
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1, // Remoção
                    matrix[i][j - 1] + 1, // Inserção
                    matrix[i - 1][j - 1] + cost // Substituição
                );
            }
        }

        return matrix[a.length][b.length];
    }

    function onHelpClick() {
        setShowModal(true);
    }

    function onHintClick() {
        if (showInput && hintCount < 3) setHintCount(hintCount + 1);
    }

    function compareCountries(c1, c2) {
        const country1 = c1.country_pt.toLowerCase();
        const country2 = c2.country_pt.toLowerCase();
        return country1 == country2;
    }

    function onCountrySubmit(inputValue) {
        const matchedCountry = countries.find(
            (country) =>
                country.country_pt.toLowerCase() == inputValue.toLowerCase()
        );

        if (matchedCountry) {
            console.log("Achei esse país:", matchedCountry);
            if (!tries.find((c) => compareCountries(c, matchedCountry)))
                setTries([matchedCountry, ...tries]);

            if (compareCountries(matchedCountry, selectedCountry)) {
                console.log("Acertou com", tries.length + 1, "tentativas!");
                setShowInput(false);
                // TODO: fazer a tela de fim de jogo
            }

            return true;
        }

        console.log("Não achei esse país...");
        // TODO: animar/demonstar ao erro
        return false;
    }

    return (
        <main>
            {showModal && <RulesModal closeModal={() => setShowModal(false)} />}

            <Header onHelpClick={onHelpClick} onHintClick={onHintClick} />

            {showInput && (
                <InputContainer
                    country={selectedCountry}
                    hintCount={hintCount}
                    onCountrySubmit={onCountrySubmit}
                />
            )}

            {tries.length > 0 && (
                <CountryList tries={tries} selectedCountry={selectedCountry} />
            )}

            {/* <pre>{JSON.stringify(selectedCountry, null, 4)}</pre> */}
        </main>
    );
}
