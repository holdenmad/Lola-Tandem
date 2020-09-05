import React, { useState, useContext } from 'react';
import { DatePicker } from 'react-rainbow-components';
import 'react-datepicker/dist/react-datepicker.css'
import { AppContext } from "../Context/AppContext";


const containerStyles = {
    maxWidth: 200,
};

function Bday() {
    const { state, setState, handleProfileFormChange } = useContext(AppContext);
    const [value, setValue] = useState(state.unsavedProfileState && state.unsavedProfileState.birthday || 
        state.profile && state.profile.birthday || null);
    const dateChanged = (value) => {
        setBDate({ date: value })
        const result = {target:{name:"birthday", value}}
        handleProfileFormChange(result)
    }
 
    const initialState = { date: value };
    const [bDate, setBDate] = useState(initialState)
    return (
        <div
            className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
            style={containerStyles}
        >
            <DatePicker
                value={bDate.date}
                minDate={new Date(1900, 0, 4)}
                maxDate={new Date(2020, 9, 1)}
                label="DatePicker Label"
                onChange={dateChanged}
            />
        </div>

    );
}

export default Bday;





