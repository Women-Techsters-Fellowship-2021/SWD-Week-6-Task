import { useHistory } from "react-router-dom";
import "./post.css";

function Post({ post }) {
  const history = useHistory();
  const { featuredImage, title, description } = post.fields;
  return (
    <div className="post">
      <img
        className="postImg"
        src={featuredImage.fields.file.url}
        alt="add here"
      />
      <div className="postInfo">
        <span
          className="postTitle"
          onClick={() =>
            history.push(`/post/10`, {
              post: post,
            })
          }
        >
          {title.content[0].content[0].value}
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">{description}</p>
    </div>
  );
}

export default Post;
