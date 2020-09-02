
import React from "react";
// import FileUpload from "../components/FileUpload";

function Avatar() {
  return (
    <div>
      <div className="form-group">
        <label className="heading">Profile Photo</label> <br />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Face-smile.svg/2000px-Face-smile.svg.png"
          alt="profile-photo"
          width="100px"
        />
        {/* <FileUpload /> */}
      </div>
    </div>
  );
}

export default Avatar;

