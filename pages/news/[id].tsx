import { MainLayout } from '../../layouts/MainLayout';
import { FullPost } from '../../components/FullPost';
import React from 'react';
import { PostComments } from '../../components/PostComments';



const FullPostPage = ({ post }) => {
  return (
    <MainLayout className="mb-50" contentFullWidth>
      <FullPost title={post.title} blocks={post.body} />
      <PostComments postId={post.id} />
    </MainLayout>
  );
};


export default FullPostPage;
