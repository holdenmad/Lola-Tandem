import React from 'react';
import SelectSearch from 'react-select-search';
import { interests } from './data/interests';


function Interests({val, set}) {
    const changed = (value) => {
        console.log(value);
        set(value)
    }

    return (
        <div>
            <label className="heading">Interests</label>
            <SelectSearch
                options={interests}
                onChange={changed}
                search
                multiple
                placeholder="Select your interests"
                className="select-search select-search--multiple"
                value={val}
                name="interests"
                key={interests.value}
            />
        </div>
    );
}

export default Interests;
