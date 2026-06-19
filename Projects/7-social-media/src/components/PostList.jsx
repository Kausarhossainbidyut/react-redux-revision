import React, { useContext, useEffect } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/PostListStore";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  // 3rd workspace
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
        .then((res) => res.json())
        .then((data) =>{
          addInitialPosts(data.posts)
        })
  },[]);

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
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
