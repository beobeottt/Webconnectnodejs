import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Banner: React.FC = () => {
  return (
    <section className="relative w-full h-64 bg-gradient-to-r from-sky-600 to-blue-800 flex items-center justify-center text-white">
      <h1 className="text-3xl font-bold">Mèo méo meo mèo meo</h1>
      <button className="absolute left-4 bg-white/30 p-2 rounded-full hover:bg-white/50">
        <ChevronLeft />
      </button>
      <button className="absolute right-4 bg-white/30 p-2 rounded-full hover:bg-white/50">
        <ChevronRight />
      </button>
    </section>
  );
};

export default Banner;
