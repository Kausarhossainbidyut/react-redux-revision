import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const addPost = () => {};
  const deletePost = () => {};
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
