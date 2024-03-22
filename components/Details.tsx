'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/navigation";

export default function Details(){
    const router = useRouter()
    const [quantity, setQuantity] = useState(0)
    const createCart = async ( name : string , quantity : number , price : Number) => {

        if(quantity > 0){
            await axios.post('/api', { name, price, quantity})
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
            window.location.reload()

        }
    }

    return(
        <div className="w-full pt-10 md:pt-0  md:w-1/2 px-10 md:px-0  flex flex-col justify-center space-y-7 ">
            <h1 className=" text-orange-400 uppercase font-medium">
                Sneaker Company
            </h1>
            <h1 className=" text-5xl font-bold">
                Fall Limited Edition Sneakers
            </h1>
            <h1 className=" text-gray-600">
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
            </h1>
            <div className=" flex flex-col">
                <div className=" flex flex-row space-x-5">
                    <h1 className=" font-bold text-2xl">
                        $125.00
                    </h1>
                    <div className=" text-sm flex items-center text-white ">
                        <h1 className="px-1 bg-orange-100 rounded-md font-semibold text-orange-500">
                            50%
                        </h1>
                    </div>
                </div>
                <h1 className=" text-gray-400 font-semibold line-through">
                    $250.00
                </h1> 
            </div>
            <div className=" flex flex-row space-x-5">
                <div className=" flex flex-row justify-between w-2/5 md:w-1/5 p-3 rounded-md bg-slate-100">
                    <button onClick={()=>{quantity -1 === -1 ? setQuantity(0) : setQuantity(quantity - 1)}}
                    className=" text-orange-400 text-xl font-black">
                        -
                    </button>
                    <h1 className=" font-bold">
                        {quantity}
                    </h1>
                    <button onClick={()=>{setQuantity(quantity + 1)}}
                    className=" text-orange-400 text-xl font-black">
                        +
                    </button>
                </div>
                <button onClick={()=>createCart("Fall Limited Edition Sneakers", quantity, 125.00)}
                className=" w-3/5 bg-orange-400 text-white font-bold rounded-xl hover:bg-orange-300 shadow-[0_15px_40px_-15px_rgba(251,146,60,1)]">
                    <FontAwesomeIcon icon={faCartShopping} className=" text-lg mr-2"/>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}