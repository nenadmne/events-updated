import { useEffect, useState } from "react";
import classes from "./comment-list.module.css";

function CommentList({ eventId }) {
  const [data, setData] = useState();
  const addCommentHandler = async () => {
    const response = await fetch(`/api/comments/${eventId}`);
    const responseData = await response.json();
    setData(responseData);
  };

  useEffect(() => {
    addCommentHandler();
  }, []);

  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      {data &&
        data.result.map((item) => (
          <li key={item._id}>
            <p>{item.text}</p>
            <div>
              By <address>{item.name}</address>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default CommentList;
