import React from "react";
import { PostContainer, PostTitle, PostBody } from './ui';

export type PostProps = {
  title: string;
  body: string;
};

const Post = ({ title, body }: PostProps) => {
  return (
    <PostContainer>
      <PostTitle> {title}</PostTitle>
      <PostBody> {body}</PostBody>
    </PostContainer>
  );
};

export default Post;
