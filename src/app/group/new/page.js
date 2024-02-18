import ListItems from "@/components/category/ListItems";
import Headline from "@/components/utilities/Font";

export default function Office() {
    return (
        <>
            <div className="bg-pink-100 max-h-full pb-28">
                <div className="text-center text-pink-800 pt-9 space-y-3 italic">
                    <p className="font-light text-xl tracking-wider">"each bloom tells a story, weaving moments into memories</p>
                    <Headline><p className="font-medium text-5xl tracking-wider ">Personalized Bouquet.."</p> </Headline>
                </div>

                <div className="grid grid-cols-3 space-x-6 space-y-12 ml-16 mr-10">

                    <ListItems Image={'/new.jpg'} Description={" Graceful and elegant, symbolizing springtime blooms."} Price={'Rs.1050/-'} />
                    <ListItems Image={'/everyday.jpg'} Description={"Bright and cheerful, with large, distinctive blooms."} Price={'Rs.450/-'} />
                    <ListItems Image={'/items/pic1.jpg'} Description={" Exotic and elegant, known for their intricate blooms."} Price={'Rs.350/-'} />
                    <ListItems Image={'/items/pic2.jpg'} Description={"Cheerful and vibrant, announcing the arrival of spring."} Price={'Rs.1250/-'} />
                    <ListItems Image={'/items/pic3.jpg'} Description={" Fragrant and soothing, with purple-blue flowers."} Price={'Rs.750/-'} />
                    <ListItems Image={'/items/pic4.jpg'} Description={" Elegant and fragrant, with trumpet-shaped blooms."} Price={'Rs.650/-'} />
                </div>
            </div>
        </>
    )
}