import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (

    <>

      <Router>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>

     
        </Routes>
      </Router>
    </>
  );
}

export default App;
