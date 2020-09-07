import React, { useState, useContext } from 'react';
import { AppContext } from "../Context/AppContext";
import SelectSearch from 'react-select-search';
import { cities } from './data/cities';


function Location() {
    const { state, setState, handleProfileFormChange } = useContext(AppContext);
    const [value, setValue] = useState(state.unsavedProfileState && state.unsavedProfileState.location ||
        state.profile && state.profile.location || null);
    const cityChanged = (value) => {
        console.log(value);
        setLocation({ city: value })
        const result = { target: { name: "location", value } }
        handleProfileFormChange(result)
    }
    console.log(value);
    const initialState = { city: value };
    const [location, setLocation] = useState(initialState)

    return (
        <div>
            <label className="heading">Location</label>
            <SelectSearch
                options={cities}
                onChange={cityChanged}
                search
                placeholder="Your location"
                className="select-search"
                value={location.city}
                name="learnlangs"
                selected={cities === cities.value ? true : false}
                key={cities.value}
            />

        </div>
    );
}

export default Location;

