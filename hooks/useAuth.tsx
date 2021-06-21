import { delay } from 'lodash';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useUI from '../modules/ui/hooks';
import useUser from '../modules/user/hooks';

type UseAuthType = {
  replace: boolean; //true시 홈으로
};
export default function useAuth({ replace = false }: UseAuthType) {
  const { userData, authDispatch } = useUser();
  const { toastOpenDispatch } = useUI();
  const router = useRouter();

  const goHome = async () => {
    await delay(() => {
      toastOpenDispatch('로그인이 필요한 서비스입니다.');
      router.replace('/');
    }, 500);
  };

  useEffect(() => {
    authDispatch();
  }, []);

  useEffect(() => {
    if (replace && !userData) {
      goHome();
    }
  }, []);

  return { userData };
}
