import Image from "next/image"
import ProductPicture from "./ProductPicture"
import Details from "./Details"

export default function Product(){
    return (
        <div className=" w-screen xl:px-36 lg:px-24 py-10 flex flex-col md:flex-row">
            <ProductPicture/>
            <Details/>
        </div>
    )
}