import { ChevronRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function Card({ post }) {
  var words = post.title.split(" ");
  return (
    <Link href={`/pages/${post.id}`}>
      <div className="post-container my-8 p-6 border-b2">
        <div className="flex-container flex-col md:flex-row">
          <div className="flex-container">
            <div className="text-b3 text-2xl">{words[0]}&nbsp;</div>
            <div className="text-b5 text-2xl">{words.slice(1).join(" ")}</div>
          </div>
          <div className="flex-container">
            {post.tags &&
              post.tags.map((tag, index) => {
                return (
                  <div key={index} className="tag-container">
                    {tag}
                  </div>
                );
              })}
          </div>
          <div className="flex-1"></div>
          <div className="text-b3 text-lg invisible md:visible">
            {post.date}
          </div>
        </div>
        <div className="text-b4 text-lg">{post.description}</div>
      </div>
    </Link>
  );
}
