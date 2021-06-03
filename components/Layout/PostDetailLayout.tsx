import dayjs from 'dayjs';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsExclamationTriangle } from 'react-icons/bs';
import { IoMdHeart, IoMdHeartEmpty, IoMdShare } from 'react-icons/io';
import { RiEditLine } from 'react-icons/ri';
import { PostData } from '../../modules/post';
import usePost from '../../modules/post/hooks';
import useUser from '../../modules/user/hooks';
import { LikeBtn } from '../Button/FloatingBtn';
import HashTag from '../Button/HashTag';
import PostContentViewer from '../Editor/PostContentViewer';
import ConfirmRemoveModal from '../Modal/ConfirmRemoveModal';
import { PostDetailContainer } from './styles';

type PostDetaulLayout = {
  postData: PostData;
};
export default function PostDetailLayout({ postData }: PostDetaulLayout): JSX.Element {
  const [removePostOpen, setRemovePostOpen] = useState(false);
  const { userData, addPostLikeDispatch, removePostLikeDispatch } = useUser();
  const { removePostDispatch, removePost } = usePost();
  const router = useRouter();

  const onCopy = () => {
    const tempElem = document.createElement('textarea');
    document.body.appendChild(tempElem);
    tempElem.value = `${process.env.NEXT_PUBLIC_CLIENT_HOST}${router.asPath}`;
    tempElem.select();
    document.execCommand('copy');
    document.body.removeChild(tempElem);
    if (window) {
      alert('클립보드에 복사되었습니다.');
    }
  };

  const isLike = useCallback(() => {
    if (!userData) return false;
    return (
      userData.likedPosts.findIndex(likedPost => likedPost.id === postData.id) !== -1
    );
  }, [userData?.likedPosts]);

  const onToggleLike = useCallback(() => {
    if (!userData) return alert('로그인을 먼저 해주세요.');
    const payload = { UserId: userData.id, PostId: postData.id };
    isLike() ? removePostLikeDispatch(payload) : addPostLikeDispatch(payload);
  }, [userData]);

  const onRemovePost = useCallback(() => {
    removePostDispatch(postData.id);
  }, []);
  useEffect(() => {
    if (removePost.data && userData) {
      removePost.data.id === +(router.query.postId as string)
        ? router.replace(`/${userData.id}/post`)
        : null;
    }
  }, [removePost.data]);
  return (
    <PostDetailContainer>
      <section className="blog__head">
        <h1>{postData.title}</h1>
        <Link href={`/${postData.User.id}/post`}>
          <article>
            <img src={postData.User.avatar} alt="user_avatar" />
            <strong>{postData.User.nickname}</strong>
            <span>님의 글</span>
          </article>
        </Link>
        <div>
          <ul>
            {postData.HashTags.map(tag => (
              <HashTag key={tag.id} name={tag.name} />
            ))}
          </ul>
          <div className="post__menu">
            <p>{dayjs(postData.createdAt).format('YYYY년 MM월 DD일')} 작성.</p>

            <ul>
              <li>
                {isLike() ? <IoMdHeart /> : <IoMdHeartEmpty />} {postData.likers.length}
              </li>
              <li onClick={onCopy}>
                <IoMdShare /> 공유
              </li>

              {userData ? (
                userData.id === postData.UserId ? (
                  <>
                    <li onClick={() => setRemovePostOpen(true)}>
                      <AiOutlineDelete /> 삭제
                    </li>
                    <Link href={`/edit/content/${postData.id}`}>
                      <li>
                        <RiEditLine /> 수정
                      </li>
                    </Link>
                  </>
                ) : (
                  <li>
                    <BsExclamationTriangle /> 신고
                  </li>
                )
              ) : null}
            </ul>
          </div>
        </div>
      </section>
      <section className="blog__posting">
        <img src={postData.thumbnail} alt="thumbnail" />
        <PostContentViewer content={postData.content} />
        <LikeBtn isLike={isLike} onToggleLike={onToggleLike} />
      </section>
      {removePostOpen && (
        <ConfirmRemoveModal
          title="포스트 삭제"
          description="글을 삭제하시겠습니까?"
          onClose={() => setRemovePostOpen(false)}
          onConfirm={onRemovePost}
        />
      )}
    </PostDetailContainer>
  );
}
