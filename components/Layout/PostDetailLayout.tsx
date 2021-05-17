import React from 'react';
import { BsExclamationTriangle } from 'react-icons/bs';
import { IoMdHeartEmpty, IoMdShare } from 'react-icons/io';
import { RiEditLine } from 'react-icons/ri';
import { PostData } from '../../modules/post';
import useUser from '../../modules/user/hooks';
import HashTag from '../Button/HashTag';
import PostContentViewer from '../Editor/PostContentViewer';
import { PostDetailContainer } from './styles';

type PostDetaulLayout = {
  postData: PostData;
};
export default function PostDetailLayout({ postData }: PostDetaulLayout): JSX.Element {
  const { userData } = useUser();
  return (
    <PostDetailContainer>
      <section className="blog__head">
        <h1>{postData.title}</h1>
        <article>
          <img src={postData.User.avatar} alt="user_avatar" />
          <strong>{postData.User.nickname}</strong>
          <span>님의 글</span>
        </article>
        <div>
          <ul>
            {postData.HashTags.map(tag => (
              <HashTag key={tag.id} name={tag.name} />
            ))}
          </ul>
          <div className="post__menu">
            <p>{postData.updatedAt} 작성.</p>
            <ul>
              <li>
                {/* <IoMdHeart /> */}
                <IoMdHeartEmpty /> 좋아요
              </li>
              <li>
                <IoMdShare /> 공유
              </li>
              <li>
                <BsExclamationTriangle /> 신고
              </li>
              {userData ? (
                userData.id === postData.UserId ? (
                  <>
                    <li>
                      <IoMdShare /> 삭제
                    </li>
                    <li>
                      <RiEditLine /> 수정
                    </li>
                  </>
                ) : null
              ) : null}
            </ul>
          </div>
        </div>
      </section>
      <section className="blog__posting">
        <img src={postData.thumbnail} alt="thumbnail" />
        <PostContentViewer content={postData.content} />
      </section>
    </PostDetailContainer>
  );
}
