import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
   /*{

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  </div>}*/


<>

<Router>
  <Routes>
    <Route path="/" ></Route>
    {/* <Route path="/admin" element={<Sidebar />}></Route> */}
    
    <Route path="/userTrainingTable" ></Route>
  </Routes>
</Router>
</>
  );
}

export default App;
