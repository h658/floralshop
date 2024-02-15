export default function Items({pic, catName}){
    return(
        <>
     
       <div className={`bg-gray-300 w-[212px] h-64 rounded-t-full flex relative mt-9 bg-no-repeat bg-cover shadow-pink-900 shadow-sm`} 
       style={{backgroundImage: `url(${pic})`}}>
 
           
           <div className="absolute bottom-0 left-0 bg-pink-200 pl-16 px-9 py-1 text-pink-700 text-lg w-full ">
            <p> {catName}</p>
            </div>

        </div>
        </>
    )
}