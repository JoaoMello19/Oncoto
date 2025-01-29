import { useState } from "react";

const styles = {
    hintOpen: { backgroundColor: "white", color: "black" },
    hintClosed: {},
};

const getStyle = (count, position) => {
    return count > position ? styles.hintOpen : styles.hintClosed;
};

const popFmt = new Intl.NumberFormat("pt-BR");
const areaFmt = new Intl.NumberFormat("pt-BR", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

const getValue = ({ continent_pt, population, area }, count, position) => {
    const placeholders = ["Continente", "População", "Área"];
    if (count <= position) return placeholders[position];
    switch (position) {
        case 0:
            return continent_pt;
        case 1:
            return popFmt.format(population) + " hab";
        case 2:
            return areaFmt.format(area) + " Km²";
        default:
            return "";
    }
    return "";
};

export default function InputContainer({
    country,
    hintCount,
    onCountrySubmit,
}) {
    const [inputValue, setInputValue] = useState("");

    return (
        <section id="input-container">
            <input
                type="text"
                id="country"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                onKeyDown={(event) => {
                    if (event.key === "Enter" && onCountrySubmit(event))
                        setInputValue("");
                }}
            />

            {country && (
                <div id="hints">
                    {[0, 1, 2].map((pos) => (
                        <p key={pos} style={getStyle(hintCount, pos)}>
                            {getValue(country, hintCount, pos)}
                        </p>
                    ))}
                </div>
            )}
        </section>
    );
}
