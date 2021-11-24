import { server } from "../../../config";
import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import Meta from "../../../components/Meta";

export default function Article({ article }) {
  //   const router = useRouter();
  //   const { id } = router.query;
  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>This is an article {article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);

  const article = await res.json();

  return {
    props: { article },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();

  const ids = articles.map((x) => x.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  console.log("JSON.stringify(paths)", JSON.stringify(paths));

  return {
    paths,
    fallback: false,
  };

  // return {
  //   paths: { params: { id: "1", id: "2" } },
  // };
};

// // export const getServerSideProps = async (context) => {
// //   const res = await fetch(
// //     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
// //   );

// //   const article = await res.json();

// //   return {
// //     props: { article },
// //   };
// // };

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();

//   return {
//     props: { article },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//   const articles = await res.json();

//   const ids = articles.map((x) => x.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   console.log("JSON.stringify(paths)", JSON.stringify(paths));

//   return {
//     paths,
//     fallback: false,
//   };

//   // return {
//   //   paths: { params: { id: "1", id: "2" } },
//   // };
// };
