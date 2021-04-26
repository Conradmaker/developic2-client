import React from 'react';
import { PicstoryDataType } from '../../utils/data';
import BlogPistoryCard from '../Card/BlogPistoryCard';
import { BlogPicstoryListContainer } from './styles';

type PicstoryListPropsType = { data: PicstoryDataType };
export default function BlogPicstoryList({ data }: PicstoryListPropsType): JSX.Element {
  return (
    <BlogPicstoryListContainer>
      {data &&
        data.map(picstoryItem => (
          <BlogPistoryCard key={picstoryItem.id} data={picstoryItem} />
        ))}
    </BlogPicstoryListContainer>
  );
}
