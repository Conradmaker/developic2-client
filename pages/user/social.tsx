import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Layout from 'components/Layout';
import { useUser } from 'hooks';

const SocialAuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .banner {
    margin: 50px 0;
    width: 550px;
  }
  .loading {
    width: 70px;
  }
  p {
    margin: 20px 0 100px 0;
    font-size: 20px;
    font-family: 'Noto Serif KR';
    color: ${({ theme }) => theme.textColor.initial};
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    .banner {
      margin: 50px 0;
      width: 100%;
    }
  }
`;
export default function social(): JSX.Element {
  const { login, socialLoginDispatch } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (!router.query.email) return;
    socialLoginDispatch({
      loginType: router.query.type as string,
      email: router.query.email as string,
    });
  }, [router.query]);
  useEffect(() => {
    if (login.data) router.replace('/');
  }, [login]);
  return (
    <Layout>
      <SocialAuthContainer>
        <img src="/auth_loading.png" alt="이미지" className="banner" />
        <img src="/pencil_loading.gif" alt="이미지" className="loading" />
        <p>잠시만 기다려주세요</p>
      </SocialAuthContainer>
    </Layout>
  );
}
