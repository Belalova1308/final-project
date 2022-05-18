import React from "react";
  
import Blogs from "./components/blogs";
  
const App = () => {
  return (
    <div>
      {/* <div className="d-inline-flex p-2"><h1 className="d-flex align-items-start">
        Music that inspires
      </h1></div> */}
      <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1 m">
        Music that inspires
      </span>
  </div>
</nav>
      
      <Blogs/>
      </div>
  );
};
  
export default App;