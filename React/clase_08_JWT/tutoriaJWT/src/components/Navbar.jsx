import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const { token, logout } = useContext(UserContext);

  return (
    <div>
      <h1>navbar</h1>
      {/* {token ? (<Link>Profile</Link> <button onClick={logout}>Logout</button>): (<Link>Login</Link> <Link>Register</Link>)} */}
    </div>
  );
}

export default Navbar;
