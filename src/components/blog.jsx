import React from "react";
const Blog = ({ blog: { title, body }, index }) => {
          return (
                    <div className="d-inline-flex p-2 bd-highlight">
                              <h1>{title}</h1>
                              <p>{body}</p>
                    </div>
          );
};
export default Blog;
