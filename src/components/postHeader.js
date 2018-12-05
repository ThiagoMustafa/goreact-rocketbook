import React from 'react';

const PostHeader = ({ userName, userAvatar, lastView }) => {
  const elapsedTime = (lastView) => {
    const newDate = new Date();
    const oldDate = new Date(lastView);
    const timeDiff = (newDate - oldDate) / 1000;
    const diff = {};

    diff.years = newDate.getFullYear() - oldDate.getFullYear();
    diff.months = newDate.getMonth() - oldDate.getMonth();
    diff.days = Math.floor(timeDiff / 86400);
    diff.hours = Math.floor((timeDiff / 3600) % 24);
    diff.minutes = Math.floor((timeDiff / 60) % 60);
    diff.seconds = Math.floor(timeDiff % 60);

    if (diff.years > 0) return `há ${diff.years}a`;
    if (diff.months > 0 && diff.days >= 30) return `há ${diff.months}m`;
    if (diff.days > 0) return `há ${diff.days}d`;
    if (diff.hours > 0) return `há ${diff.hours}h`;
    if (diff.minutes > 0) return `há ${diff.minutes} min`;
    return `há ${diff.seconds}s`;
  };

  return (
    <div className="post-header">
      <div className="avatar-container">
        <img className="avatar" src={`/img/${userAvatar}`} alt={userName} />
        <div className="user-content">
          <p className="user-name">{userName}</p>
          <p className="last-view">{elapsedTime(lastView)}</p>
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
