import{RiCheckboxMultipleFill} from 'react-icons/ri'
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdStars } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
export default function Filter(){
    return(<>
    <div className="h-auto w-full flex justify-center pt-16">
        <div className="w-[91%] flex justify-between">
            <div className="filterside text-black w-56 bg-orange-100 px-2 pb-2 h-fit">
                    <div className='flex justify-between pt-2'>
                        <div className='text-2xl font-semibold'>
                            Filters
                        </div>
                        <button className='py-1 px-3 rounded shadow-inner shadow-orange-300 bg-black text-orange-200'>Apply</button>
                    </div>
                        <div className='text-lg  font-semibold mt-3'>
                            Product categories
                        </div>
                        <div className='flex space-x-2 items-center font-semibold text-gray-800 py-1'>
                            <input type='checkbox' className='h-4 w-4'/>
                            <div>Veg</div>
                        </div>
                        <div className='flex space-x-2 items-center font-semibold text-gray-800 py-1'>
                            <input type='checkbox' className='h-4 w-4'/>
                            <div>Non-veg</div>
                        </div>
                        <div className='flex space-x-2 items-center font-semibold text-gray-800 py-1'>
                            <input type='checkbox' className='h-4 w-4'/>
                            <div>Fruits</div>
                        </div>
                        <div className='flex space-x-2 items-center font-semibold text-gray-800 py-1'>
                            <input type='checkbox' className='h-4 w-4'/>
                            <div>Dairy</div>
                        </div>
                        <div className='text-lg  font-semibold mt-3'>
                            Price range
                        </div>
                        <div className='flex space-x-2 items-center font-semibold text-gray-800 py-1'>
                            <input type='checkbox' className='h-4 w-4'/>
                            <div className='flex items-center'><FaIndianRupeeSign className='text-sm'/>100-200</div>
                        </div>
                        <div className='flex space-x-2 items-center font-semibold text-gray-800 py-1'>
                            <input type='checkbox' className='h-4 w-4'/>
                            <div className='flex items-center'><FaIndianRupeeSign className='text-sm'/>300-400</div>

                        </div>
                        <div className='flex space-x-2 items-center font-semibold text-gray-800 py-1'>
                            <input type='checkbox' className='h-4 w-4'/>
                            <div className='flex items-center'><FaIndianRupeeSign className='text-sm'/>500-600</div>
                        </div>
                        <div className='flex space-x-2 items-center font-semibold text-gray-800 py-1'>
                            <input type='checkbox' className='h-4 w-4'/>
                            <div className='flex items-center'><FaIndianRupeeSign className='text-sm'/>700-More</div>
                        </div>
                        <div className='text-lg  font-semibold mt-3'>
                            Distance radius
                        </div>
                        <div className='flex space-x-2 items-center font-semibold text-gray-800 py-1'>
                            <input type='checkbox' className='h-4 w-4'/>
                            <div>Under 5KM</div>
                        </div>
                        <div className='flex space-x-2 items-center font-semibold text-gray-800 py-1'>
                            <input type='checkbox' className='h-4 w-4'/>
                            <div>5KM-10km</div>

                        </div>
                        <div className='flex space-x-2 items-center font-semibold text-gray-800 py-1'>
                            <input type='checkbox' className='h-4 w-4'/>
                            <div>10KM-15km</div>
                        </div>
                        <div className='flex space-x-2 items-center font-semibold text-gray-800 py-1'>
                            <input type='checkbox' className='h-4 w-4'/>
                            <div>15KM-More</div>
                        </div>
            </div>
            <div className="store w-[80%]  flex flex-wrap justify-between h-[570px] overflow-auto">
                <div className='h-[50vh] w-[20vw]  bg-orange-50 shadow-lg rounded mb-5'>
                    <div className='h-1/2  rounded '>
                        <img src='/veg.jpg' className='h-full w-full rounded '/>
                        <div className='flex items-center font-bold justify-center relative bottom-7 text-white bg-black opacity-80'><FaIndianRupeeSign className='text-sm'/>150 OFF ABOVE <FaIndianRupeeSign className='ml-1 text-sm'/>299</div>
                    </div>
                    <div className='flex justify-between px-2 items-center'>
                        <div className='text-xl font-semibold text-center'>
                            Domino's Pizza
                        </div>
                        <div className='flex items-center space-x-1'>
                        <FaLocationDot className='text-sm'/>
                        <div className='font-semibold'>
                            Mohali
                        </div>
                        </div>
                    </div>
                    <div className='flex items-center font-semibold px-2 justify-between pt-1'>
                        <div className='flex items-center '>
                            <MdStars className='text-xl text-orange-500'/>
                            <div>
                                4.6
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <GoDotFill className='text-xs text-orange-500'/>                     
                            <div>
                                30-35 mins
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <GoDotFill className='text-xs text-orange-500'/>                     
                            <div>
                               2.1 Km
                            </div>
                        </div>
                       
                    </div>
                    <div className='text-sm px-2  text-gray-600 mt-2'>
                    Samosa. Paneer Butter Masala. Chana Masala. Palak Paneer. Dal Makhani.
                    </div>
                </div>
                <div className='h-[50vh] w-[20vw]  bg-orange-50 shadow-lg rounded mb-5'>
                    <div className='h-1/2  rounded '>
                        <img src='/veg.jpg' className='h-full w-full rounded '/>
                        <div className='flex items-center font-bold justify-center relative bottom-7 text-white bg-black opacity-80'><FaIndianRupeeSign className='text-sm'/>150 OFF ABOVE <FaIndianRupeeSign className='ml-1 text-sm'/>299</div>
                    </div>
                    <div className='flex justify-between px-2 items-center'>
                        <div className='text-xl font-semibold text-center'>
                            Domino's Pizza
                        </div>
                        <div className='flex items-center space-x-1'>
                        <FaLocationDot className='text-sm'/>
                        <div className='font-semibold'>
                            Mohali
                        </div>
                        </div>
                    </div>
                    <div className='flex items-center font-semibold px-2 justify-between pt-1'>
                        <div className='flex items-center '>
                            <MdStars className='text-xl text-orange-500'/>
                            <div>
                                4.6
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <GoDotFill className='text-xs text-orange-500'/>                     
                            <div>
                                30-35 mins
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <GoDotFill className='text-xs text-orange-500'/>                     
                            <div>
                               2.1 Km
                            </div>
                        </div>
                       
                    </div>
                    <div className='text-sm px-2  text-gray-600 mt-2'>
                    Samosa. Paneer Butter Masala. Chana Masala. Palak Paneer. Dal Makhani.
                    </div>
                </div>
                <div className='h-[50vh] w-[20vw]  bg-orange-50 shadow-lg rounded mb-5'>
                    <div className='h-1/2  rounded '>
                        <img src='/veg.jpg' className='h-full w-full rounded '/>
                        <div className='flex items-center font-bold justify-center relative bottom-7 text-white bg-black opacity-80'><FaIndianRupeeSign className='text-sm'/>150 OFF ABOVE <FaIndianRupeeSign className='ml-1 text-sm'/>299</div>
                    </div>
                    <div className='flex justify-between px-2 items-center'>
                        <div className='text-xl font-semibold text-center'>
                            Domino's Pizza
                        </div>
                        <div className='flex items-center space-x-1'>
                        <FaLocationDot className='text-sm'/>
                        <div className='font-semibold'>
                            Mohali
                        </div>
                        </div>
                    </div>
                    <div className='flex items-center font-semibold px-2 justify-between pt-1'>
                        <div className='flex items-center '>
                            <MdStars className='text-xl text-orange-500'/>
                            <div>
                                4.6
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <GoDotFill className='text-xs text-orange-500'/>                     
                            <div>
                                30-35 mins
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <GoDotFill className='text-xs text-orange-500'/>                     
                            <div>
                               2.1 Km
                            </div>
                        </div>
                       
                    </div>
                    <div className='text-sm px-2  text-gray-600 mt-2'>
                    Samosa. Paneer Butter Masala. Chana Masala. Palak Paneer. Dal Makhani.
                    </div>
                </div>
                <div className='h-[50vh] w-[20vw]  bg-orange-50 shadow-lg rounded mb-5'>
                    <div className='h-1/2  rounded '>
                        <img src='/veg.jpg' className='h-full w-full rounded '/>
                        <div className='flex items-center font-bold justify-center relative bottom-7 text-white bg-black opacity-80'><FaIndianRupeeSign className='text-sm'/>150 OFF ABOVE <FaIndianRupeeSign className='ml-1 text-sm'/>299</div>
                    </div>
                    <div className='flex justify-between px-2 items-center'>
                        <div className='text-xl font-semibold text-center'>
                            Domino's Pizza
                        </div>
                        <div className='flex items-center space-x-1'>
                        <FaLocationDot className='text-sm'/>
                        <div className='font-semibold'>
                            Mohali
                        </div>
                        </div>
                    </div>
                    <div className='flex items-center font-semibold px-2 justify-between pt-1'>
                        <div className='flex items-center '>
                            <MdStars className='text-xl text-orange-500'/>
                            <div>
                                4.6
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <GoDotFill className='text-xs text-orange-500'/>                     
                            <div>
                                30-35 mins
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <GoDotFill className='text-xs text-orange-500'/>                     
                            <div>
                               2.1 Km
                            </div>
                        </div>
                       
                    </div>
                    <div className='text-sm px-2  text-gray-600 mt-2'>
                    Samosa. Paneer Butter Masala. Chana Masala. Palak Paneer. Dal Makhani.
                    </div>
                </div>
                <div className='h-[50vh] w-[20vw]  bg-orange-50 shadow-lg rounded mb-5'>
                    <div className='h-1/2  rounded '>
                        <img src='/veg.jpg' className='h-full w-full rounded '/>
                        <div className='flex items-center font-bold justify-center relative bottom-7 text-white bg-black opacity-80'><FaIndianRupeeSign className='text-sm'/>150 OFF ABOVE <FaIndianRupeeSign className='ml-1 text-sm'/>299</div>
                    </div>
                    <div className='flex justify-between px-2 items-center'>
                        <div className='text-xl font-semibold text-center'>
                            Domino's Pizza
                        </div>
                        <div className='flex items-center space-x-1'>
                        <FaLocationDot className='text-sm'/>
                        <div className='font-semibold'>
                            Mohali
                        </div>
                        </div>
                    </div>
                    <div className='flex items-center font-semibold px-2 justify-between pt-1'>
                        <div className='flex items-center '>
                            <MdStars className='text-xl text-orange-500'/>
                            <div>
                                4.6
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <GoDotFill className='text-xs text-orange-500'/>                     
                            <div>
                                30-35 mins
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <GoDotFill className='text-xs text-orange-500'/>                     
                            <div>
                               2.1 Km
                            </div>
                        </div>
                       
                    </div>
                    <div className='text-sm px-2  text-gray-600 mt-2'>
                    Samosa. Paneer Butter Masala. Chana Masala. Palak Paneer. Dal Makhani.
                    </div>
                </div>
                <div className='h-[50vh] w-[20vw]  bg-orange-50 shadow-lg rounded mb-5'>
                    <div className='h-1/2  rounded '>
                        <img src='/veg.jpg' className='h-full w-full rounded '/>
                        <div className='flex items-center font-bold justify-center relative bottom-7 text-white bg-black opacity-80'><FaIndianRupeeSign className='text-sm'/>150 OFF ABOVE <FaIndianRupeeSign className='ml-1 text-sm'/>299</div>
                    </div>
                    <div className='flex justify-between px-2 items-center'>
                        <div className='text-xl font-semibold text-center'>
                            Domino's Pizza
                        </div>
                        <div className='flex items-center space-x-1'>
                        <FaLocationDot className='text-sm'/>
                        <div className='font-semibold'>
                            Mohali
                        </div>
                        </div>
                    </div>
                    <div className='flex items-center font-semibold px-2 justify-between pt-1'>
                        <div className='flex items-center '>
                            <MdStars className='text-xl text-orange-500'/>
                            <div>
                                4.6
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <GoDotFill className='text-xs text-orange-500'/>                     
                            <div>
                                30-35 mins
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <GoDotFill className='text-xs text-orange-500'/>                     
                            <div>
                               2.1 Km
                            </div>
                        </div>
                       
                    </div>
                    <div className='text-sm px-2  text-gray-600 mt-2'>
                    Samosa. Paneer Butter Masala. Chana Masala. Palak Paneer. Dal Makhani.
                    </div>
                </div>
                <div className='h-[50vh] w-[20vw]  bg-orange-50 shadow-lg rounded mb-5'>
                    <div className='h-1/2  rounded '>
                        <img src='/veg.jpg' className='h-full w-full rounded '/>
                        <div className='flex items-center font-bold justify-center relative bottom-7 text-white bg-black opacity-80'><FaIndianRupeeSign className='text-sm'/>150 OFF ABOVE <FaIndianRupeeSign className='ml-1 text-sm'/>299</div>
                    </div>
                    <div className='flex justify-between px-2 items-center'>
                        <div className='text-xl font-semibold text-center'>
                            Domino's Pizza
                        </div>
                        <div className='flex items-center space-x-1'>
                        <FaLocationDot className='text-sm'/>
                        <div className='font-semibold'>
                            Mohali
                        </div>
                        </div>
                    </div>
                    <div className='flex items-center font-semibold px-2 justify-between pt-1'>
                        <div className='flex items-center '>
                            <MdStars className='text-xl text-orange-500'/>
                            <div>
                                4.6
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <GoDotFill className='text-xs text-orange-500'/>                     
                            <div>
                                30-35 mins
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <GoDotFill className='text-xs text-orange-500'/>                     
                            <div>
                               2.1 Km
                            </div>
                        </div>
                       
                    </div>
                    <div className='text-sm px-2  text-gray-600 mt-2'>
                    Samosa. Paneer Butter Masala. Chana Masala. Palak Paneer. Dal Makhani.
                    </div>
                </div>
                <div className='h-[50vh] w-[20vw]  bg-orange-50 shadow-lg rounded mb-5'>
                    <div className='h-1/2  rounded '>
                        <img src='/veg.jpg' className='h-full w-full rounded '/>
                        <div className='flex items-center font-bold justify-center relative bottom-7 text-white bg-black opacity-80'><FaIndianRupeeSign className='text-sm'/>150 OFF ABOVE <FaIndianRupeeSign className='ml-1 text-sm'/>299</div>
                    </div>
                    <div className='flex justify-between px-2 items-center'>
                        <div className='text-xl font-semibold text-center'>
                            Domino's Pizza
                        </div>
                        <div className='flex items-center space-x-1'>
                        <FaLocationDot className='text-sm'/>
                        <div className='font-semibold'>
                            Mohali
                        </div>
                        </div>
                    </div>
                    <div className='flex items-center font-semibold px-2 justify-between pt-1'>
                        <div className='flex items-center '>
                            <MdStars className='text-xl text-orange-500'/>
                            <div>
                                4.6
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <GoDotFill className='text-xs text-orange-500'/>                     
                            <div>
                                30-35 mins
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <GoDotFill className='text-xs text-orange-500'/>                     
                            <div>
                               2.1 Km
                            </div>
                        </div>
                       
                    </div>
                    <div className='text-sm px-2  text-gray-600 mt-2'>
                    Samosa. Paneer Butter Masala. Chana Masala. Palak Paneer. Dal Makhani.
                    </div>
                </div>
                <div className='h-[50vh] w-[20vw]  bg-orange-50 shadow-lg rounded mb-5'>
                    <div className='h-1/2  rounded '>
                        <img src='/veg.jpg' className='h-full w-full rounded '/>
                        <div className='flex items-center font-bold justify-center relative bottom-7 text-white bg-black opacity-80'><FaIndianRupeeSign className='text-sm'/>150 OFF ABOVE <FaIndianRupeeSign className='ml-1 text-sm'/>299</div>
                    </div>
                    <div className='flex justify-between px-2 items-center'>
                        <div className='text-xl font-semibold text-center'>
                            Domino's Pizza
                        </div>
                        <div className='flex items-center space-x-1'>
                        <FaLocationDot className='text-sm'/>
                        <div className='font-semibold'>
                            Mohali
                        </div>
                        </div>
                    </div>
                    <div className='flex items-center font-semibold px-2 justify-between pt-1'>
                        <div className='flex items-center '>
                            <MdStars className='text-xl text-orange-500'/>
                            <div>
                                4.6
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <GoDotFill className='text-xs text-orange-500'/>                     
                            <div>
                                30-35 mins
                            </div>
                        </div>
                        <div className='flex items-center '>
                            <GoDotFill className='text-xs text-orange-500'/>                     
                            <div>
                               2.1 Km
                            </div>
                        </div>
                       
                    </div>
                    <div className='text-sm px-2  text-gray-600 mt-2'>
                    Samosa. Paneer Butter Masala. Chana Masala. Palak Paneer. Dal Makhani.
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>)
}