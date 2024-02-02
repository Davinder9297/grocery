import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
export default function Navbar(){
    return(<>
    <div className="h-20 bg-orange-100 w-full flex  items-center justify-around">
                    <div className="w-36 h-16">
                        <img className="h-full w-full" src="/logo.png"/>
                    </div>
                    
                    <div className='flex justify-around my-auto'>
                            <form method="GET"  action="/product">
                                <div className="relative text-orange-500 focus-within:text-orange-400 border-2 border-orange-300 rounded-md">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2 ">
                                    <button type="submit" className="p-1 text-orange-500" >
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    </button>
                                </span>
                                <input type="search" name="q" className="py-2 text-sm rounded-md pl-10 w-80 my-auto outline-none bg-gray-50 focus:text-gray-900" placeholder="Search..." autoComplete="off"/>
                                </div>
                            </form>
                    </div>
                    <div className="flex space-x-10 items-center ">
                        <button className="text-2xl text-orange-500"><FaCartShopping /></button>
                        <button className="text-2xl text-orange-500"><FaHeart /></button>
                        <button className="text-2xl text-orange-500"><FaUser /></button>
                    </div>
    </div>
    </>)
}