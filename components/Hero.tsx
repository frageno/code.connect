import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between mt-10 py-6">
      <div className="w-full lg:w-2/3 lg:max-w-[680px]">
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl lg:text-5xl font-bold">
                Welcome to Code<span className="text-primary">.</span>Connect
            </h1>
            <p>
                Discover upcoming developer meetups and events focused on WordPress,
                frontend development, and programming. Stay connected, enhance your
                skills, and network with fellow developers!
            </p>
            <Button className="w-[fit-content] font-semibold transition-all duration-300 hover:bg-secondary">Connect with us!</Button>
        </div>
      </div>
      <div className="w-full lg:w-1/3">
        <Image src="/assets/images/hero.png" width={400} height={330} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
