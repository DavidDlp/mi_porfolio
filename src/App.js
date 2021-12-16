// import { makeStyles } from '@material-ui/core';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
// import MyWork from './components/MyWork';

function App() {
  // const classes = useStyles();

  return (
    <div className='{classes.root}'>
    <About title="About Me" dark={true}/>
    <Footer/>
    {/* <MyWork title="My Work" id="work" dark={true}/> */}
    </div>
  );
}

// const useStyles = makeStyles((theme) => ({
//   root: {

//   }
// }))

export default App;
