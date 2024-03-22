'use client'

import Image from "next/image"
import Thumbnail from "./Thumbnail"
import { useState } from "react"
import Preview from "./Preview"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark , faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons"

export default function ProductPicture(){
    const [imageIndex,setImageIndex] = useState<number>(1)
    const [menu,setMenu] = useState<boolean>(false)

    return(
        <div className=" w-full md:w-1/2">
            <div className=" w-full hidden md:flex space-y-7 flex-col justify-center items-center ">
                <Image
                src={`/images/image-product-${imageIndex}.jpg`}
                width={0}
                height={0}
                alt="product image1"
                onClick={()=>{setMenu(true)}}
                unoptimized
                className="cursor-pointer w-4/5 rounded-xl "/>
                <Thumbnail setImage={setImageIndex} imageIndex={imageIndex} />
                {menu && (
                    <Preview setMenu={setMenu}/>
                )}
            </div>
            <div className=" w-full relative  md:hidden flex flex-col justify-center items-center ">
                <Image
                src={`/images/image-product-${imageIndex}.jpg`}
                width={0}
                height={0}
                alt="product image1"
                onClick={()=>{setMenu(true)}}
                unoptimized
                className="cursor-pointer w-full  "/>
                <div className=" absolute top-0 right-0 w-full px-10 h-full flex flex-row justify-between items-center ">

                    <button onClick={()=>{setImageIndex(imageIndex-1 === 0 ? 4 : imageIndex-1)}}
                    className=" w-12 h-12 items-center flex justify-center rounded-full bg-white  ">
                        <FontAwesomeIcon icon={faChevronLeft} className=" text-xl text-black hover:text-orange-500"/>
                    </button>
                    <button onClick={()=>{setImageIndex(imageIndex+1 === 5 ? 1 : imageIndex+1)}}
                    className=" w-12 h-12 items-center flex justify-center rounded-full bg-white ">
                        <FontAwesomeIcon icon={faChevronRight} className=" text-xl text-black hover:text-orange-500"/>
                    </button>
                </div>
            </div>
        </div>

    )
}