import './App.css';
import Create from "./hw3"
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import UserData from './components/userData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Login/Logout using OAuth</h1>
        <LoginButton />
        <LogoutButton />
        <UserData/>
        <Create/>
      </header>
    </div>
  );
}

export default App;
