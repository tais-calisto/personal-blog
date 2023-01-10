import React from 'react';

const PostDate = ({ date }: { date: string }) => {
  const fullDate = new Date(date);

  const postDay = fullDate.getDate();
  const postMonth = fullDate.getMonth() + 1;
  const postYear = fullDate.getFullYear();

  console.log(postMonth);

  const postDate = `${postDay}/${postMonth}/${postYear}`;

  return (
    <div>
      <p>{postDate}</p>
    </div>
  );
};

export default PostDate;
