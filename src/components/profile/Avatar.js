
import React from "react";
// import FileUpload from "../components/FileUpload";

function Avatar() {
  return (
    <div>
      <div className="form-group">
        <label className="heading">Profile Photo</label> <br />
        <img
          src="#"
          alt="profile-photo"
          width="100px"
        />
        {/* <FileUpload /> */}
      </div>
    </div>
  );
}

export default Avatar;

