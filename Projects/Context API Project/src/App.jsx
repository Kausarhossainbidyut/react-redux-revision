import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";


const App = () => {
  return (
    <UserContextProvider>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  );
};

export default App;