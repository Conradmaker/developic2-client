import React from 'react';
import { CommentsPropstype } from '../../utils/data';
import { BlogCommentCardBox } from './styles';

type BlogCommentCardPropsType = {
  data: CommentsPropstype;
};
export default function BlogCommentCard({ data }: BlogCommentCardPropsType): JSX.Element {
  return (
    <BlogCommentCardBox>
      <section>
        <article>
          <img
            src="https://cdn.crowdpic.net/list-thumb/thumb_l_D033E20FA5FA98C38CBB08013031FFA1.jpg"
            alt="userImage"
          />
          <div>
            <strong>{data.name}</strong>
            <p>{data.date}</p>
          </div>
        </article>
        <div>
          <span>수정</span>
          <span>삭제</span>
          {/* <span>신고</span> */}
        </div>
      </section>
      <article>{data.text}</article>
    </BlogCommentCardBox>
  );
}
