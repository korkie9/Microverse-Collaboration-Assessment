import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" id="header">
        <img id="header-img" src={logo} className="App-logo" alt="logo" />
        <nav id="nav-bar">
          <a href="https://www.google.com/">hi</a>
          <a href="https://github.com/">sa</a>
          <a href="https://www.microverse.org/">ie</a>
        </nav>

      </header>
    </div>
  );
}

export default App;
