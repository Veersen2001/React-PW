import logo from './logo.svg';
import './App.css';
import DogCard from './DogCart';

function App() {
  return (
    <div className="App">
     <button id='btn'>
      <span >Submit</span>
      <DogCard></DogCard> 
      {/* component */}
      
     </button>
     <DogCard></DogCard>
    </div>
  );
}

export default App;
