import React from 'react';
import PostHeader from './postHeader';

const Post = ({ data }) => (
  <div className="post">
    <PostHeader userName={data.userName} userAvatar={data.userAvatar} lastView={data.lastView} />
    <div className="post-content">
      <span>{data.postContent}</span>
    </div>
  </div>
);

export default Post;
