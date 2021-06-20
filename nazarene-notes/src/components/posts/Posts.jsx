import "./posts.css";
import Post from "../post/Post";
import { useEffect, useState } from "react";
import { client } from "../../contentfulClient";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    client
      .getEntries()
      .then((entries) => setPosts(entries.items))
      .catch(console.error);
    return () => {};
  }, []);
  return (
    <div className="posts">
      {posts.map((post) => {
        return <Post post={post} />;
      })}
    </div>
  );
}
