import React from 'react';
import { Comment } from '../../modules/post';
import { BlogCommentCardBox } from './styles';

type BlogCommentCardPropsType = {
  commentData: Comment;
};
export default function BlogCommentCard({
  commentData,
}: BlogCommentCardPropsType): JSX.Element {
  return (
    <BlogCommentCardBox>
      <section>
        <article>
          <img src={commentData.User.avatar} alt="user_avatar" />
          <div>
            <strong>{commentData.User.nickname}</strong>
            <p>{commentData.updatedAt}</p>
          </div>
        </article>
        <div>
          <span>수정</span>
          <span>삭제</span>
          {/* <span>신고</span> */}
        </div>
      </section>
      <article>{commentData.content}</article>
    </BlogCommentCardBox>
  );
}
