import Image from "next/image"
import Thumbnail from "./Thumbnail"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark , faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons"

export default function Preview({setMenu} : {setMenu : Function}){
    const [imageIndex,setImageIndex] = useState<number>(1)
    return(
        <div className=" w-screen h-screen z-30 absolute -top-7 right-0 flex justify-center items-center">
            <div className=" w-full h-full bg-black absolute opacity-60 ">
            </div>
            <div className=" w-full flex justify-center items-center z-40">
                <div className=" w-[30%] flex flex-col items-center space-y-5">
                    <div className="w-full relative">
                        <Image
                        src={`/images/image-product-${Math.abs(imageIndex)%4 === 0 ? 4 : imageIndex%4}.jpg`}
                        width={0}
                        height={0}
                        alt="product image1"
                        unoptimized
                        className="w-full rounded-xl"/>
                        <button onClick={()=>setMenu(false)} className=" absolute  items-center flex justify-center rounded-full  right-0 -top-10">
                            <FontAwesomeIcon icon={faXmark} className=" text-3xl text-white hover:text-orange-500"/>
                        </button>
                        <button onClick={()=>{setImageIndex(imageIndex-1 === 0 ? 4 : imageIndex-1)}}
                        className=" absolute w-16 h-16 items-center flex justify-center rounded-full bg-white -left-7 top-[45%]">
                            <FontAwesomeIcon icon={faChevronLeft} className=" text-3xl text-black hover:text-orange-500"/>
                        </button>
                        <button onClick={()=>{setImageIndex(imageIndex+1 === 5 ? 1 : imageIndex+1)}}
                        className=" absolute w-16 h-16 items-center flex justify-center rounded-full bg-white -right-7 top-[45%]">
                            <FontAwesomeIcon icon={faChevronRight} className=" text-3xl text-black hover:text-orange-500"/>
                        </button>
                    </div>
                    <Thumbnail imageIndex={imageIndex} setImage={setImageIndex} />
                    
                </div>
            </div>
        </div>
    )
}