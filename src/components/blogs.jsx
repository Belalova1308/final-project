import React, { useState } from "react";
import api from "../api";
const blogs = () => {
    const [blogPosts, setBlogPosts] = useState(api.blogPosts.fetchAll());
    return (
        <table class="table">
            <tbody>
                <tr>
                    {blogPosts.map((blog) =>
                        blog.id < 4 ? <td>{blog.title}</td> : ""
                    )}
                </tr>
                <tr>
                    {blogPosts.map((blog) =>
                        blog.id < 4 ? <td>{blog.body}</td> : ""
                    )}
                </tr>
                <tr>
                    {blogPosts.map((blog) =>
                        blog.id > 3 ? <td>{blog.title}</td> : ""
                    )}
                </tr>
                <tr>
                    {blogPosts.map((blog) =>
                        blog.id > 3 ? <td>{blog.body}</td> : ""
                    )}
                </tr>
            </tbody>
        </table>
    );
};
export default blogs;
