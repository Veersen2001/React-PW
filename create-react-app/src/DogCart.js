import Image from "./Image";
export function DogCard(){
    return(
        // return single parent or bind in parent element like div...etc.
        <>
            {/* here we are using extra div for wrapping the content 
            so here we can use fragment<></> */}
            <h3>
                Bruno
            </h3>
          <Image src="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=600"></Image>
          <Image src="https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg?auto=compress&cs=tinysrgb&w=600"></Image>
        </>
    );
}
export default DogCard; 