import React from 'react';
import { Formik } from "formik";

function Avatar() {
    return (
        <div>
            <div className="form-group">
                <label>Profile Photo</label> <br />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Face-smile.svg/2000px-Face-smile.svg.png" alt="profile-photo" width="100px" />
            </div>
        </div>
    );
}

export default Avatar;