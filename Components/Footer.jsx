import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <Link href="/">
        <h1 className="w-[130px] text-xl font-bold md:text-3xl uppercase sm:w-auto text-white cursor-pointer">
          Blogify
        </h1>
      </Link>
      <p className="text-sm text-white">
        All right reserved. Copyright @blogify
      </p>
      <div className="flex">
        <Image src={assets.facebook_icon} alt="" width={40} />
        <Image src={assets.twitter_icon} alt="" width={40} />
        <Image src={assets.googleplus_icon} alt="" width={40} />
      </div>
    </div>
  );
};

export default Footer;
