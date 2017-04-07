import React, {PropTypes} from "react";
import Post from "./Post";

function Feed({posts}) {
  return (
    <div>
      {posts.map(post =>
        <Post post={post} />
      )}
    </div>
  );
}

export default Feed;
