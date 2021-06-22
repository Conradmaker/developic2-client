import { useRouter } from 'next/router';
import React, { useCallback } from 'react';

import { Comment } from 'modules/post';
import Button from '../Button/Button';
import BlogCommentCard from '../Card/BlogCommentCard';
import { PostCommentListContainer } from './styles';
import { useInput, useUser, usePost } from 'hooks';

type CommentListPropsType = {
  commentsData: Comment[];
};

export default function CommentList({ commentsData }: CommentListPropsType): JSX.Element {
  const { createCommentDispatch } = usePost();
  const { userData } = useUser();
  const router = useRouter();
  const [newComment, onChangeNewComment, setNewComment] = useInput('');

  const onSubmitComment = useCallback(
    (e: React.FormEvent) => {
      if (!userData) return;
      e.preventDefault();
      createCommentDispatch({
        PostId: +(router.query.postId as string),
        UserId: userData.id,
        content: newComment,
        mentionedUser: null,
      });
      setNewComment('');
      scrollTo({ top: 9999 });
    },
    [newComment]
  );

  return (
    <PostCommentListContainer>
      <p>댓글입력</p>
      <form onSubmit={onSubmitComment}>
        <textarea
          value={userData ? newComment : '로그인이 필요한 서비스 입니다.'}
          onChange={onChangeNewComment}
        ></textarea>
        {userData ? <Button type="submit" text="작성" bar /> : null}
      </form>
      <ul>
        {commentsData.map(comment => (
          <BlogCommentCard key={comment.id} commentData={comment} />
        ))}
      </ul>
    </PostCommentListContainer>
  );
}
