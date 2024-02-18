import ListItems from "@/components/category/ListItems";
import Headline from "@/components/utilities/Font";

export default function Office() {
    return (
        <>
            <div className="bg-pink-100 max-h-full pb-28">
                <div className="text-center text-pink-800 pt-9 space-y-3 italic">
                    <p className="font-light text-xl tracking-wider">"the promise of everlasting joy and the flowers of </p>
                    <Headline><p className="font-medium text-5xl tracking-wider ">Wedding.."</p> </Headline>
                </div>

                <div className="grid grid-cols-3 space-x-6 space-y-12 ml-16 mr-10">

                    <ListItems Image={'/wedimg/pic5.jpeg'} Description={"Bright and cheerful, with large, distinctive blooms."} Price={'Rs.450/-'} />
                    <ListItems Image={'/wedimg/pic1.jpg'} Description={" Elegant and fragrant, with trumpet-shaped blooms."} Price={'Rs.650/-'} />
                    <ListItems Image={'/wedimg/pic3.jpeg'} Description={" Graceful and elegant, symbolizing springtime blooms."} Price={'Rs.1050/-'} />
                    <ListItems Image={'/wedimg/pic4.jpg'} Description={" Exotic and elegant, known for their intricate blooms."} Price={'Rs.350/-'} />
                    <ListItems Image={'/wedimg/pic1.jpg'} Description={" Fragrant and soothing, with purple-blue flowers."} Price={'Rs.750/-'} />
                    <ListItems Image={'/wedimg/pic2.jpg'} Description={"Cheerful and vibrant, announcing the arrival of spring."} Price={'Rs.1250/-'} />
                </div>
            </div>
        </>
    )
}