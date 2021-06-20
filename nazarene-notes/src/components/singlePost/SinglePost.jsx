import "./singlePost.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function SinglePost() {
  const location = useLocation();
  const { featuredImage, title, details } = location.state.post.fields;

  console.log(details.content);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src={featuredImage.fields.file.url}
          alt=""
          className="singlePostImg"
        />
      </div>
      <h1 className="singlePostTitle">
        {title.content[0].content[0].value}
        <div className="singlePostEdit">
          <span className="singlePostIcon">
            <FaEdit />
          </span>

          <span className="singlePostIcon">
            {" "}
            <FaTrashAlt />
          </span>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">
          Author:<b>Nazarene</b>
        </span>
        <span className="singlePostDate">1 hour ago</span>
      </div>
      {details.content.map((content) => {
        return (
          <p className="singlePostDescription">
            {content.content.map((item) => item.value)}
          </p>
        );
      })}
    </div>
  );
}

export default SinglePost;
