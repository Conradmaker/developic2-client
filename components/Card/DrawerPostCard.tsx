import React from 'react';
import { DrawerPostCardContainer } from './styles';
import { RiArrowRightSLine } from 'react-icons/ri';

export default function DrawerPostCard(): JSX.Element {
  return (
    <DrawerPostCardContainer>
      <img src="/test_img.jpeg" alt="thumnail" />
      <div className="content">
        <img src="/avatar_sample.png" alt="avatar" />
        <div className="writer">
          <strong>일번 작가 </strong>
          <small> 님의 글</small>
        </div>
        <article>
          <h3>제목은 뭘까. 그리고 음 </h3>
          <p>
            '작게 생각하라'는 것도 필요하다. 꼭 '중요한' 사건만 남에게 보여줄 가치가 있는
            것은 아니다.
          </p>
          <p>2021.03.19</p>
          <div className="circle">
            <RiArrowRightSLine />
          </div>
        </article>
      </div>
      <div className="delete__btn">삭제</div>
    </DrawerPostCardContainer>
  );
}
