import logo from './logo.svg';
import './App.css';

const myName = 'kawsar'
// variables 

const cinemas = [
  {nayok : "Razzak", nayka : "Kobori"},
  {nayok : "Shakib", nayka : "Opu"},
  {nayok : "Arifin Shuvo", nayka : "Porimoni"}
]

// Component
function Cenima (props){
  return (
    <div className="App person-app">
      <h3>Nayok Name: {props.nayok} </h3>
      <h4>Nayka Name: {props.nayka} </h4>
      <a href="">Clieck here</a>
    </div>
  )
}

// Component value
function App() {
  return (
   
    <div className="App app">
     {
       cinemas.map (cinema => <Cenima nayok = {cinema.nayok} nayka = {cinema.nayka} ></Cenima>)
     }
    </div>
  );
}

export default App;


