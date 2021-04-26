import styled from '@emotion/styled';
import Head from 'next/head';
import React from 'react';
import { IoMdHeartEmpty, IoMdHeart, IoMdShare } from 'react-icons/io';
import { BsExclamationTriangle } from 'react-icons/bs';
import HashTag from '../../components/Button/HashTag';
import Layout from '../../components/Layout';
import BlogCommentCard from '../../components/Card/BlogCommentCard';
import { comments } from '../../utils/data';
import Button from '../../components/Button/Button';

const CommentContainer = styled.div`
  width: 1150px;
  margin: 0 auto;
  padding: 50px 175px 0 175px;
  border-top: 1px solid ${({ theme }) => theme.grayScale[2]};
  & > p {
    color: ${({ theme }) => theme.textColor.initial};
    font-family: 'Noto Serif KR';
  }
  & > form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    textarea {
      resize: none;
      border: none;
      outline: none;
      width: 800px;
      height: 95px;
      margin-top: 10px;
      padding: 10px;
      line-height: 24px;
      font-family: 'Noto Serif KR';
      font-size: ${({ theme }) => theme.fontSize.base};
      font-weight: ${({ theme }) => theme.fontWeight.regular};
    }
    button {
    }
  }
  & > ul {
    margin-bottom: 100px;
  }
`;
const BlogContainer = styled.div`
  width: 900px;
  margin: 0 auto;
  margin-bottom: 100px;
  .blog__head {
    color: ${({ theme }) => theme.textColor.initial};
    font-family: 'Noto Serif KR';
    padding-top: 150px;
    & > h1 {
      font-size: ${({ theme }) => theme.fontSize.titleSize};
    }
    & > article {
      display: flex;
      align-items: center;
      margin-top: 40px;
      img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 50%;
      }
      strong {
        font-size: ${({ theme }) => theme.fontSize.xl};
        font-weight: ${({ theme }) => theme.fontWeight.medium};
        margin-left: 10px;
      }
      span {
        font-size: ${({ theme }) => theme.fontSize.base};
        color: ${({ theme }) => theme.textColor.lighten};
        transform: translateY(3px);
        margin-left: 10px;
      }
    }
    & > div {
      display: flex;
      justify-content: space-between;
      & > ul {
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        min-height: 70px;
        align-items: flex-end;
        padding-top: 30px;
      }
      & > article {
        width: 250px;
        margin-left: 50px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        p {
          text-align: end;
          color: ${({ theme }) => theme.textColor.lighten};
          font-size: ${({ theme }) => theme.fontSize.base};
        }
        ul {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          font-size: ${({ theme }) => theme.fontSize.base};
          li {
            display: flex;
            align-items: center;
            padding: 5px 0 5px 15px;
            line-height: 15px;
            svg {
              margin-right: 10px;
            }
          }
          li + li {
            border-left: 1px solid ${({ theme }) => theme.textColor.initial};
          }
        }
      }
    }
  }
  .blog__posting {
    margin-top: 35px;
    & > img {
      width: 900px;
      height: 450px;
      object-fit: cover;
    }
    & > article {
      width: 800px;
      margin: 0 auto;
      margin-bottom: 100px;
      color: ${({ theme }) => theme.textColor.initial};
      font-size: ${({ theme }) => theme.fontSize.base};
    }
  }
`;
type HashTagPropsType = {
  id: number;
  name: string;
};
const hashTag: HashTagPropsType[] = [
  { id: 1, name: '디디디디벨벨' },
  { id: 2, name: '로로픽' },
  { id: 3, name: '디벨디벨' },
  // { id: 4, name: '로로픽' },
  // { id: 5, name: '디벨디벨' },
  // { id: 6, name: '로로픽' },
  // { id: 7, name: '디벨디벨' },
];
export default function postId(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>DEVELOPIC | post</title>
      </Head>
      <BlogContainer>
        <section className="blog__head">
          <h1>제목이다 제목제목</h1>
          <article>
            <img
              src="https://blog.kakaocdn.net/dn/sOFQo/btqFXIdG4BC/OSX6phlqjlj7p3EYH1jZjk/img.png"
              alt="profileImage"
            />
            <strong>일번 작가</strong>
            <span>님의 글</span>
          </article>
          <div>
            <ul>
              {hashTag.map(v => (
                <HashTag key={v.id} name={v.name} />
              ))}
            </ul>
            <article>
              <p>2021년 03월 21일 작성.</p>
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
              </ul>
            </article>
          </div>
        </section>
        <section className="blog__posting">
          <img
            src="https://cdn.crowdpic.net/list-thumb/thumb_l_D033E20FA5FA98C38CBB08013031FFA1.jpg"
            alt="thumbnail"
          />
          <article>ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㅇㄹ</article>
        </section>
      </BlogContainer>
      <CommentContainer>
        <p>댓글입력</p>
        <form>
          <textarea></textarea>
          <Button text="작성" bar />
        </form>
        <ul>
          {comments.map(v => (
            <BlogCommentCard key={v.id} data={v} />
          ))}
        </ul>
      </CommentContainer>
    </Layout>
  );
}
