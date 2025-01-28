import { useState } from "react";

export default function InputContainer({
    country,
    hintCount,
    onCountrySubmit,
}) {
    const [inputValue, setInputValue] = useState("");

    const popFmt = new Intl.NumberFormat("pt-BR");
    const areaFmt = new Intl.NumberFormat("pt-BR", {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return (
        <section id="input-container">
            <input
                type="text"
                id="country"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        onCountrySubmit(event);
                        setInputValue("");
                    }
                }}
            />
            <div id="hints">
                <p>
                    {country && hintCount > 0
                        ? country.continent_pt
                        : "Continente"}
                </p>
                <p>
                    {country && hintCount > 1
                        ? popFmt.format(country.population)
                        : "População"}
                </p>
                <p>
                    {country && hintCount > 2
                        ? areaFmt.format(country.area)
                        : "Área"}
                </p>
            </div>
        </section>
    );
}
