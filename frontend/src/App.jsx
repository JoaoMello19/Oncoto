import { useEffect, useState } from "react";
import Header from "./components/Header";
import InputContainer from "./components/InputContainer";
import RulesModal from "./components/RulesModal";

export default function App() {
    const [countries, setCountries] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const [hintCount, setHintCount] = useState(0);

    const [tries, setTries] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/data")
            .then((response) => response.json())
            .then((data) => {
                setCountries(data);
                const randomIndex = Math.floor(Math.random() * data.length);
                setSelectedCountry(data[randomIndex]);
            })
            .catch(console.error);
    }, []);

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
        if (hintCount < 3) {
            setHintCount(hintCount + 1);
        }
    }

    function onCountrySubmit(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            const inputValue = document.getElementById("country").value;
            const matchedCountry = countries.find(
                (c) => c.country_pt.toLowerCase() == inputValue.toLowerCase()
            );

            if (matchedCountry) {
                console.log("Achei esse país:", matchedCountry);
                setTries([...tries, matchedCountry]); // TODO: verificar duplicação...
            } else {
                console.log("Não achei esse país...");
            }
        }
    }

    return (
        <main>
            {showModal && <RulesModal closeModal={() => setShowModal(false)} />}
            <Header onHelpClick={onHelpClick} onHintClick={onHintClick} />

            {/* TODO: Exibir as regras do jogo */}

            <InputContainer
                country={selectedCountry}
                hintCount={hintCount}
                onCountrySubmit={onCountrySubmit}
            />

            <section id="try-list"></section>

            <pre>{JSON.stringify(selectedCountry, null, 4)}</pre>
        </main>
    );
}
