import { makeStyles } from '@material-ui/core';
import './App.css';
import About from './components/About';
import MyWork from './components/MyWork';
import Navbar from './components/Navbar';
import Skill from './components/Skill';

function App() {
const classes = useStyles();

  return (
    <>
    <Navbar/>
    <About/>
    <MyWork/>
    <Skill/>
      <div>
        <h1>Esto es mi portafolio</h1>
      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
  }
}))

export default App;
