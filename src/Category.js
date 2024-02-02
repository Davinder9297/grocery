import React from 'react'
import { Link } from 'react-router-dom'
const Category = () => {
  return (
<section className='w-full h-auto flex justify-arround xsm:justify-evenly mt-5 '>
    <div className='flex flex-wrap w-full h-auto justify-center xsm:mt-5'>
    <div className='max-w-[1410px]  justify-evenly flex w-full flex-wrap'>

    <div className="w-28 xsm:w-24 mb-2 h-auto border-2 shadow-xl rounded-lg cursor-pointer ">
      <div className='flex justify-center'><img src="/atta_all_2.png" className='w-fit h-20 xsm:h-16' alt="" /></div>
      <div className="dropdown">
        <button className="justify-center w-full text-center text-sm font-sans font-bold mt-2 hover:text-orange-600  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Staples
        </button>
  <div className="dropdown-menu rounded-md  bg-orange-100" aria-labelledby="dropdownMenuButton1">
    <Link to="/product?category=staples" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >All</Link>
    <Link to="/product?type=atta" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Atta</Link>
    <Link to="/product?type=atta" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Dal & pulses</Link>
    <Link to="/product?type=atta" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Salt</Link>   
  </div>
        </div>
      </div>

    <div className="w-28 xsm:w-24 mb-2 h-auto border-2 shadow-xl rounded-lg cursor-pointer ">
      <div className='flex justify-center'><img src="/pesonal_care_2.png" className='w-fit h-20 xsm:h-16' alt="" /></div>
      <div className="dropdown">
        <button className="justify-center w-full text-center text-sm font-sans font-bold mt-2 hover:text-orange-600  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Personal Care
        </button>
  <div className="dropdown-menu rounded-md  bg-orange-100" aria-labelledby="dropdownMenuButton1">
    <Link to="/product?category=staples" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >All</Link>
    <Link to="/product?type=atta" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Bath & Body</Link>
    <Link to="/product?type=atta" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Skin Care</Link>
    <Link to="/product?type=atta" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Perfumes</Link>
  </div>
        </div>
      </div>

    <div className="w-28 xsm:w-24 mb-2 h-auto border-2 shadow-xl rounded-lg cursor-pointer ">
      <div className='flex justify-center'><img src="/frozen.png" className='w-fit h-20 xsm:h-16' alt="" /></div>
      <div className="dropdown">
        <button className="justify-center w-full text-center text-sm font-sans font-bold mt-2 hover:text-orange-600  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Instant Food
        </button>
  <div className="dropdown-menu rounded-md  bg-orange-100" aria-labelledby="dropdownMenuButton1">
    <Link to="/product?category=staples" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >All</Link>
    <Link to="/product?type=atta" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Ready to cook</Link>
    <Link to="/product?type=atta" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Frozen food</Link>
  </div>
        </div>
      </div>

    <div className="w-28 xsm:w-24 mb-2 h-auto border-2 shadow-xl rounded-lg cursor-pointer ">
      <div className='flex justify-center'><img src="/Biscuits_Cakes_2_.png" className='w-fit h-20 xsm:h-16' alt="" /></div>
      <div className="dropdown">
        <button className="justify-center w-full text-center text-sm font-sans font-bold mt-2 hover:text-orange-600  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Biscuits
        </button>
  <div className="dropdown-menu rounded-md  bg-orange-100" aria-labelledby="dropdownMenuButton1">
    <Link to="/product?category=staples" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >All</Link>
    <Link to="/product?type=atta" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Biscuits</Link>
    <Link to="/product?type=atta" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Cakes</Link>
    <Link to="/product?type=atta" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Breads</Link>
  </div>
        </div>
      </div>

    <div className="w-28 xsm:w-24 mb-2 h-auto border-2 shadow-xl rounded-lg cursor-pointer ">
      <div className='flex justify-center'><img src="/snacks_2_1_.png" className='w-fit h-20 xsm:h-16' alt="" /></div>
      <div className="dropdown">
        <button className="justify-center w-full text-center text-sm font-sans font-bold mt-2 hover:text-orange-600  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Snacks
        </button>
  <div className="dropdown-menu rounded-md  bg-orange-100" aria-labelledby="dropdownMenuButton1">
    <Link to="/product?category=staples" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >All</Link>
    <Link to="/product?type=atta" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Noodles</Link>
    <Link to="/product?type=atta" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Pasta</Link>
    <Link to="/product?type=atta" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Chips</Link>
  </div>
        </div>
      </div>

    <div className="w-28 xsm:w-24 mb-2 h-auto border-2 shadow-xl rounded-lg cursor-pointer ">
      <div className='flex justify-center'><img src="/desert_2_1_.png" className='w-fit h-20 xsm:h-16' alt="" /></div>
      <div className="dropdown">
        <button className="justify-center w-full text-center text-sm font-sans font-bold mt-2 hover:text-orange-600  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Chocolates
        </button>
  <div className="dropdown-menu rounded-md  bg-orange-100" aria-labelledby="dropdownMenuButton1">
    <Link to="/product?category=staples" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >All</Link>
    <Link to="/product?type=atta" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Choclates</Link>
    <Link to="/product?type=atta" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Sweets</Link>
    <Link to="/product?type=atta" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Desserts</Link>
  </div>
        </div>
      </div>

    <div className="w-28 xsm:w-24 mb-2 h-auto border-2 shadow-xl rounded-lg cursor-pointer ">
      <div className='flex justify-center'><img src="/D_B_2.png" className='w-fit h-20 xsm:h-16' alt="" /></div>
      <div className="dropdown">
        <button className="justify-center w-full text-center text-sm font-sans font-bold mt-2 hover:text-orange-600  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Dairy Products
        </button>
  <div className="dropdown-menu rounded-md  bg-orange-100" aria-labelledby="dropdownMenuButton1">
    <Link to="/product?category=staples" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >All</Link>
    <Link to="/product?type=atta" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Bath & Body</Link>
    <Link to="/product?type=atta" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Skin Care</Link>
    <Link to="/product?type=atta" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Perfumes</Link>
  </div>
        </div>
      </div>

    <div className="w-28 xsm:w-24 mb-2 h-auto border-2 shadow-xl rounded-lg cursor-pointer ">
      <div className='flex justify-center'><img src="/home_and_kitchen_2_1.png" className='w-fit h-20 xsm:h-16' alt="" /></div>
      <div className="dropdown">
        <button className="justify-center w-full text-center text-sm font-sans font-bold mt-2 hover:text-orange-600  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        More
        </button>
  <div className="dropdown-menu rounded-md  bg-orange-100" aria-labelledby="dropdownMenuButton1">
    <Link to="/product?category=staples" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >All</Link>
    <Link to="/product?type=atta" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Ready to cook</Link>
    <Link to="/product?type=atta" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Frozen food</Link>
    <Link to="/product?type=atta" className="dropdown-item  hover:bg-orange-400 font-medium text-center" >Perfumes</Link>
  </div>
        </div>
      </div>


    
    </div>
    </div>
</section>
    )
}

export default Category