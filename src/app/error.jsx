"use client";

import { useEffect } from "react";
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="mx-96 m-24">
      <div className="flex-container">
        <div className="text-b3 text-4xl">Sorry,&nbsp;</div>
        <div className="text-b5 text-4xl">Something went wrong.</div>
      </div>
      <hr className="w-48 my-8"></hr>
      <div className="text-b4 text-xl">Use the navbar to return back home.</div>
    </div>
  );
}
