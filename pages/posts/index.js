import React from "react";
import Card from "../../components/Card";
import { getPosts } from "../../services";

import { useState, useEffect } from "react";

export default function Post({ posts }) {
  const [postList, setPostList] = useState(posts);

  useEffect(() => {
    setPostList(posts);
  }, [posts]);

  const updatePostList = (id) => {
    const list = postList.filter((post) => post.id !== id);
    setPostList(list);
  };

  return postList.map(({ id, title, body }) => (
    <Card
      key={id}
      id={id}
      title={title}
      body={body}
      updatePostList={updatePostList}
    ></Card>
  ));
}

export async function getStaticProps() {
  console.log("the getStaticProps function is called");
  let posts = await getPosts();
  return { props: { posts } };
}
