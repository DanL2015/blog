"use client";
import { redirect, useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="w-full flex justify-between items-center">
      <div
        className="cursor-pointer flex mx-16 my-8"
        onClick={() => {
          router.push("/");
        }}
      >
        <div className="font-sans text-3xl text-b3 font-bold">d</div>
        <div className="font-sans text-3xl text-blue font-bold">.</div>
        <div className="font-sans text-3xl text-b4 font-bold">liu's Blog</div>
      </div>
      <div className="flex mx-16 my-8">
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
    </div>
  );
}
