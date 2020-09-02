import React, { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";

const nativLang = ["English", "German", "French", "Spanish", "Portuguese", "Italian", "Arabic", "Bengali", "Bulgarian", "Croatian", "Czech", "Danish", "Dutch", "Estonian", "Finnish", "Greek", "Hindi", "Hungarian", "Indonesian", "Irish", "Latvian", "Lithuanian", "Malay", "Maltese", "Mandarin Chinese", "Polish", "Romanian", "Russian", "Sign Language", "Slovak", "Slovene", "Swedish"];
const learnLang = ["English", "German", "French", "Spanish", "Portuguese", "Italian", "Arabic", "Bengali", "Bulgarian", "Croatian", "Czech", "Danish", "Dutch", "Estonian", "Finnish", "Greek", "Hindi", "Hungarian", "Indonesian", "Irish", "Latvian", "Lithuanian", "Malay", "Maltese", "Mandarin Chinese", "Polish", "Romanian", "Russian", "Sign Language", "Slovak", "Slovene", "Swedish"];

function Languages() {
    const { state, setState, handleProfileFormChange } = useContext(AppContext);
    const [value, setValue] = useState("");


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
                        {nativLang.slice(0, 5).map((nativL) => (
                            <option
                                key={nativL}
                                selected={nativL === value ? true : false}
                                value={nativL}
                            >
                                {nativL}
                            </option>
                        ))}
                        <option value="" disabled>---------</option>
                        {nativLang.slice(6, nativLang.length).map((nativL) => (
                            <option
                                key={nativL}
                                selected={nativL === value ? true : false}
                                value={nativL}
                            >
                                {nativL}
                            </option>
                        ))}
                    </select>


                </div>
                <div className="col-sm">
                    <label className="heading">Learning Language</label>
                    <select
                        onChange={handleProfileFormChange}
                        as="select"
                        name="learnLang"
                        className="form-control"
                    >
                        <option value="" disabled selected>Learning Language</option>
                        {learnLang.slice(0, 5).map((learnL) => (
                            <option
                                key={learnL}
                                selected={learnL === value ? true : false}
                                value={learnL}
                            >
                                {learnL}
                            </option>
                        ))}
                        <option value="" disabled>---------</option>
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
