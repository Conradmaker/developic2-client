import React from 'react';
import BlogPistoryCard from '../Card/BlogPistoryCard';
import { BlogPicstoryListContainer } from './styles';

export default function BlogPicstoryList(): JSX.Element {
  return (
    <BlogPicstoryListContainer>
      <BlogPistoryCard />
      <BlogPistoryCard />
      <BlogPistoryCard />
    </BlogPicstoryListContainer>
  );
}
