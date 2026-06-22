// import  { useContext, useRef } from "react";
// import { PostList } from "../store/PostListStore";

import { Form, redirect } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  // const { addPost } = useContext(PostList);
  // const navigate =useNavigate()

  // const userIdElement = useRef();
  // const postTitleElement = useRef();
  // const postBodyElement = useRef();
  // const reactionElement = useRef();
  // const tagsElement = useRef();

  // const handleSubmit = (event) => {
    // event.preventDefault();
    // const userId = userIdElement.current.value;
    // const postTitle = postTitleElement.current.value;
    // const postBody = postBodyElement.current.value;
    // const reaction = reactionElement.current.value;
    // const tags = tagsElement.current.value.split(/\s+/);
    // userIdElement.current.value = "";
    // postTitleElement.current.value = "";
    // postBodyElement.current.value = "";
    // reactionElement.current.value = "";
    // tagsElement.current.value = "";
//  fetch("https://dummyjson.com/posts/add", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         title: postTitle,
//         body: postBody,
//         reaction: reaction,
//         userId: userId,
//         tags: tags,
//       }),
//     })
//       .then((res) => res.json())
//       .then(post => addPost(post));
//       navigate("/")
    
  // };

  return (
    <Form method="POST" className="create-post" >
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id here
        </label>

        <input
          type="text"
          className="form-control"
          id="userId"
          name='userId'
          placeholder="How are you feeling today..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>

        <input
          type="text"
          className="form-control"
          id="title"
          name= 'title'
          placeholder="How are you feeling today..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>

        <textarea
          type="text"
          className="form-control"
          id="body"
          name='body'
          placeholder="Tell us more about it"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Number of Reaction
        </label>

        <input
          type="text"
          className="form-control"
          id="reaction"
          name='reaction'
          placeholder="How many people reacted to this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Post Tags
        </label>

        <input
          type="text"
          className="form-control"
          id="tags"
          name='tags'
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function createPostAction (data) {
  const formData = await data.request.formData()
  const postData = Object.fromEntries(formData)
  postData.tags = postData.tags.split('')
  fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then(post => console.log(post)
      );
      
     return redirect("/")
}

export default CreatePost;
