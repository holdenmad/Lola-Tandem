import React from 'react';

function Languages() {
    return (
        <div>
                <div class="row">
                    <div class="col-sm">
                        <label className="heading">Native Language</label>
                        <select
                        
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

                    </div>
                    <div class="col-sm">
                        <label className="heading">Learning Language</label>
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
                        </select>
                    </div>
                </div>
            </div>

    );
}

export default Languages;