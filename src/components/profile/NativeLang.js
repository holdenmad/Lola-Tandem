import React, { useState, useContext } from 'react';
import { AppContext } from "../Context/AppContext";
import SelectSearch from 'react-select-search';
import { languages } from './data/languages';


function NativeLanguages() {
    const { state, setState, handleProfileFormChange } = useContext(AppContext);
    const [value, setValue] = useState((state.unsavedProfileState && state.unsavedProfileState.nativelang) ||
        (state.profile && state.profile.nativelang) || null);
    const nativeChanged = (value) => {

        console.log(value);
        setNative(value)
        const result = { target: { name: "nativelang", value } }
        handleProfileFormChange(result)
    }
    console.log(value);
    const initialState = value;
    const [native, setNative] = useState(initialState)

    return (
        <div>
            <label className="heading">Native Language</label>
                <SelectSearch
                    options={languages}
                    onChange={nativeChanged}
                    search
                    multiple
                    placeholder="Native Language"
                    className="select-search select-search--multiple"
                    value={native}
                    name="nativelang"
                    key={languages.value}
                />

            </div>
    );
}

export default NativeLanguages;