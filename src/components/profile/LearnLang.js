import React, { useState, useContext } from 'react';
import { AppContext } from "../Context/AppContext";
import SelectSearch from 'react-select-search';
import { languages } from './data/languages';


function LearningLanguages() {
    const { state, handleProfileFormChange } = useContext(AppContext);
    const [value, setValue] = useState((state.unsavedProfileState && state.unsavedProfileState.learnlangs) ||
        (state.profile && state.profile.learnlangs) || null);
    const nativeChanged = (value) => {
        console.log(value);
        setNative({ lang: value })
        const result = { target: { name: "learnlangs", value } }
        handleProfileFormChange(result)
    }
    console.log(value);
    const initialState = { lang: value };
    const [native, setNative] = useState(initialState)

    return (
        <div>
            <label className="heading">Learning Language</label>
            <SelectSearch
                options={languages}
                onChange={nativeChanged}
                search
                placeholder="Learning Language"
                className="select-search"
                value={native.lang}
                name="learnlangs"
                selected={languages === languages.value ? true : false}
                key={languages.value}
            />

        </div>
    );
}

export default LearningLanguages;