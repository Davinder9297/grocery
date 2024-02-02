import { Link } from "react-router-dom";

export default function Staples(){
    return(<>
        <div className="flex justify-center mt-5"> 
            <div className="w-[91%]">
                    <div className="flex justify-between">
                        <div className="text-xl font-semibold">
                        Atta,Dal & Pulses
                        </div>
                        <div className="text-orange-500">
                            <Link to='#'>View all</Link>
                        </div>
                    </div>
            </div>
        </div>
    </>)
}