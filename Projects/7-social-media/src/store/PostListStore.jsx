import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId,
    );
  }else if(action.type === "ADD_POST"){
    newPostList = [action.payload ,...currPostList]
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const addPost = (userId, postTitle, postBody, reaction, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now,
        title: postTitle,
        body: postBody,
        reaction: reaction,
        userId: userId,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST,
  );
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Go to Dhaka",
    body: "Hi Friends, I am going to Dhaka for my vacations. Hope to enjoy a log. Peace out.",
    reaction: 2,
    userId: "user-9",
    tags: ["vacation", "Dhaka", "Enjoying"],
  },
  {
    id: "2",
    title: "Pass the Exam",
    body: "Enjoying 4 year, also pass all subject. Thanks my all teachers how give me support in this 4 years",
    reaction: 21,
    userId: "user-12",
    tags: ["Graduating", "Unbelievable", "Enjoying"],
  },
];

export default PostListProvider;
