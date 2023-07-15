function Image()
{
    return(
         <img src="https://images.pexels.com/photos/3658120/pexels-photo-3658120.jpeg?auto=compress&cs=tinysrgb&w=400"></img> 
    );
}
function DogCard(){
    return(
        // return single parent or bind in parent element like div...etc.
        <div>
            <h3>
                Bruno
            </h3>
          <Image></Image>
          <Image></Image>
        </div>
    );
}
export default DogCard;