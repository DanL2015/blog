import { ChevronRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function Card({ post }: { post: any }) {
  var words = post.title.split(" ");
  return (
    <Link href={`/pages/${post.id}`}>
      <div className="post-container my-8 p-6 border-b2">
        <div className="flex-container flex-row md:justify-start items-center">
          <div className="flex-container my-2">
            <div className="text-b3 text-xl md:text-2xl">{words[0]}&nbsp;</div>
            <div className="text-b5 text-xl md:text-2xl">{words.slice(1).join(" ")}</div>
          </div>
          <div className="flex-container hidden md:flex">
            {post.tags &&
              post.tags.map((tag:string, index:number) => {
                return (
                  <div key={index} className="tag-container">
                    {tag}
                  </div>
                );
              })}
          </div>
          <div className="flex-1"></div>
          <div className="text-b3 text-lg hidden md:flex">
            {post.date}
          </div>
          <ChevronRightIcon className="text-b4 md:hidden w-8 h-8"></ChevronRightIcon>
        </div>
        <div className="text-b4 text-sm md:text-lg">{post.description}</div>
      </div>
    </Link>
  );
}
