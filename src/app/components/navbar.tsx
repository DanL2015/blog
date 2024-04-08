"use client";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [menu, setMenu] = useState(true)
  return (
    <div>
      <div className="w-full flex justify-between items-center">
        <div
          className="cursor-pointer flex mx-4 md:mx-16 my-4 md:my-8 flex-nowrap text-nowrap"
          onClick={() => {
            router.push("/");
          }}
        >
          <div className="font-sans text-3xl text-b3 font-bold">d</div>
          <div className="font-sans text-3xl text-blue font-bold">.</div>
          <div className="font-sans text-3xl text-b4 font-bold">
            liu&apos;s Blog
          </div>
        </div>
        <div className="md:flex mx-16 my-8 hidden">
          <div
            className="cursor-pointer mx-4 text-2xl text-b4 hover:text-blue"
            onClick={() => {
              router.push("/");
            }}
          >
            posts
          </div>
          <div
            className="cursor-pointer mx-4 text-2xl text-b4 hover:text-blue"
            onClick={() => {
              router.push("/about");
            }}
          >
            about
          </div>
        </div>
        <Bars3Icon className="cursor-pointer h-8 w-8 text-b4 mx-4 md:mx-16 my-4 md:my-8 md:hidden" onClick={() => {setMenu(!menu)}}></Bars3Icon>
      </div>
      <div className="mx-8 md:hidden" hidden={menu}>
        <div
          className="cursor-pointer my-4 text-2xl text-b4 hover:text-blue"
          onClick={() => {
            router.push("/");
          }}
        >
          posts
        </div>
        <div
          className="cursor-pointer my-4 text-2xl text-b4 hover:text-blue"
          onClick={() => {
            router.push("/about");
          }}
        >
          about
        </div>
      </div>
    </div>
  );
}
