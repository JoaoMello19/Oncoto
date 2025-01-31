export default function CountryList({ tries, selectedCountry }) {
    return (
        <table>
            <thead>
                <tr>
                    <th className="country-name">País</th>
                    <th className="country-info">Continente</th>
                    <th className="country-info">População</th>
                    <th className="country-info">Área</th>
                </tr>
            </thead>
            <tbody id="try-list">
                {tries.map((country) => {
                    const tips = {};
                    if (country.continent === selectedCountry.continent)
                        tips.continent = "Igual";
                    else tips.continent = "Diferente";
                    ["population", "area"].forEach((attr) => {
                        if (country[attr] > selectedCountry[attr])
                            tips[attr] = "Maior";
                        else if (country[attr] < selectedCountry[attr])
                            tips[attr] = "Menor";
                        else tips[attr] = "Igual";
                    });
                    return (
                        // TODO: melhorar a exibição
                        <tr className="try-row" key={country.country}>
                            <td className="country-name">{country.country_pt}</td>
                            <td className="country-info">{tips.continent}</td>
                            <td className="country-info">{tips.population}</td>
                            <td className="country-info">{tips.area}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
