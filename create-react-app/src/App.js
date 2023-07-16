import logo from './logo.svg';
import './App.css';
import DogCard2 from './DogCart';
import Image from './Image';
// default export,{Named Export}

function App() {
  return (
    <div className="App">
     <button id='btn'>
      <span >Submit</span>
      {/* we can change name of Default Export */}
      <DogCard2></DogCard2> 

      {/* in named export we can not change name */}
      <Image></Image>
      
      
     </button>
     <DogCard2></DogCard2>
    </div>
  );
}

export default App;
