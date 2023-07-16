import Image from "./Image";
import Name from "./name";
export function DogCard(props){
     let title = "hello this is dog image";
    return(
       
        // return single parent or bind in parent element like div...etc.
        <>

         <h2 style={{fontSize:'40px',color:'red'}}> 
            {title}
            {5+4}
         </h2>
            {/* here we are using extra div for wrapping the content 
            so here we can use fragment<></> */}
           <Name>
             <h3>
                {props.name}
            </h3>
           </Name>
          <Image src={props.image} ></Image>
          
        </>
    );
}
export default DogCard; 