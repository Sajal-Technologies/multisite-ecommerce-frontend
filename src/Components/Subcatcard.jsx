import React from "react";

const Subcatcard = () => {
  return (
    <>
      <div className="subcatcard w-[286px] text-[#262626] h-[105px] bg-white flex justify-between p-4 rounded-xl border-[1px] border-[#DEDEDE]">
        <div className="">
          <p className="text-[19px] font-medium">Oven Toasters</p>
          <p className=" leading-[22px] text-[#5C5C5C]">
            From <br /> &#8377;3299
          </p>
        </div>
        <div className="scale-[1.45] overflow-hidden px-4">
          <img
            className="h-full w-full object-cover scale-x-[-1]"
            src="https://s3-alpha-sig.figma.com/img/0ead/d499/d4c7f629ccae5b47a887e84eb8a326e1?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o0E5P2c-8fB2q-70HPKfeweaq~~XV7NXo4RgNPiPq-pNdaClmNBk5knjXEx~XurK1W84NgSYo84U1yO8hQ9s4kvlnKfFXqu978DX7p3XvtQIYZTmGGadrzsYNexOrJNQ-~0gfB5oVItQbgK8eyYCP8f58w0x1JmnqyA9eNCbQJElLijJpU3DSGyyjNt07-wpDvIhSIcwoMvZ2tJP1XdHir5Fvi8NbTLuRKDLG0uoU4oK8OulBKCoHiM2WRu4P8zKXJ0JuTPHa5NdIXb-4m94JJfPDhlD3N1tAKZVxf4BYCSnzfkEjUE~vq-pmZMvPoi9iReblMeTCH06FjH1mh6rZQ__"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Subcatcard;
