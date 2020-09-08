import React from 'react';
import SelectSearch from 'react-select-search';


function Dropdown({val, set, title, choices, placeholder}) {
    const changed = (value) => {
        console.log(value);
        set(value)
    }

    return (
        <div>
            <label className="heading">{title}</label>
            <SelectSearch
                options={choices}
                search                
                placeholder={placeholder}
                className="select-search"
                name="location"
                value={val}
                onChange={changed}
                key={choices.value}
            />

        </div>
    );
}

export default Dropdown;

