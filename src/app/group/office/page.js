import ListItems from "@/components/category/ListItems";
import Headline from "@/components/utilities/Font";

export default function Office() {
    return (
        <>
            <div className="bg-pink-100 max-h-full pb-28">
                <div className="text-center text-pink-800 pt-9 space-y-3 italic">
                    <p className="font-light text-xl tracking-wider">"the vibrancy of productivity in your</p>
                    <Headline><p className="font-medium text-5xl tracking-wider ">Office.."</p> </Headline>
                </div>

                <div className="grid grid-cols-3 space-x-6 space-y-12 ml-16 mr-10">

                    <ListItems Image={'/items/pic5.jpg'} Description={"Bright and cheerful, with large, distinctive blooms."} Price={'Rs.299/-'} />
                    <ListItems Image={'/items/pic3.jpg'} Description={" Graceful and elegant, symbolizing springtime blooms."} Price={'Rs.199/-'} />
                    <ListItems Image={'/items/pic4.jpg'} Description={" Exotic and elegant, known for their intricate blooms."} Price={'Rs.399/-'} />
                    <ListItems Image={'/items/pic1.jpg'} Description={" Fragrant and soothing, with purple-blue flowers."} Price={'Rs.499/-'} />
                    <ListItems Image={'/items/pic6.jpeg'} Description={" Elegant and fragrant, with trumpet-shaped blooms."} Price={'Rs.299/-'} />
                    <ListItems Image={'/items/pic2.jpg'} Description={"Cheerful and vibrant, announcing the arrival of spring."} Price={'Rs.699/-'} />
                </div>
            </div>
        </>
    )
}