"use client";
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <div
      data-aos="fade-in"
      className="flex flex-col justify-center items-center w-full h-full"
    >
      <h1>Feliz cumpleaños, ANDREAAAAAAAAAA</h1>
      <Image
        src="https://th.bing.com/th/id/OIP.DXPQyG3w0a4NZ7J7h-CoBwHaHa?pid=ImgDet&rs=1"
        width={200}
        height={200}
        className="object-contain"
      />
    </div>
  );
}
