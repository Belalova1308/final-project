import React, { useState } from "react";
import api from "../api";
const blogs = () => {
    const [blogPosts, setBlogPosts] = useState(api.blogPosts.fetchAll());
    return (
        <table class="table">
            <tbody>
                <tr>
                    {blogPosts.map((blog) => (
                        <td>{blog.title}</td>
                    ))}
                </tr>
            </tbody>
        </table>
    );
};
export default blogs;
