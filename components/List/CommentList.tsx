import React from 'react';
import { Comment } from '../../modules/post';
import Button from '../Button/Button';
import BlogCommentCard from '../Card/BlogCommentCard';
import { PostCommentListContainer } from './styles';

type CommentListPropsType = {
  commentsData: Comment[];
};

export default function CommentList({ commentsData }: CommentListPropsType): JSX.Element {
  return (
    <PostCommentListContainer>
      <p>댓글입력</p>
      <form>
        <textarea></textarea>
        <Button text="작성" bar />
      </form>
      <ul>
        {commentsData.map(comment => (
          <BlogCommentCard key={comment.id} commentData={comment} />
        ))}
      </ul>
    </PostCommentListContainer>
  );
}
