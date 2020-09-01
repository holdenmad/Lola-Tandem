import React from "react";
import { Link } from "react-router-dom";

import { accountService } from "@/_services";

function Details({ match }) {
  const { path } = match;
  const user = accountService.userValue;

  return (
    <div>
      <h1>Settings</h1>
      <p>
        <strong>Name: </strong> {user.userName}
        <br />
        <strong>Email: </strong> {user.email}
      </p>
      <p>
        <Link to={`${path}/update`}>Edit Settings</Link>
      </p>
    </div>
  );
}

export { Details };
