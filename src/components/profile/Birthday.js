import React, { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";

const days = [];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const years = [];

for (let day = 1; day < 32; day++) {
    days.push(day);
}
for (let year = 2015; year > 1900; year--) {
    years.push(year);
}

function Birthday() {
    const { state, setState, handleProfileFormChange } = useContext(AppContext);
    const [value, setValue] = useState(state.unsavedProfileState && state.unsavedProfileState.days || state.profile && state.profile.days || null);


    return (
        <div>
            <label className="heading">Date of Birth</label>
            <div className="birthday">
                <select
                    onChange={handleProfileFormChange}
                    as="select"
                    name="days"
                    className="form-control small"
                >
                    {/* <option value="" disabled selected>Day</option> */}

                    {days.map((day) => (
                        <option
                            key={day}
                            selected={day === value ? true : false}
                            value={value}
                        >
                            {day}
                        </option>
                    ))}
                </select>
                <select
                    onChange={handleProfileFormChange}
                    as="select"
                    name="months"
                    className="form-control medium"
                >
                    {/* <option value="" disabled selected>Month</option> */}

                    {months.map((month) => (
                        <option
                            key={month}
                            selected={month === value ? true : false}
                            value={month}
                            playceholder="months"
                        >
                            {month}
                        </option>
                    ))}
                </select>              
                <select
                    onChange={handleProfileFormChange}
                    as="select"
                    name="years"
                    className="form-control small"
                >
                    {/* <option value="" disabled selected>Year</option> */}

                    {years.map((year) => (
                        <option
                            key={year}
                            selected={year === value ? true : false}
                            value={year}
                        >
                            {year}
                        </option>
                    ))}
                </select>              
            </div>
        </div>
    );
}

export { Birthday };