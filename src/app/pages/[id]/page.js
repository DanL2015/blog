import getPostMetadata from "@/app/utils/getPostMetadata";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";

function getPostContent(id) {
  const folder = "./src/app/posts/";
  const file = folder + `${id}.md`;
  const content = fs.readFileSync(file, "utf-8");

  const mdContent = matter(content);
  return mdContent;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata("./src/app/posts");
  return posts.map((post) => ({
    id: post.id,
  }));
};

export async function generateMetadata({ params, searchParams }) {
  const id = params?.id;
  return {
    title: `${id.replaceAll("_", " ")}`,
  };
}

export default function Post({ params }) {
  const id = params.id;
  const post = getPostContent(id);
  var words = post.data.title.split(" ");
  return (
    <main>
      <article className="text-b4 lg:mx-96 flex flex-col m-16">
        <div className="flex-container">
          <div className="flex-container">
            <div className="text-b3 text-4xl">{words[0]}&nbsp;</div>
            <div className="text-b5 text-4xl">{words.slice(1).join(" ")}</div>
          </div>
          <div className="flex-1"></div>
          <div className="text-b3 text-xl">{post.data.date}</div>
        </div>
        <div className="flex-container my-4">
          <div className="text-b3 text-xl">Tags:</div>
          {post.data.tags &&
            post.data.tags.map((tag, index) => {
              return (
                <div className="tag-container" key={index}>
                  {tag}
                </div>
              );
            })}
        </div>
        <hr className="w-48 my-8"></hr>
        <Markdown
          className="markdown"
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={{
            code(props) {
              const { children, className, node, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  style={oneDark}
                  language={match[1]}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}
        >
          {post.content}
        </Markdown>
        <div className="flex-container my-4">
          <div className="flex-1"></div>
          <div className="text-b3 text-3xl">Daniel&nbsp;</div>
          <div className="text-b5 text-3xl">Liu</div>
        </div>
      </article>
    </main>
  );
}
