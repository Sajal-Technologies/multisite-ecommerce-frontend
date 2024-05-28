import React from 'react'
import { FiChevronsLeft } from "react-icons/fi";
import { FiChevronsRight } from "react-icons/fi";
import Card from "../../Card"

const SimilarProduct = () => {
  return (
    <>
        <div className="flex w-full items-center mb-[72px] flex-col">
          <div className="flex w-[85%] mt-[72px] mb-8 max-[600px]:mb-2 max-[600px]:mt-6 max-[600px]:w-full max-[600px]:px-4 items-center justify-between">
            <p className="text-[#121212] text-2xl font-semibold capitalize max-[600px]:text-lg max-[600px]:font-semibold">
              Similar products
            </p>
            <div className="flex gap-2 max-[600px]:hidden">
              <div className="h-12 w-12 rounded-full flex items-center justify-center bg-custom-gradient">
                <FiChevronsLeft className="text-white text-xl" />
              </div>
              <div className="h-12 w-12 rounded-full flex items-center justify-center bg-[#FF7F00] bg-custom-gradient2">
                <FiChevronsRight className="text-white text-xl" />
              </div>
            </div>
          </div>
          <div className="flex w-[85%] justify-between max-[600px]:w-full max-[600px]:px-4 max-[600px]:gap-2 max-[600px]:overflow-x-auto max-[600px]:scroll-smooth max-[600px]:snap-x hideScroll">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>    
    </>
  )
}

export default SimilarProduct