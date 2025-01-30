import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#043873] text-white py-8 px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row sm:justify-around items-center text-sm space-y-4 sm:space-y-0 mb-8">
        
        <div className="w-full sm:w-40 text-center sm:text-left">
          <Image
            src="/Logo1.png"
            alt="Logo Image"
            width={200}
            height={200}
            className="mb-4 mx-auto sm:ml-2"
          />
          <p>
            Whitespace was created for the new ways we live and work. We make a better workspace around the world.
          </p>
        </div>

      
        <div className="text-center sm:text-left">
          <h5 className="font-bold text-lg mb-2">Product</h5>
          <p className="hover:text-[#FFE492] hover:underline">Overview</p>
          <p className="hover:text-[#FFE492] hover:underline">Pricing</p>
          <p className="hover:text-[#FFE492] hover:underline">Customer Stories</p>
        </div>

  
        <div className="text-center sm:text-left">
          <h5 className="font-bold text-lg mb-2">Resources</h5>
          <p className="hover:text-[#FFE492] hover:underline">Blog</p>
          <p className="hover:text-[#FFE492] hover:underline">Guide & Tutorials</p>
          <p className="hover:text-[#FFE492] hover:underline">Help Center</p>
        </div>

        
        <div className="text-center sm:text-left">
          <h5 className="font-bold text-lg mb-2">Company</h5>
          <p className="hover:text-[#FFE492] hover:underline">About us</p>
          <p className="hover:text-[#FFE492] hover:underline">Careers</p>
          <p className="hover:text-[#FFE492] hover:underline">Media Kit</p>
        </div>
      </div>

     
      <div className="text-center">
        <div className="border-b-2 border-[#2E4E73] w-10/12 mx-auto"></div>
        <p className="mt-4">© 2024 Whitespace LLC</p>
      </div>
    </footer>
  );
};

export default Footer;
