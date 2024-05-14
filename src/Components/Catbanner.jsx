import React from "react";

const Catbanner = () => {
  return (
    <>
      <div className="w-[418px] h-[200px] relative bg-gradient-to-br from-[#015F85] via-[#05739e] to-[#19a5dc] rounded-lg overflow-hidden">
        <h1 className="text-white font-semibold text-2xl p-6">Smart Phones</h1>
        <div className="imgcon">
          <img
            className=" scale-125 absolute left-[20%] top-[33%] "
            src="https://s3-alpha-sig.figma.com/img/2d95/7029/fa10f859fa3b62e42cfcff88f341b99f?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iblq37s2UwkgvbDQCl0aHf-gujbEX~7qPRFXaSLheTgiNgZMmZSl4LHzz~b1IHP~dq~rRtSPFo6nHkn1yXcyzChQLc1UZNl-I-INxDTI9jVQMfTVbPCAIB9iF9fbvowXvrwgAOgtRosUIQfBLX97JPRmgH-9NY52h3zdbLmMfKr-z8IKVFiQStJMTAwjyuK5Ej8fRD-JTQiOuxUChwJZCX6r~7lez6N3e-abq-i9h2fastuVB3gEAuDXO-rwiybYvGEPuC1fva9aR-Qf6dXR~2fOmEQVB7JElNIlIRQ18GmBm6s9mez~5kJL-N8i6SlTVmuF2ObnhXssNWiO-2h64Q__"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Catbanner;
