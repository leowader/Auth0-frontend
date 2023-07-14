import LoginButton from "./components/LoginButton";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
// import "./index.css";
function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  console.log("auth?", isAuthenticated);
  if (isLoading) {
    return (
      <div class="flex items-center justify-center min-h-screen">
        <div
          class="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"
        ></div>
        <p class="ml-2 text-white">cargando...</p>
      </div>
    );
  }

  return (
    <div className="App">
      <h1 className="text-3xl text-[#2374E1] font-bold flex justify-center">
        Proyect Wader
      </h1>

      {isAuthenticated ? <Logout></Logout> : <LoginButton />}

      <Profile></Profile>
    </div>
  );
}
export default App;
