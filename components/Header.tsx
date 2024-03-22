'use client'

import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useState,useEffect } from "react"
import { faXmark} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


  
export default function Header() {
    const [menu, setMenu] = useState(false)
    const [data, setData] = useState([])
    const [menuMobile, setMenuMobile] = useState<boolean>(false)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
        const res = await axios.get('/api')
        setData(res.data)
        } catch (error) {
        console.error(error)
        }
    }
    const deleteItem = async (id: string) => {
        try {
          await axios.delete(`/api/${id}`)
          fetchData()
        } catch (error) {
          console.error('Failed to delete the post', error)
        }
      }
    
    return (
    <nav className=" w-screen bg-white relative flex items-center h-20">
        <div className="xl:mx-36 lg:mx-24 mx-7 md:mx-10 w-[90%] h-10 md:h-full bg-white md:border-b-2 flex flex-row items-center justify-between">
            <div className=" flex flex-row h-full items-center ">
                <div>
                    <Image
                    src={"/images/icon-menu.svg"}
                    width={0}
                    height={0}
                    alt="menu"
                    onClick={()=>setMenuMobile(!menuMobile)}
                    className=" md:hidden w-4 mr-2"
                    />
                </div>
                <Image
                src={"/images/logo.svg"}
                width={0}
                height={0}
                alt="logo"
                className=" w-32" />
                <div className=" hidden md:flex h-full items-center flex-row ml-8 space-x-5">
                    <Link className="text-gray-500 hover:text-black text-sm h-full flex items-center hover:border-b-4 border-orange-500 " href={""}>
                        Collections
                    </Link>
                    <Link className="text-gray-500 hover:text-black text-sm h-full flex items-center hover:border-b-4 border-orange-500 " href={""}>
                        Men
                    </Link>
                    <Link className="text-gray-500 hover:text-black text-sm h-full flex items-center hover:border-b-4 border-orange-500 " href={""}>
                        Women
                    </Link>
                    <Link className="text-gray-500 hover:text-black text-sm h-full flex items-center hover:border-b-4 border-orange-500 " href={""}>
                        About
                    </Link>
                    <Link className="text-gray-500 hover:text-black text-sm h-full flex items-center hover:border-b-4 border-orange-500 " href={""}>
                        Contact
                    </Link>
                </div>
            </div>
            <div className=" flex flex-row space-x-10 h-full items-center">
                <button className=" relative" onClick={()=>setMenu(!menu)}>
                    <Image
                    src={"/images/icon-cart.svg"}
                    width={0}
                    height={0}
                    className="w-4"
                    alt="cart"
                    />
                    <span className=" absolute -top-2 -right-2 bg-orange-500 text-white text-[8px] w-4 rounded-full">
                        {data.length}
                    </span>
                </button>
                <button>
                    <Image
                    src={"/images/image-avatar.png"}
                    width={0}
                    height={0}
                    unoptimized
                    alt="profile"
                    className="w-10 h-10 rounded-full border-2 border-gray-400  hover:border-orange-500"/>
                </button>
            </div>
        </div>
        { menu && (
            <div className=" absolute top-16 z-50 bg-white right-[5%] md:right-36 md:w-80 w-[90%] rounded-lg  shadow-md">
                <div className=" h-16 p-5 border-b rounded-t-lg">
                    <h1>Cart</h1>
                </div>
                <div className=" flex justify-center items-center">
                    { data.length === 0 ? <h1 className=" text-gray-500 h-36 flex justify-center items-center font-medium">Your cart is empty</h1> : 
                        <div className=" py-5 flex flex-col w-full">
                            {data.map((item: any, index: number) => {
                                return(
                                    <div key={index} className=" flex flex-row justify-between items-center w-full p-5 h-20">
                                        <div className=" flex flex-row">
                                            <Image
                                            src={"/images/image-product-1-thumbnail.jpg"}
                                            width={0}
                                            height={0}
                                            alt="sneaker"
                                            unoptimized
                                            className=" w-12 h-12 rounded-md"
                                            />
                                            <div className=" ml-5 flex flex-col space-y-1">
                                                <h1 className=" text-sm font-medium text-gray-500">{item.name}</h1>
                                                <h1 className=" text-sm font-medium text-gray-500">${item.price.toFixed(2)} x {item.quantity} <span className=" text-sm font-semibold text-black">${(item.price* item.quantity).toFixed(2)}</span></h1>
                                            </div>
                                        </div>
                                        <button
                                        onClick={()=>deleteItem(item.id)}>
                                            <Image
                                            src={"/images/icon-delete.svg"}
                                            width={0}
                                            height={0}
                                            alt="delete"
                                            className=" w-3"
                                            />
                                        </button>
                                    </div>
                                )
                            })}
                            <button className=" mx-5 rounded-lg h-10 text-white font-semibold bg-orange-500">
                                Checkout
                            </button>
                        </div>
                    }
                </div>
            </div>
            
        )}
        {
            menuMobile && (
                <div className=" md:hidden z-[100] bg-black bg-opacity-50 w-screen h-screen fixed  inset-0 ">
                    <div className=" w-3/5 bg-white h-full opacity-100 ">
                        <div className="flex h-full p-7 flex-col justify-start space-y-5">
                            <button onClick={()=>setMenuMobile(false)} className=" flex justify-start">
                                <FontAwesomeIcon icon={faXmark} className=" text-3xl text-black hover:text-orange-500"/>
                            </button>
                            <Link onClick={()=>{setMenuMobile(false)}} href={""} className=" text-lg font-semibold"> 
                                Collections
                            </Link>
                            <Link onClick={()=>{setMenuMobile(false)}} href={""} className=" text-lg font-semibold">
                                Men
                            </Link>
                            <Link onClick={()=>{setMenuMobile(false)}} href={""} className=" text-lg font-semibold">
                                Women
                            </Link>
                            <Link onClick={()=>{setMenuMobile(false)}} href={""} className=" text-lg font-semibold">
                                About
                            </Link>
                            <Link onClick={()=>{setMenuMobile(false)}} href={""} className=" text-lg font-semibold">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            )

        }

        
    </nav>
    )
    }
