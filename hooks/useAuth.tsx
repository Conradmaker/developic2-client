import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

import { User, useUser } from 'modules/user';

type UseAuthType = {
  replace: boolean; //true시 홈으로
};
export function useAuth({ replace = false }: UseAuthType): { userData: User | null } {
  const { userData, authDispatch, auth } = useUser();
  const router = useRouter();

  const goHome = useCallback(() => {
    if (replace && auth.error) {
      alert('로그인이 필요한 서비스입니다.');
      router.replace('/');
    }
  }, [auth]);

  useEffect(() => {
    authDispatch();
  }, []);

  useEffect(() => {
    goHome();
  }, [auth.error]);

  return { userData };
}

export default useAuth;
