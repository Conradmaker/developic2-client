import React from 'react';
import { PostDataType } from '../../utils/data';
import CommonPostCard from '../Card/CommonPostCard';
import { PostSearchListContainer } from './styles';

type PostCardListPropsType = {
  data: PostDataType;
};

export default function PostCardList({ data }: PostCardListPropsType): JSX.Element {
  return (
    <PostSearchListContainer>
      {data && data.map(postItem => <CommonPostCard key={postItem.id} data={postItem} />)}
    </PostSearchListContainer>
  );
}
