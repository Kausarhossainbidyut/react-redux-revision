import { } from "react";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList =useLoaderData()


  // 3rd workspace
//  useEffect(() => {

//   const controller = new AbortController();
//   const signal = controller.signal;

  
//     .catch((error) => {
//       if (error.name === "AbortError") {
//         console.log("Fetch aborted");
//       } else {
//         console.error(error);
//       }
//       setFetching(false);
//     });

//   return () => {
//     console.log("Cleaning up useEffect.");
//     controller.abort();
//   };
// }, []);

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
      {postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
}

export const postLoader = () =>{
return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts
    })
  }


export default PostList;

