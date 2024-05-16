import React from 'react'
import { FiChevronsLeft } from "react-icons/fi";
import { FiChevronsRight } from "react-icons/fi";
import Card from "../../Card"

const SimilarProduct = () => {
  return (
    <>
        <div className="flex w-full items-center mb-[72px] flex-col">
          <div className="flex w-[85%] mt-[72px] mb-8 items-center justify-between">
            <p className="text-[#121212] text-2xl font-semibold capitalize">
              Similar products
            </p>
            <div className="flex gap-2">
              <div className="h-12 w-12 rounded-full flex items-center justify-center bg-custom-gradient">
                <FiChevronsLeft className="text-white text-xl" />
              </div>
              <div className="h-12 w-12 rounded-full flex items-center justify-center bg-[#FF7F00] bg-custom-gradient2">
                <FiChevronsRight className="text-white text-xl" />
              </div>
            </div>
          </div>
          <div className="flex w-[85%] justify-between">
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