/* eslint-disable react/prop-types */

import "./SinglePost.css"

const SinglePost = ({ element }) => {
  const { id, title, body } = element;
  return (
    <div>
      <div className="single-post-card">
        <h4>Id: <span>{id}</span></h4>
        <h4>Title:  <span>{title}</span></h4>
       
        <h4>Body:</h4>
        <span><p>{body}</p></span>
      </div>
    </div>
  );
};

export default SinglePost;
