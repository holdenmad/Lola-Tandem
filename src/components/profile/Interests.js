import React, { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";

const sports = ["Sports", "Teamsports", "Extreme Sports", "Skating", "Running", "Fitness", "Yoga"];
const music = ["Music", "Concerts", "Playing Instruments", "Singing"];
const inside = ["Inside Activities", "Video Gaming", "Board Gaming"];
const culture = ["Culture", "Museums", "Reading", "Movies/Cinema"];
const other = ["Photography", "Cooking", "Painting", "Travelling", "Sight Seeing"];

function Interests() {
    const { state, setState } = useContext(AppContext);
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        console.log(state);
        const key = e.target.name;
        const newState = { ...state };
        newState.unsavedProfileState = {
            ...newState.unsavedProfileState,
            [key]: e.target.value,
        };
        console.log(key, newState);
        setState(newState);
    };
    return (
        <div>
            <label className="heading" id="checkbox-group">Interests</label>
            <div className="row">
                <div className="col-md interests">
                    {sports.map((interest) => (
                        <div>
                            <input
                                key={interest}
                                selected={interest === value ? true : false}
                                value={interest}
                                type="checkbox"
                                name={interest}
                                id={interest}
                                onChange={handleChange}
                                className="checkbox"
                            />
                            <label className="interest" for={interest}>{interest}</label>
                        </div>
                    ))}
                </div>
                <div className="col-md interests">
                    {music.map((music) => (
                        <div>
                            <input
                                key={music}
                                selected={music === value ? true : false}
                                value={music}
                                type="checkbox"
                                name={music}
                                id={music}
                                onChange={handleChange}
                                className="checkbox"
                            />
                            <label className="interest" for={music}>{music}</label>
                        </div>
                    ))}
                </div>
                <div className="col-md interests">
                    {inside.map((inside) => (
                        <div>
                            <input
                                key={inside}
                                selected={inside === value ? true : false}
                                value={inside}
                                type="checkbox"
                                name={inside}
                                id={inside}
                                onChange={handleChange}
                                className="checkbox"
                            />
                            <label className="interest" for={inside}>{inside}</label>
                        </div>
                    ))}
                </div>
                <div className="col-md interests">
                        {culture.map((culture) => (
                            <div>
                                <input
                                    key={culture}
                                    selected={culture === value ? true : false}
                                    value={culture}
                                    type="checkbox"
                                    name={culture}
                                    id={culture}
                                    onChange={handleChange}
                                    className="checkbox"
                                />
                                <label className="interest" for={culture}>{culture}</label>
                            </div>
                        ))}
                </div>
                <div className="col-md interests">
                        {other.map((other) => (
                            <div>
                                <input
                                    key={other}
                                    selected={other === value ? true : false}
                                    value={other}
                                    type="checkbox"
                                    name={other}
                                    id={other}
                                    onChange={handleChange}
                                    className="checkbox"
                                />
                                <label className="interest" for={other}>{other}</label>
                            </div>
                        ))}
                </div>
            </div >
        </div >

    );
}

export default Interests;