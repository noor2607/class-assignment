
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <nav className="w-full h-[92px] bg-[#043873] text-white md:text-lg py-4 px-4 sm:px-6 flex justify-between items-center relative">
   
        <div className="text-2xl font-bold">
          <Image
            src="/Logo1.png"
            alt="Logo Image"
            width={200}
            height={200}
            className="ml-2 transition-transform transform hover:scale-x-125"
          />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            <li><Link href="#" className="hover:underline hover:text-[#FFE492]">Products</Link></li>
            <li><Link href="#" className="hover:underline hover:text-[#FFE492]">Solutions</Link></li>
            <li><Link href="#" className="hover:underline hover:text-[#FFE492]">Resources</Link></li>
            <li><Link href="#" className="hover:underline hover:text-[#FFE492]">Pricing</Link></li>
          </ul>
          <button className="bg-[#FFE492] text-black px-4 py-1 rounded-md hover:bg-white">
            Login
          </button>
        </div>

      
        <div className="md:hidden flex items-center z-50">
          <input type="checkbox" id="menu-toggle" className="peer hidden" />
          <label htmlFor="menu-toggle" className="text-white cursor-pointer">
            ☰
          </label>
        </div>
      </nav>

   
      <div
        className="md:hidden peer-checked:block hidden absolute ml-8 top-[92px] left-0 w-[260px] bg-[#043873] text-white py-4 transition-all duration-300 ease-in-out"
      >
        <ul>
          <li className="py-2"><Link href="#" className="hover:underline hover:text-[#FFE492]">Products</Link></li>
          <li className="py-2"><Link href="#" className="hover:underline hover:text-[#FFE492]">Solutions</Link></li>
          <li className="py-2"><Link href="#" className="hover:underline hover:text-[#FFE492]">Resources</Link></li>
          <li className="py-2"><Link href="#" className="hover:underline hover:text-[#FFE492]">Pricing</Link></li>
        </ul>
        <button className="bg-[#FFE492] text-black px-4 py-1 rounded-md hover:bg-white w-full mt-4">
          Login
        </button>
      </div>

   
    </>
  );
};

export default Header;
