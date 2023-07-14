import React from "react";
import JSONPretty from "react-json-pretty";
import { useAuth0 } from "@auth0/auth0-react";
import 'react-json-pretty/themes/monikai.css';
const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
    console.log(isAuthenticated);
  return (
    isAuthenticated && (
      <div className="text-white">
        <div className="flex justify-center ">
          <img className="rounded-full" src={user.picture} alt={user.name} />
        </div>
        <h2 className="text-2xl font-bold  flex justify-center" >{user.name} </h2>
        <p className="text-2xl font-bold  flex justify-center">{user.email} </p>
        <JSONPretty className="font-bold  flex justify-center" data={user}></JSONPretty>
      </div>
    )
  );
};

export default Profile;
