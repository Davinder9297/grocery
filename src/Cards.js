import { Link } from "react-router-dom";

export default function Cards(){
    return(<>
    <div className="h-40 w-full flex justify-center pt-10">
            <div className="w-[92%] flex justify-between">
                <Link className="h-36 w-56 shadow-xl shadow-orange-500 veg   rounded-lg">
                        <div className="bg-black h-full w-full opacity-50 flex justify-center items-center rounded-lg">
                           <div className="text-white font-bold text-2xl z-10 opacity-100">
                                VEG
                            </div> 
                       </div>
                </Link>
                <Link className="h-36 w-56 shadow-xl shadow-orange-500 nonveg    rounded-lg">
                        <div className="bg-black h-full w-full opacity-50  flex justify-center items-center rounded-lg">
                           <div className="text-white font-bold text-2xl z-10 opacity-100">
                                NON VEG
                            </div> 
                       </div>
                </Link>
                <Link className="h-36 w-56 shadow-xl shadow-orange-500 fruits    rounded-lg">
                        <div className="bg-black h-full w-full opacity-50  flex justify-center items-center rounded-lg">
                           <div className="text-white font-bold text-2xl z-10 opacity-100">
                                FRUITS
                            </div> 
                       </div>
                </Link>
                <Link className="h-36 w-56 shadow-xl shadow-orange-500 dairy   rounded-lg">
                        <div className="bg-black h-full w-full opacity-50  flex justify-center items-center rounded-lg">
                           <div className="text-white font-bold text-2xl z-10 opacity-100">
                                DAIRY
                            </div> 
                       </div>
                </Link>
          
               
            </div>
    </div>
    </>)
} 