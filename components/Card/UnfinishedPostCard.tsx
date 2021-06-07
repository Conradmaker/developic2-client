import dayjs from 'dayjs';
import Link from 'next/link';
import React from 'react';
import { TempItemType } from '../../modules/drawer';
import useDrawer from '../../modules/drawer/hooks';
import SquareBtn from '../Button/SquareBtn';
import { UnfinishedPostCardContainer } from './styles';

type UnfinishedPostCardPropsType = {
  id: number;
  tempPostData: TempItemType;
};
export default function UnfinishedPostCard({
  tempPostData,
}: UnfinishedPostCardPropsType): JSX.Element {
  const { removeTempPostDispatch } = useDrawer();

  const onDeleteTempPost = React.useCallback(() => {
    removeTempPostDispatch(tempPostData.id);
  }, [tempPostData]);

  return (
    <UnfinishedPostCardContainer>
      <article>
        <h2>{tempPostData.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: tempPostData.content }}></p>
        <span>{dayjs(tempPostData.updatedAt).format('YYYY년 MM월 DD일 HH시')} 수정</span>
      </article>
      <div className="btn__group">
        <Link href={`/edit/content/${tempPostData.id}`}>
          <SquareBtn>이어작성</SquareBtn>
        </Link>
        <SquareBtn onClick={onDeleteTempPost}>삭제</SquareBtn>
      </div>
    </UnfinishedPostCardContainer>
  );
}
