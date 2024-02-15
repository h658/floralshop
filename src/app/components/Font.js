import { Cookie } from "next/font/google";

 const cookieFont = Cookie({weight:"400", subsets:['latin'], display:'swap'});

function Headline({children}){
    return(
    <h1 className={`${cookieFont.className} text-pink-600`}>
        {children}
   </h1>
   )
}
export default Headline;