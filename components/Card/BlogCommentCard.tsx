import dayjs from 'dayjs';
import Link from 'next/link';
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
          <Link href={`/${commentData.User.id}/post`}>
            <img src={commentData.User.avatar} alt="user_avatar" />
          </Link>
          <div>
            <strong>{commentData.User.nickname}</strong>
            <p>{dayjs(commentData.updatedAt).format('YYYY년 MM월 DD일')}</p>
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
