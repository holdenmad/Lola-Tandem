import React from 'react';

function FreeText({val, set, title, placeholder}) {
    const changed = (e) => {
        console.log(e.target.value);
        set(e.target.value)
    }
    
    return (
        <div>
            <label className="heading" htmlFor="freetext">{title}</label>
            <textarea
                className="form-control"
                id="freetext"
                name="freetext"
                rows="4"
                cols="50"
                placeholder={placeholder}
                value={val}
                onChange={changed}
            >
       
            </textarea>
        </div>
    );
}

export default FreeText;