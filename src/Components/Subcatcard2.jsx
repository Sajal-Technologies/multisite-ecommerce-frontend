import React from "react";

const Subcatcard2 = () => {
  return (
    <>
      <div className="subcatcard2 w-[290px] text-[#262626] h-[110px] bg-white flex justify-between p-4 rounded-xl border-[1px] border-[#DEDEDE]">
        <div className="">
          <p className="text-[19px] font-medium">Smart Phones</p>
          <p className=" leading-[22px] text-[#5C5C5C]">
            From <br /> &#8377;3299
          </p>
        </div>
        <div className="scale-[1.45] overflow-hidden px-4">
          <img
            className="h-full w-full object-cover scale-x-[-1]"
            src="https://s3-alpha-sig.figma.com/img/d610/318e/96b2fdd9029f4ef9d1867dd217840b3e?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M8tnZUv0bJ92AIkoR5QlftY5YVFcZhyPUno~lYVD31T7y11OswSb~RQIHSOmQHW4oebpxtYCCWSqsH8CD1A0lE2I7eT34GIINTBKPtiQ1m~wfmGrQO7HA5LtaxqbCAjaA-uLMuUF2Inybq7PSVJtokRZsOa2HsOl6szCbwlRGm2aUwiDWU0elZrpTdRmU61mf5sF0RfDGh43vDLMs~SFlK5iwqxRs-o1DeRAzs6Krc-KR74ia0ABK0T-bHRTc3455seVoyuSVoqBoUkWdg-S5p~YjS3DR4H42AKrJIFd3Vzi7A0IDZ3wJMDh7EQMFFpLUT6OUqA007QFDH7jG01b3Q__"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Subcatcard2;
