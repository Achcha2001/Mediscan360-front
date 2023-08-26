//import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import ContactUs from './components/contactus';
import About from './components/aboutus';
import InteractionChecker from './components/checker';

function App() {
  return (
    <div className="App">

    <Navbar/>
    <Routes>
      <Route exact path='/' Component={Home}></Route>
      <Route path='login' Component={Login}></Route>
      <Route path='signup' Component={Signup}></Route>
      <Route path='contact' Component={ContactUs}></Route>
      <Route path='aboutus' Component={About}></Route>
      <Route path='check' Component={InteractionChecker}></Route>
      </Routes>

    </div>
  );
}

export default App;
