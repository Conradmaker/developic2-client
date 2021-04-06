import React from 'react';
import SquareBtn from '../Button/SquareBtn';
import { UnfinishedPostCardContainer } from './styles';

export default function UnfinishedPostCard(): JSX.Element {
  return (
    <UnfinishedPostCardContainer>
      <article>
        <h2>아직 끝내지 못한 글</h2>
        <p>
          진서는 "자서전, 회고록, 개인사·가족사 기록 등 형식과 관계없이 스스로의 삶에 대한
          기록을 남기는 것은 인간의 본능적인 행동"이라고 말한다. 꼭 책으로 펴내지 않더라도
          삶을 글로 정리하고 보존하는 것은 개인적인 만족감을 준다. ...
        </p>
        <span>2021.03.19 수정</span>
      </article>
      <div className="btn__group">
        <SquareBtn>이어작성</SquareBtn>
        <SquareBtn>삭제</SquareBtn>
      </div>
    </UnfinishedPostCardContainer>
  );
}
