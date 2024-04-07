import { ChevronRightIcon } from "@heroicons/react/16/solid";
import card from "./components/card";
import Card from "./components/card";
import getPostMetadata from "./utils/getPostMetadata";

const posts = [
  {
    title: "Post 1",
    time: "04/05/2024",
    description: "A brief description about the post.",
    link: "https://dliu.is-a.dev",
  },
];

export default function Home() {
  const posts = getPostMetadata("./src/app/posts/");
  return (
    <main>
      <div className="lg:mx-96 flex flex-col m-24">
        <div className="flex-container">
          <div className="text-b3 text-4xl">Welcome&nbsp;</div>
          <div className="text-b5 text-4xl">to my Blog!</div>
        </div>
        <hr className="w-48 my-8"></hr>
        <div>
          <div className="flex-container">
            <div className="text-b3 text-2xl">Recent&nbsp;</div>
            <div className="text-b5 text-2xl">posts</div>
          </div>
          <div>
            {posts &&
              posts.map((post, index) => {
                return <Card key={index} post={post}></Card>;
              })}
          </div>
        </div>
      </div>
    </main>
  );
}
