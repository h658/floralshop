import Headline from "../Font";
import Items from "../category/Items";

export default function Content(){
    return(
        <>
       <div className="bg-pink-100 text-pink-700 text-center text-5xl pt-10 pb-8 tracking-wider">
        <Headline> Shop By Category </Headline>
        </div> 
        <div className="grid grid-cols-3  bg-pink-100 pl-40">
      <Items pic={'/office.jpeg'} catName={'Office'}/>
      <Items pic={'/everyday.jpg'} catName={'Everyday'}/>
      <Items pic={'/gift.jpg'} catName={'Floral Gifts'}/>
      <Items pic={'/wedding.jpg'} catName={'Wedding'}/>
      <Items pic={'/custom.jpg'} catName={'Customized'}/>
      <Items pic={'/funeral.jpg'} catName={'Funeral'}/>
     
      </div>
      <div className="bg-pink-100 text-center text-5xl pt-12 pb-8 text-pink-700 tracking-widest">
       <Headline> Make Someone Happy Today </Headline>
    </div>
      </>
    )

}