export default function ListItems({Image, Description, Price}){
    return(
        <>
        <div className="bg-pink-300 p-4 rounded-3xl text-center hover:bg-pink-200 hover:border-pink-400 hover:border  hover:shadow-pink-300 max-w-fit max-h-fit mt-12 ml-3 transition hover:delay-200 hover:scale-100 duration-100 hover:-translate-y-2 hover:shadow-inner">
        <img src={Image} alt="flower" className=" h-60 w-60 mx-auto rounded-full"/>
        <p className="text-base my-1 text-pink-800  font-normal mt-4">{Description}</p>
        <button className="bg-pink-600 rounded-full text-white px-5 py-2 mt-5">{Price}</button>
        </div>
        </>
    );
}