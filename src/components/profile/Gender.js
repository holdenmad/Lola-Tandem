import React from 'react';
import "../app.less";

function Gender() {
    return (
    <div>
        <label>Gender</label>
        <select
            as="select"
            name="gender"
            className="form-control gender">
            <option value=""></option>
            <option value="other">other</option>
            <option value="female">female</option>
            <option value="male">male</option>
        </select>
    </div>
    );
}

export default Gender;