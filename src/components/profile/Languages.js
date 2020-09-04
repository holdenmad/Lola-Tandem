import React, { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";
import SelectSearch from 'react-select-search';
import { languages } from './data/languages';

const nativeLang = ["English", "German", "French", "Spanish", "Portuguese", "Italian", "Arabic", "Bengali", "Bulgarian", "Croatian", "Czech", "Danish", "Dutch", "Estonian", "Finnish", "Greek", "Hindi", "Hungarian", "Indonesian", "Irish", "Latvian", "Lithuanian", "Malay", "Maltese", "Mandarin Chinese", "Polish", "Romanian", "Russian", "Sign Language", "Slovak", "Slovene", "Swedish"];
const learnLang = ["English", "German", "French", "Spanish", "Portuguese", "Italian", "Arabic", "Bengali", "Bulgarian", "Croatian", "Czech", "Danish", "Dutch", "Estonian", "Finnish", "Greek", "Hindi", "Hungarian", "Indonesian", "Irish", "Latvian", "Lithuanian", "Malay", "Maltese", "Mandarin Chinese", "Polish", "Romanian", "Russian", "Sign Language", "Slovak", "Slovene", "Swedish"];

function Languages() {
    const { state, setState, handleProfileFormChange } = useContext(AppContext);
    const [value, setValue] = useState(state.unsavedProfileState && state.unsavedProfileState.nativelang || state.profile && state.profile.nativelang || null);
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



{/* <select

                        name="nativeLang"
                        className="form-control"
                    >
                        <option value="" disabled selected>Native Language</option>
                        <option value="English">English</option>
                        <option value="German">German</option>
                        <option value="French">French</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Portuguese">Portuguese</option>
                        <option value="Italian">Italian</option>
                        <option value="" disabled>---------</option>
                        <option value="Arabic">Arabic</option>
                        <option value="Bengali">Bengali</option>
                        <option value="Bulgarian">Bulgarian</option>
                        <option value="Croatian">Croatian</option>
                        <option value="Czech">Czech</option>
                        <option value="Danish">Danish</option>
                        <option value="Dutch">Dutch</option>
                        <option value="Estonian">Estonian</option>
                        <option value="Finnish">Finnish</option>
                        <option value="Greek">Greek</option>
                        <option value="Hindustani">Hindustani</option>
                        <option value="Hungarian">Hungarian</option>
                        <option value="Indonesian">Indonesian</option>
                        <option value="Irish">Irish</option>
                        <option value="Latvian">Latvian</option>
                        <option value="Lithuanian">Lithuanian</option>
                        <option value="Malay">Malay</option>
                        <option value="Maltese">Maltese</option>
                        <option value="MandarinChinese">Mandarin Chinese</option>
                        <option value="Polish">Polish</option>
                        <option value="Romanian">Romanian</option>
                        <option value="Russian">Russian</option>
                        <option value="SignLanguage">Sign Language</option>
                        <option value="Slovak">Slovak</option>
                        <option value="Slovene">Slovene</option>
                        <option value="Swedish">Swedish</option>
                    </select>
                                        <select

                        name="LearningLang"
                        className="form-control">
                        <option value="" disabled selected>Learning Language</option>
                        <option value="English">English</option>
                        <option value="German">German</option>
                        <option value="French">French</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Portuguese">Portuguese</option>
                        <option value="Italian">Italian</option>
                        <option value="" disabled>---------</option>
                        <option value="Arabic">Arabic</option>
                        <option value="Bengali">Bengali</option>
                        <option value="Bulgarian">Bulgarian</option>
                        <option value="Croatian">Croatian</option>
                        <option value="Czech">Czech</option>
                        <option value="Danish">Danish</option>
                        <option value="Dutch">Dutch</option>
                        <option value="Estonian">Estonian</option>
                        <option value="Finnish">Finnish</option>
                        <option value="Greek">Greek</option>
                        <option value="Hindustani">Hindustani</option>
                        <option value="Hungarian">Hungarian</option>
                        <option value="Indonesian">Indonesian</option>
                        <option value="Irish">Irish</option>
                        <option value="Latvian">Latvian</option>
                        <option value="Lithuanian">Lithuanian</option>
                        <option value="Malay">Malay</option>
                        <option value="Maltese">Maltese</option>
                        <option value="MandarinChinese">Mandarin Chinese</option>
                        <option value="Polish">Polish</option>
                        <option value="Romanian">Romanian</option>
                        <option value="Russian">Russian</option>
                        <option value="SignLanguage">Sign Language</option>
                        <option value="Slovak">Slovak</option>
                        <option value="Slovene">Slovene</option>
                        <option value="Swedish">Swedish</option>
                    </select> */}
