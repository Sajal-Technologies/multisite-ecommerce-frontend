import React from "react";
import { FiTrendingDown } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";

const Card = () => {
  return (
    <>
      <div className="card w-[300px] h-[400px] rounded-2xl overflow-hidden border-[1px] border-[#F2F2F2]">
        <div className="imgcontainer w-full h-1/2 flex items-center justify-center bg-[#FAFEFF]">
          <img
            className="w-full h-full object-contain"
            src="https://s3-alpha-sig.figma.com/img/b2d4/5702/a5ccc585626711b6679efead09481f8a?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pNuP6kq-At9mZCgCF2KEPx1mTQTKssZBtV7vN8pQdinzdSH~HztrUmbZRAgaMoMOESPEhM~-Wq-6cM0sTZPF9f8moLq19kbviV3eB82MAHNMtHYTNR9wFm8UJK8-78PithokjrWvS~HtI6~y1YYcyPEu6-4Mvwt7LDKk-f71MDS0wQEsUzQKSBbaa53brq55sN0aqswLuEbgwr4cRKmaWqb~O9o~lu51qweBFKW5YMa8OTgBGzbEu7fGjXWX~CMlIe4Loectkscur5wFoVqZGZaeu6KCKkdYrKxPLM0pN092iUXs9SiVGpixHI9Cr9mEUNYLcTSSOfbaEEzfj4ILhg__"
            alt=""
          />
        </div>
        <div className="w-full h-1/2 py-4 flex flex-col gap-4">
          <div className="sellers flex justify-between px-4 ">
            <div className="flex items-center gap-2">
              <div className="h-8 w-24 ">
                <img
                  className=" h-full w-full object-cover"
                  src="https://s3-alpha-sig.figma.com/img/c8c5/ccdd/0b581d918195a95f4d3ae006d3cce3d9?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zh3~zFCVk44VNf3sr-5qGf~sxHUUg0iu~FfSnR~dsr2HVH8Y6v2tuhc6PswcdH57B-Fmbkve6f1MplKJGMU1LX5q2ElIo5eWu5B0MZMwyKzRtorkfaYt4GXwulRrJdpULSDDzVDHYcES9AaJb6~vVwDvi28cyIMQK3p64bJqfszRtvd2mjyAo7tVFbGg6udyA-jbCYZJf8lY2hn54TmvHZGhFnHkLZ7pMiV3esUoyi2YBbNGVRB59zPTBqM9AGpiliNZT0fXfBPoNsSk-~cRWnCA2eyr-Y~Q4N3brpcX41aZooYGYIMFLZM1ovpR379K6ZV7Dn~8kld6ZcH78Hcwgw__"
                  alt=""
                />
              </div>
              <div className="h-8 w-8">
                <img
                  className="h-full w-full object-cover"
                  src="https://s3-alpha-sig.figma.com/img/a8fa/2337/b81aa1a9f4f99c91c4e4ec7d00f51a65?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H0PDrdn0lI4wStHNfjNEAXYzGOCHOmHR1j1Vg4PDNbHew11aF7HrhUqrIX29HfhtAl6kQDcRoFd22j9d4o9J9MUjhUva9n4OamNgsYtkzoqv-UyRM5cZvZU5T4hMBKxtDULn9iWY9dECwAuvNV9w3DvQKSy4X2rxcSB3QviGqok2xiVvqD3Pe2wm5L5wraBocn7vG0HPapdte6JjfZJTdwQFfuUNZRHAXwEv1zMPd2cyUZe0qcA9ljRjXiSQahhcReUOOVwTzN1kTIIIfZSD0FMm84XSltB3iOoGco5Ei5TN1hjmz74TtvQnYJfsceCxw9LpaUOszl8iOulwnQojOA__"
                  alt=""
                />
              </div>
            </div>
            <div className="flex items-center gap-2 justify-center bg-[#F2F2F2] rounded-md px-2">
              <p className="text-[#0B8500] text-lg font-medium">-11%</p>
              <FiTrendingDown className="text-[#0B8500]" />
            </div>
          </div>
          <div className="px-4">
            <p className="text-[19px] leading-none text-[#3D3D3D] font-medium">
              Buy iPhone 15 Pro Physical Dual Sim 128GB Blue Titanium 5G...
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="">
              <p className="uppercase px-4 text-[#5C5C5C] text-lg">
                save <span className="line-through">&#8377;12550</span>
              </p>
              <p className="px-4 text-[#0B8500] text-2xl font-medium">
                &#8377;32999
              </p>
            </div>
            <div className="h-12 w-12 mx-4 flex items-center justify-center rounded-full bg-[#f7fdff] border-[1px] border-[#caf4ff]">
              <FiShoppingBag className="text-[#005F85] text-[24px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
