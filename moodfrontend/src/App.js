import './App.css';
import Create from "./components/hw3"
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import UserData from './components/userData';
import Hello from './components/hello'
import ColorTest from './components/colorselect';
import ColorGrid from './components/colorgrid';
import ResultDisplay from './components/colorDisplay'
import DecisionPart1 from './components/decision'
import { useAuth0 } from "@auth0/auth0-react";
import LocationForm from './components/getLocation';
import ArtistForm from './components/getArtist';
var show_ct = false;


function App() {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        <LoginButton />
        <LogoutButton />
        {show_ct && isAuthenticated && <UserData/>}
        {show_ct && isAuthenticated && <Create/>}
        {show_ct && isAuthenticated && <Hello/>}
        {show_ct && isAuthenticated && <ColorGrid/>}
        {isAuthenticated && <DecisionPart1/>}
        {show_ct && isAuthenticated && <ResultDisplay param='purple' decision='play guitar' />}
        {show_ct && isAuthenticated && <ColorTest/>}
      </header>
    </div>
  );
};

export default App