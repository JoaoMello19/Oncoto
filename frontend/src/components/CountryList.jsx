import { ArrowDown, ArrowUp, EqualIcon, EqualNotIcon } from "lucide-react";

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
                        tips.continent = <EqualIcon style={{height: 20, width: 20}} />;
                    else tips.continent = <EqualNotIcon style={{height: 20, width: 20}} />;
                    ["population", "area"].forEach((attr) => {
                        if (country[attr] > selectedCountry[attr])
                            tips[attr] = <ArrowUp style={{height: 20, width: 20}} />;
                        else if (country[attr] < selectedCountry[attr])
                            tips[attr] = <ArrowDown style={{height: 20, width: 20}} />;
                        else tips[attr] = <EqualIcon style={{height: 20, width: 20}} />;
                    });
                    return (
                        // TODO: melhorar a exibição
                        <tr className="try-row" key={country.country}>
                            <td className="country-name">
                                {country.country_pt}
                            </td>
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
