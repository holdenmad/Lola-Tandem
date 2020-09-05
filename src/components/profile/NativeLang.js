import React, { useState, useContext } from 'react';
import { AppContext } from "../Context/AppContext";
import SelectSearch from 'react-select-search';
import { languages } from './data/languages';


function NativeLanguages() {
    const { state, setState, handleProfileFormChange } = useContext(AppContext);
    const [value, setValue] = useState(state.unsavedProfileState && state.unsavedProfileState.nativelang ||
        state.profile && state.profile.nativelang || null);
    const dateChanged = (value) => {
        console.log(value);
        setBDate({ date: value })
        const result = { target: { name: "nativelang", value } }
        handleProfileFormChange(result)
    }
    console.log(value);
    const initialState = { date: value };
    const [bDate, setBDate] = useState(initialState)

    return (
        <div>
            <label className="heading">Native Language</label>
                <SelectSearch
                    options={languages}
                    onChange={dateChanged}
                    search
                    placeholder="Native Language"
                    className="select-search"
                    value={bDate.date}
                    name="nativelang"
                    selected={languages === languages.value ? true : false}
                    key={languages.value}
                />

            </div>
    );
}

export default NativeLanguages;