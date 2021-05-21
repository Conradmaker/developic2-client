import React from 'react';
import { BlogPicstory, BlogPicstoryListData } from '../../modules/blog';
import BlogPistoryCard from '../Card/BlogPistoryCard';
import { BlogPicstoryListContainer } from './styles';

type PicstoryListPropsType = {
  blogPicstoryListData: BlogPicstoryListData['blogPicstories'];
};
export default function BlogPicstoryList({
  blogPicstoryListData,
}: PicstoryListPropsType): JSX.Element {
  return (
    <BlogPicstoryListContainer>
      <div className="empty_content">
        {blogPicstoryListData.length < 1 && '등록된 픽스토리가 없습니다.'}
      </div>
      {blogPicstoryListData &&
        blogPicstoryListData.map((picstoryItem: BlogPicstory) => (
          <BlogPistoryCard key={picstoryItem.id} picstoryData={picstoryItem} />
        ))}
    </BlogPicstoryListContainer>
  );
}
