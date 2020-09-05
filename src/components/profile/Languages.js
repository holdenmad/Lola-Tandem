import React, { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";
import SelectSearch from 'react-select-search';
import { languages } from './data/languages';

const nativeLang = ["English", "German", "French", "Spanish", "Portuguese", "Italian", "Arabic", "Bengali", "Bulgarian", "Croatian", "Czech", "Danish", "Dutch", "Estonian", "Finnish", "Greek", "Hindi", "Hungarian", "Indonesian", "Irish", "Latvian", "Lithuanian", "Malay", "Maltese", "Mandarin Chinese", "Polish", "Romanian", "Russian", "Sign Language", "Slovak", "Slovene", "Swedish"];
const learnLang = ["English", "German", "French", "Spanish", "Portuguese", "Italian", "Arabic", "Bengali", "Bulgarian", "Croatian", "Czech", "Danish", "Dutch", "Estonian", "Finnish", "Greek", "Hindi", "Hungarian", "Indonesian", "Irish", "Latvian", "Lithuanian", "Malay", "Maltese", "Mandarin Chinese", "Polish", "Romanian", "Russian", "Sign Language", "Slovak", "Slovene", "Swedish"];

function Languages() {
    const { state, handleProfileFormChange } = useContext(AppContext);
    const [value, setValue] = useState((state.unsavedProfileState && state.unsavedProfileState.nativelang) || (state.profile && state.profile.nativelang) || null);
    // const [value, setValue] = useState(state.unsavedProfileState && state.unsavedProfileState.learnlang || state.profile && state.profile.learnlang || null);


    return (
        <div>
            <div className="row">
                <div className="col-sm">
                    <label className="heading">Native Language</label>
                    <select
                        onChange={handleProfileFormChange}
                        as="select"
                        name="nativLang"
                        className="form-control"
                    >
                        <option value="" disabled selected>Native Language</option>
                        {nativeLang.slice(0, 5).map((nativeL) => (
                            <option
                                key={nativeL}
                                selected={nativeL === value ? true : false}
                                value={nativeL}
                            >
                                {nativeL}
                            </option>
                        ))}
                        <option value="" disabled>---------</option>
                        {nativeLang.slice(6, nativeLang.length).map((nativeL) => (
                            <option
                                key={nativeL}
                                selected={nativeL === value ? true : false}
                                value={nativeL}
                            >
                                {nativeL}
                            </option>
                        ))}
                    </select>
                    <SelectSearch
                        options={languages}
                        onChange={handleProfileFormChange}
                        search
                        placeholder="Native Language"
                        className="select-search"
                        value={languages.name}
                        name="nativelang"
                        selected={languages === languages.value ? true : false}
                        key={languages.value}
                    />


                </div>
                <div className="col-sm">
                    <label className="heading">Learning Language</label>
                    <select
                        onChange={handleProfileFormChange}
                        as="select"
                        name="learnLang"
                        className="form-control"
                    >
                        {/* <option value="" disabled selected>Learning Language</option> */}
                        {learnLang.slice(0, 5).map((learnL) => (
                            <option
                                key={learnL}
                                selected={learnL === value ? true : false}
                                value={learnL}
                            >
                                {learnL}
                            </option>
                        ))}
                        {/* <option value="" disabled>---------</option> */}
                        {learnLang.slice(6, learnLang.length).map((learnL) => (
                            <option
                                key={learnL}
                                selected={learnL === value ? true : false}
                                value={learnL}
                            >
                                {learnL}
                            </option>
                        ))}
                    </select>
                    <SelectSearch
                        options={languages}
                        onChange={handleProfileFormChange}
                        search
                        placeholder="Learning Language"
                        className="select-search"
                        value={languages.name}
                        name="learnlangs"
                        selected={languages === languages.value ? true : false}
                        key={languages.value}
                    />


                </div>
            </div>
        </div>

    );
}

export default Languages;