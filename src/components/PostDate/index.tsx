import React from 'react';
import { Container } from './style';

const PostDate = ({ date }: { date: string }) => {
  const fullDate = new Date(date);

  const postDay = fullDate.getDate();
  let postMonth = fullDate.getMonth() + 1;

  const postYear = fullDate.getFullYear();

  const postDate =
    postMonth < 10
      ? `${postDay}/0${postMonth}/${postYear}`
      : `${postDay}/${postMonth}/${postYear}`;

  return (
    <Container>
      <p>{postDate}</p>
    </Container>
  );
};

export default PostDate;
