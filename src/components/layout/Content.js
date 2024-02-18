import Headline from "../utilities/Font";
import Items from "../category/List";
import Link from "next/link";

export default function Content() {
  return (
    <>
      <div className="bg-pink-100 text-pink-700 text-center text-5xl pt-10 pb-8 tracking-wider">
        <Headline> Shop By Category </Headline>
      </div>
      <div className="grid grid-cols-3  bg-pink-100 pl-40">
        <Link href={'/group/office'}>
          <Items pic={'/office.jpeg'} catName={'Office'} />
        </Link>
        <Link href={'/group/everyday'}>
          <Items pic={'/everyday.jpg'} catName={'Everyday'} />
        </Link>
        <Link href={'/group/gift'}>
          <Items pic={'/gift.jpg'} catName={'Floral Gifts'} />
        </Link>
        <Link href={'/group/wedding'}>
          <Items pic={'/wedding.jpg'} catName={'Wedding'} />
        </Link>
        <Link href={'/group/new'}>
          <Items pic={'/new.jpg'} catName={'Customized'} />
        </Link>
        <Link href={'/group/funeral'}>
          <Items pic={'/funeral.jpg'} catName={'Funeral'} />
        </Link>

      </div>
      <div className="bg-pink-100 text-center text-5xl pt-12 pb-8 text-pink-700 tracking-widest">
        <Headline> Make Someone Happy Today </Headline>
      </div>
    </>
  )

}