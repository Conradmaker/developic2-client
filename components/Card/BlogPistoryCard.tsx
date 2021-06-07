import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { MdBook, MdFavorite, MdRemoveRedEye } from 'react-icons/md';
import { BlogPicstory, BlogPost } from '../../modules/blog';
import { BlogPicstoryCardBox } from './styles';

const countTotal = {
  like: (list: BlogPost[]) =>
    list.reduce((acc, cur) => acc + (cur.likeCount as number), 0),
  hit: (list: BlogPost[]) => list.reduce((acc, cur) => acc + cur.hits, 0),
};

type PicstoryCardPropsType = {
  picstoryData: BlogPicstory;
};

export default function BlogPistoryCard({
  picstoryData,
}: PicstoryCardPropsType): JSX.Element {
  const router = useRouter();
  const { userId } = router.query;

  const posts = picstoryData.Posts;

  const likeCountTotal = useMemo(() => countTotal.like(posts), [posts]);
  const viewCountTotal = useMemo(() => countTotal.hit(posts), [posts]);

  if (!picstoryData) return <></>;

  return (
    <Link href={`/${userId}/picstory/${picstoryData.id}`}>
      <BlogPicstoryCardBox>
        <article>
          <div className="picstory__description">
            <h3>{picstoryData.title}</h3>
            <div className="picstory__stats">
              <div>
                <MdBook />
                <span>{picstoryData.Posts.length || 0}</span>
              </div>
              <div>
                <MdFavorite />
                <span>{likeCountTotal}</span>
              </div>
              <div>
                <MdRemoveRedEye />
                <span>{viewCountTotal}</span>
              </div>
            </div>
          </div>
          <p>{picstoryData.description}</p>
          <ul className="picstory__recent-img">
            {posts &&
              posts.slice(0, 6).map(picstoryImgItem => (
                <li className="img__box" key={picstoryImgItem.id}>
                  <img src={picstoryImgItem.thumbnail} alt="picstory-thumbnail" />
                </li>
              ))}
          </ul>
        </article>
      </BlogPicstoryCardBox>
    </Link>
  );
}
