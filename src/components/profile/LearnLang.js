import React, { useState, useContext } from 'react';
import { AppContext } from "../Context/AppContext";
import SelectSearch from 'react-select-search';
import { languages } from './data/languages';


function LearningLanguages() {
    const { state, setState, handleProfileFormChange } = useContext(AppContext);
    const [value, setValue] = useState(state.unsavedProfileState && state.unsavedProfileState.learnlangs ||
        state.profile && state.profile.learnlangs || null);
    const dateChanged = (value) => {
        console.log(value);
        setBDate({ date: value })
        const result = { target: { name: "learnlangs", value } }
        handleProfileFormChange(result)
    }
    console.log(value);
    const initialState = { date: value };
    const [bDate, setBDate] = useState(initialState)

    return (
        <div>
            <label className="heading">Learning Language</label>
            <SelectSearch
                options={languages}
                onChange={dateChanged}
                search
                placeholder="Learning Language"
                className="select-search"
                value={bDate.date}
                name="learnlangs"
                selected={languages === languages.value ? true : false}
                key={languages.value}
            />

        </div>
    );
}

export default LearningLanguages;