import React from 'react';
import { BlogPicstory, BlogPicstoryListData } from '../../modules/blog';
import BlogPistoryCard from '../Card/BlogPistoryCard';
import { BlogPicstoryListContainer } from './styles';

type PicstoryListPropsType = {
  blogPicstoryListData?: BlogPicstoryListData['blogPicstories'];
  searchPicstoryData?: BlogPicstoryListData['blogPicstories'];
};
export default function BlogPicstoryList({
  blogPicstoryListData,
  searchPicstoryData,
}: PicstoryListPropsType): JSX.Element {
  return (
    <BlogPicstoryListContainer>
      {blogPicstoryListData &&
        blogPicstoryListData.map((picstoryItem: BlogPicstory) => (
          <BlogPistoryCard key={picstoryItem.id} picstoryData={picstoryItem} />
        ))}
      {searchPicstoryData &&
        searchPicstoryData.map((picstoryItem: BlogPicstory) => (
          <BlogPistoryCard key={picstoryItem.id} picstoryData={picstoryItem} />
        ))}
    </BlogPicstoryListContainer>
  );
}
