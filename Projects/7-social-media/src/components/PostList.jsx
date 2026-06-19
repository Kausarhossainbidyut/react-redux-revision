import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/PostListStore";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  // 3rd workspace
 useEffect(() => {
  setFetching(true)

  const controller = new AbortController();
  const signal = controller.signal;

  fetch("https://dummyjson.com/posts", { signal })
    .then((res) => res.json())
    .then((data) => {
      addInitialPosts(data.posts);
      setFetching(false);
    })
    .catch((error) => {
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error(error);
      }
      setFetching(false);
    });

  return () => {
    console.log("Cleaning up useEffect.");
    controller.abort();
  };
}, []);

  // 2nd workspace
  // const [dataFetched, setDataFetched] = useState(false)

  // if(!dataFetched){
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) =>{
  //       addInitialPosts(data.posts)
  //     })
  //     setDataFetched(true)
  // }

  // 1st workspace
  // const handleGetPostsClick = () => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) =>{
  //       addInitialPosts(data.posts)
  //     })
  // }

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
