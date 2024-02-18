export default function Items({pic, catName}){
    return(
        <>
     <section id="category">
       <div className={`bg-gray-300 w-[212px] h-64 rounded-t-full flex relative mt-9 bg-no-repeat bg-cover shadow-pink-900 shadow-sm hover:shadow-lg hover:shadow-pink-300 transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-110  duration-300 `} 
       style={{backgroundImage: `url(${pic})`}}>
 
           
           <div className="absolute bottom-0 left-0 bg-pink-200 pl-16 px-9 py-1 text-pink-700 text-lg w-full ">
            <p> {catName}</p>
            </div>

        </div>
        </section>
        </>
    )
}