'use client'

import Image from "next/image"
import { useState } from "react"


export default function Thumbnail({ imageIndex ,setImage} : { imageIndex : number ,setImage : Function}){
    
    return(
        <div className=" w-4/5  flex flex-row space-x-5 ">
            <div onClick={()=>setImage(1)} className={` cursor-pointer bg-white rounded-md w-1/4 ${ Math.abs(imageIndex)%4 === 1 ? "rounded-xl border-2 border-orange-500" : "" } `}>
                <Image
                src={"/images/image-product-1-thumbnail.jpg"}
                width={0}
                height={0}
                unoptimized
                alt="thumbnail1"
                className={`w-full hover:opacity-80  rounded ${ Math.abs(imageIndex)%4 === 1 ? " opacity-60" : ""}`}/>
            </div>
            <div onClick={()=>setImage(2)} className={`cursor-pointer bg-white rounded-md w-1/4 ${ Math.abs(imageIndex)%4 === 2 ? "rounded-xl border-2 border-orange-500" : "" } `}>
                <Image
                src={"/images/image-product-2-thumbnail.jpg"}
                width={0}
                height={0}
                unoptimized
                alt="thumbnail2"
                className={`w-full hover:opacity-80  rounded ${ Math.abs(imageIndex)%4 === 2 ? "opacity-60" : ""}`}/>
            </div>
            <div onClick={()=>setImage(3)} className={`cursor-pointer  bg-white rounded-md w-1/4 ${ Math.abs(imageIndex)%4 === 3 ? "rounded-xl border-2 border-orange-500" : "" } `}>
                <Image
                src={"/images/image-product-3-thumbnail.jpg"}
                width={0}
                height={0}
                unoptimized
                alt="thumbnail3"
                className={`w-full hover:opacity-80   rounded ${ Math.abs(imageIndex)%4 === 3 ? "opacity-60" : ""}`}/>
            </div>
            <div onClick={()=>setImage(4)} className={`cursor-pointer  bg-white rounded-md w-1/4 ${ Math.abs(imageIndex)%4 === 0 ? "rounded-xl border-2 border-orange-500" : "" } `}>
                <Image
                src={"/images/image-product-4-thumbnail.jpg"}
                width={0}
                height={0}
                unoptimized
                alt="thumbnail4"
                className={`w-full hover:opacity-80   rounded ${ Math.abs(imageIndex)%4 === 0 ? "opacity-60" : ""}`}/>
            </div>
        </div>
    )
}