import React from 'react';
import SelectSearch from 'react-select-search';
import { cities } from './data/cities';

function Location({val, set}) {
    const changed = (value) => {
        console.log(value);
        set(value)
        // const result = { target: { name: "location", value } };
        // console.log("cityChanged");
        // handleProfileFormChange(result)
    }

    return (
        <div>
            <label className="heading">Location</label>
            <SelectSearch
                options={cities}
                search                
                placeholder="Your location"
                className="select-search"
                name="location"
                value={val}
                onChange={changed}
                key={cities.value}
            />

        </div>
    );
}

export default Location;

