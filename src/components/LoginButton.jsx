import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="bg-[#2374E1] text-white font-bold p-2 rounded-full"
      onClick={() => loginWithRedirect()}
    >
      login
    </button>
  );
};

export default LoginButton;
