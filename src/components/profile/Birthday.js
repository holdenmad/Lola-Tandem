import React from 'react';
import 'react-datepicker/dist/react-datepicker.css'
import { DatePicker } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 200,
};

function Birthday({val, set}) {
    const changed = (value) => {
        console.log(value);
        set(value)
    }

    return (
        <div>
            <label className="heading">Date of Birth</label>
            <div
                className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
                style={containerStyles}
            >
                <DatePicker
                    value={val}
                    minDate={new Date(1900, 0, 4)}
                    maxDate={new Date(2020, 9, 1)}
                    onChange={changed}
                />
            </div>
        </div>

    );
}

export default Birthday;





