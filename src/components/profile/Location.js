import React, { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";

const location = ["Aachen", "Augsburg", "Bergisch Gladbach", "Berlin", "Bielefeld", "Bochum", "Bonn", "Bottrop", "Braunschweig", "Bremen", "Bremer­haven", "Chemnitz", "Darmstadt", "Dortmund", "Dresden", "Duisburg", "Düsseldorf", "Erfurt", "Erlangen", "Essen", "Frankfurt am Main", "Freiburg im Breisgau", "Fürth", "Gelsenkirchen", "Göttingen", "Gütersloh", "Hagen", "Halle (Saale)", "Hamburg", "Hamm", "Hannover", "Heidelberg", "Heilbronn", "Herne", "Hildesheim", "Ingolstadt", "Jena", "Kaiserslautern", "Karlsruhe", "Kassel", "Kiel", "Koblenz", "Köln", "Krefeld", "Leipzig", "Leverkusen", "Lübeck", "Ludwigshafen am Rhein", "Magdeburg", "Mainz", "Mannheim", "Moers", "Mönchen­gladbach", "Mülheim an der Ruhr", "München", "Münster", "Neuss", "Nürnberg", "Oberhausen", "Offenbach am Main", "Oldenburg", "Osnabrück", "Paderborn", "Pforzheim", "Potsdam", "Recklinghausen", "Regensburg", "Remscheid", "Reutlingen", "Rostock", "Saarbrücken", "Salzgitter", "Siegen", "Solingen", "Stuttgart", "Trier", "Ulm", "Wiesbaden", "Wolfsburg", "Wuppertal", "Würzburg",]

function Location() {
    const { state, setState, handleProfileFormChange } = useContext(AppContext);
    const [value, setValue] = useState("");

    return (
        <div>
            <label className="heading">Location</label>
            <select
                onChange={handleProfileFormChange}
                as="select"
                name="location"
                className="form-control large"
            >
                <option value="" disabled selected></option>
                {location.map((city) => (
                    <option
                        key={city}
                        selected={city === value ? true : false}
                        value={city}
                    >
                        {city}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Location;