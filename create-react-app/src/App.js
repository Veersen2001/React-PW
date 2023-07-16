
import DogCard from './DogCart';
import Image from './Image';
import Counter from './hook';
// default export,{Named Export}

function App() {
  return (
    <div className="App">
    
      {/* we can change name of Default Export */}
      {/* <DogCard name='brouno' image="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=600"></DogCard>  */}

      {/* in named export we can not change name */}
      {/* <Image></Image> */}
      
      
  
     {/* <DogCard name='tiger' image="https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg?auto=compress&cs=tinysrgb&w=600"></DogCard> */}


     <Counter></Counter>
    </div>
  );
}

export default App;
