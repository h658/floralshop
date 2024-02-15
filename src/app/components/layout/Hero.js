import Headline from "../Font";


export default function Hero(){
    return(
        <>
        <div className="w-full h-auto bg-pink-200 grid grid-cols-2">

           <div className=" mt-16 ml-28">
            <p className="text-7xl w-2/3 tracking-wider">
                <Headline>
                Flowers Make Memories!
                </Headline>
                 </p>
            <p className="text-lg font-light text-pink-600 leading-6 my-3">Our carefully curated selection of blooms embodies the essence of love, joy, sympathy, and gratitude. Each petal, each fragrance, tells a story and conveys heartfelt sentiments with eloquence beyond words.</p>
            <button className="bg-pink-500 rounded-full px-14 py-2 text-white text-xl">Order Now</button>
           </div>

            <div><img src="tulip.png" alt="tulip" className="ml-32 -mt-3"/></div>

        </div>
        </>
    )
}