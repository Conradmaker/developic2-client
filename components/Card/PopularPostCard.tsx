import Link from 'next/link';
import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import { BiLike } from 'react-icons/bi';
import { PostType } from '../../modules/list';
import { HashTagBox, PopularPostCardBox } from './styles';

function HashTag({ tagData }: { tagData: { id: number; name: string } }) {
  return (
    <Link href={`/discovery?tag=${tagData.name}`}>
      <HashTagBox>{tagData.name}</HashTagBox>
    </Link>
  );
}

interface PopularPostCardPropsType {
  postData: PostType;
}

export default function PopularPostCard({
  postData,
}: PopularPostCardPropsType): JSX.Element {
  return (
    <Link href={`/${postData.User.id}/post/${postData.id}`}>
      <PopularPostCardBox>
        <img src={postData.thumbnail} alt="thumbnail" />

        <article>
          <h5>{postData.title}</h5>
          <p>{postData.User.nickname}</p>
          <div className="like__box">
            <small>
              <BiLike />
              <span>{postData.likers?.length}</span>
            </small>
            <small>
              <AiFillEye />
              <span>{postData.hits}</span>
            </small>
          </div>
          <ul>
            {postData.HashTags?.map(tag => (
              <HashTag key={Math.random()} tagData={tag} />
            ))}
          </ul>
        </article>
      </PopularPostCardBox>
    </Link>
  );
}
