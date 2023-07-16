import {useState} from 'react';
let z=10;
function Counter()
{
    // let x=0  local variable can not update
   const [x, setX] = useState(0);
   const [y,setY] = useState(4); //starting value is 4

    return(
        <>

         count z: {z}
        <button onClick={()=> z+=1}>INC</button>
        {/* z update but can not show because it not refresh when x or y increment or decrement then chnage the value of Z */}
        <br></br>
        count x: {x}
        <button onClick={()=> setX(x+1)}>INC</button>
          <button onClick={()=> setX(x-1)}>DEC</button>

          <br></br>
             count y: {y}
        <button onClick={()=> setY(y+1)}>INC</button>
          <button onClick={()=> setY(y-1)}>DEC</button>
        </>
    );

}

export default Counter;