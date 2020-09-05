import React, { useState, useContext } from 'react';
import { AppContext } from "../Context/AppContext";
import SelectSearch from 'react-select-search';
import { interests } from './data/interests';


function Interests() {
    const { state, handleProfileFormChange } = useContext(AppContext);
    const [value, setValue] = useState(state.unsavedProfileState && state.unsavedProfileState.interests ||
        state.profile && state.profile.interests || null);
    const interestChanged = (value) => {
        console.log(value);
        setInterest({ int: value })
        const result = { target: { name: "interests", value } }
        handleProfileFormChange(result)
    }
    console.log(value);
    const initialState = { int: value };
    const [interest, setInterest] = useState(initialState)

    return (
        <div>
            <label className="heading">Interests</label>
            <SelectSearch
                options={interests}
                onChange={interestChanged}
                search
                multiple
                placeholder="Select your interests"
                className="select-search select-search--multiple"
                value={interest.int}
                name="interests"
                selected={interests === interests.value ? true : false}
                key={interests.value}
            />
        </div>
    );
}

export default Interests;





// import React, { useState, useContext } from "react";
// import { AppContext } from "../Context/AppContext";

// const sports = ["Sports", "Teamsports", "Extreme Sports", "Skating", "Running", "Fitness", "Yoga"];
// const music = ["Music", "Concerts", "Playing Instruments", "Singing"];
// const inside = ["Inside Activities", "Video Gaming", "Board Gaming"];
// const culture = ["Culture", "Museums", "Reading", "Movies/Cinema"];
// const other = ["Photography", "Cooking", "Painting", "Travelling", "Sight Seeing"];

// const interests = ["Culture","Video Gaming","Inside Activities"]
// // state.profile.interests 
// function Interests() {
//     const { state, setState, handleProfileFormChange } = useContext(AppContext);
//     const [value, setValue] = useState("");


//     return (
//         <div>
//             <label className="heading" id="checkbox-group">Interests</label>
//             <div className="row">
//                 <form onChange={handleProfileFormChange} className="col-md interests">
//                     {sports.map((interest) => (
//                         <div>
//                             <input
//                                 key={interest}
//                                 selected={ interests.indexOf(interest)>-1 ? true : false }
//                                 value={interest}
//                                 type="checkbox"
//                                 name={interest}
//                                 id={interest}                                
//                                 className="checkbox"
//                             />
//                             <label className="interest" for={interest}>{interest}</label>
//                         </div>
//                     ))}
//                 </form>
//                 <div className="col-md interests">
//                     {music.map((music) => (
//                         <div>
//                             <input
//                                 key={music}
//                                 selected={music === value ? true : false}
//                                 value={music}
//                                 type="checkbox"
//                                 name={music}
//                                 id={music}
//                                 onChange={handleProfileFormChange}
//                                 className="checkbox"
//                             />
//                             <label className="interest" for={music}>{music}</label>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="col-md interests">
//                     {inside.map((inside) => (
//                         <div>
//                             <input
//                                 key={inside}
//                                 selected={inside === value ? true : false}
//                                 value={inside}
//                                 type="checkbox"
//                                 name={inside}
//                                 id={inside}
//                                 onChange={handleProfileFormChange}
//                                 className="checkbox"
//                             />
//                             <label className="interest" for={inside}>{inside}</label>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="col-md interests">
//                         {culture.map((culture) => (
//                             <div>
//                                 <input
//                                     key={culture}
//                                     selected={culture === value ? true : false}
//                                     value={culture}
//                                     type="checkbox"
//                                     name={culture}
//                                     id={culture}
//                                     onChange={handleProfileFormChange}
//                                     className="checkbox"
//                                 />
//                                 <label className="interest" for={culture}>{culture}</label>
//                             </div>
//                         ))}
//                 </div>
//                 <div className="col-md interests">
//                         {other.map((other) => (
//                             <div>
//                                 <input
//                                     key={other}
//                                     selected={other === value ? true : false}
//                                     value={other}
//                                     type="checkbox"
//                                     name={other}
//                                     id={other}
//                                     onChange={handleProfileFormChange}
//                                     className="checkbox"
//                                 />
//                                 <label className="interest" for={other}>{other}</label>
//                             </div>
//                         ))}
//                 </div>
//             </div >
//         </div >

//     );
// }

// export default Interests;