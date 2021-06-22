import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Layout from 'components/Layout';
import { useUser } from 'hooks';
import { SocialAuthContainer } from 'styles/pages/user';

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
