import { useEffect, useState } from "react";

const text = [
  "Loading...",
  "Please wait a moment...",
  "Fetching your results...",
];

function MultiStageLoader() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="relative flex justify-center gap-2">
      <p className="text-2xl text-gray-400 font-bold animate-[fade-in-out_3s_ease-in-out_infinite]  ">
        {text[index]}
      </p>
    </div>
  );
}

export default MultiStageLoader;
