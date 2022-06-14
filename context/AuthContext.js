import React, { createContext, useState } from "react";
import useRouter from "next/router";
import axios from "axios";

const AuthContext = createContext();

export default function AuthProvider(props) {
  const [user, setUser] = useState(null);

  const getCurrentUser = () => {
    axios.get("");
  };
  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}
