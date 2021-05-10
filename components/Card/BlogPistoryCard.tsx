import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { MdBook, MdFavorite, MdRemoveRedEye } from 'react-icons/md';
import { BlogPicstory, Post } from '../../modules/blog';
import { countSum } from '../../utils/utils';
import { BlogPicstoryCardBox } from './styles';

type PicstoryCardPropsType = {
  picstoryData: BlogPicstory;
};

export default function BlogPistoryCard({
  picstoryData,
}: PicstoryCardPropsType): JSX.Element {
  const router = useRouter();
  const { userId } = router.query;

  const posts = picstoryData.Posts;

  const likeCounts = posts.map((post: Post) => post.likers?.length);
  const likeCountSum = countSum(likeCounts as number[]);

  const hits = posts.map((post: Post) => post.hits);
  const viewCountSum = countSum(hits);

  return (
    <Link href={`/${userId}/picstory/${picstoryData.id}`}>
      <BlogPicstoryCardBox>
        <article>
          <div className="picstory__description">
            <h3>{picstoryData.title}</h3>
            <div className="picstory__stats">
              <div>
                <MdBook />
                <span>{picstoryData.Posts && picstoryData.Posts.length}</span>
              </div>
              <div>
                <MdFavorite />
                <span>{likeCountSum && likeCountSum}</span>
              </div>
              <div>
                <MdRemoveRedEye />
                <span>{viewCountSum && viewCountSum}</span>
              </div>
            </div>
          </div>
          <p>{picstoryData.description}</p>
          <ul className="picstory__recent-img">
            {posts &&
              posts.map((picstoryImgItem: { thumbnail: string }) => (
                <li className="img__box">
                  <img src={picstoryImgItem.thumbnail} alt="picstory-thumbnail" />
                </li>
              ))}
          </ul>
        </article>
      </BlogPicstoryCardBox>
    </Link>
  );
}
