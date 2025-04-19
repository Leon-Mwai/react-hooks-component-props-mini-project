import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog"; // Import the blog data

function App() {
  const blogName = "My Personal Blog"; // Name of the blog
  const aboutText = "This is a personal blog about tech, life, and everything in between."; // About text

  return (
    <div className="App">
      <Header name={blogName} />
      <About image="https://via.placeholder.com/215" about={aboutText} />
      <ArticleList posts={blogData} /> {/* Pass blogData as posts */}
    </div>
  );
}

export default App;
