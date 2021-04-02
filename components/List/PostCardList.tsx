import React from 'react';
import { PostDataType } from '../../utils/postData';
import CommonPostCard from '../Card/CommonPostCard';
import { ListContainer } from './styles';

type PostCardListPropsType = {
  data: PostDataType;
};

export default function PostCardList({ data }: PostCardListPropsType): JSX.Element {
  return (
    <ListContainer>
      {data && data.map(postItem => <CommonPostCard key={postItem.id} data={postItem} />)}
    </ListContainer>
  );
}
