import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Gender from "./Gender"
import Avatar from "./Avatar"
import { Birthday } from "./Birthday"
import FreeText from "./FreeText"
import Interests from "./Interests"
import Languages from "./Languages"
import Location from "./Location"

import { accountService, alertService } from "@/_services";

function UserProfile({ history }) {
    const user = accountService.userValue;
    const initialValue = {
        freetext: "",
        Avatar:"",
        Gender:"",
        Birthday:"",
        Location:"",
        Languages:"",
        Interests:"",
    };
    const [formState, setFormState] = useState(initialValue);
    const [isSubmitting, setIsSubmitting] = useState(false);
    function onSubmit(fields, { setStatus, setSubmitting }) {
        setStatus();
        accountService
            .update(user.id, fields)
            .then(() => {
                alertService.success("Update successful", {
                    keepAfterRouteChange: true,
                });
                history.push(".");
            })
            .catch((error) => {
                setSubmitting(false);
                alertService.error(error);
            });
    }
    function handleChange (e) {
        const key = e.target.name

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true)
    }

    return (

        <form onSubmit={handleSubmit}>
            <Avatar />
            <Gender />
            <Birthday />
            <FreeText value={formState.freeText} />
            {/* <Location /> */}
            <Languages />
            <Interests />
            <div className="form-group">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-success mr-2"
                >
                    {isSubmitting && (
                        <span className="spinner-border spinner-border-sm mr-1"></span>
                    )}              Update
                </button>
                <Link to="." className="btn btn-link">
                    Cancel
                </Link>
            </div>
        </form>
    )
}

export default UserProfile;
