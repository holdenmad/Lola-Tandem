import React, { useState, useContext } from 'react';
import { AppContext } from "../Context/AppContext";
import SelectSearch from 'react-select-search';
import { cities } from './data/cities';

function Location() {
    const { state, setState, handleProfileFormChange } = useContext(AppContext);
    const [value, setValue] = useState(
        state.unsavedProfileState && state.unsavedProfileState.location ||
        state.profile && state.profile.location || 
        null
        );
    const cityChanged = (value) => {
        console.log(value);
        setLocation1(value)
        const result = { target: { name: "location", value } };
        console.log("cityChanged");
        handleProfileFormChange(result)
    }
    console.log(value);
    console.log(state);
    const initialState = value;
    const [location1, setLocation1] = useState(initialState)

    return (
        <div>
            <label className="heading">Location</label>
            <SelectSearch
                options={cities}
                search
                
                placeholder="Your location"
                className="select-search"
                name="location"
                value={location1}
                selected={cities === cities.value ? true : false}
                onChange={cityChanged}
                key={cities.value}
            />

        </div>
    );
}

export default Location;

