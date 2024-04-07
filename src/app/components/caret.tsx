'use client'

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";

export default function Caret() {
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    var bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (bottom) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  function caretClick() {
    if (scroll) {
        window.scrollTo(0, 0);
    } else {
        window.scrollTo(0, document.body.scrollHeight)
    }
  }

  return (
    <div className="caret-container" onClick={caretClick}>
      <ChevronUpIcon className={scroll ? "caret" : "hide"} />
      <ChevronDownIcon className={scroll ? "hide" : "caret"} />
    </div>
  );
}