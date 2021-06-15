import styled from '@emotion/styled';
import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  SetStateAction,
  Dispatch,
} from 'react';

const FetchMoreTriggerContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  img {
    display: block;
    height: 80px;
  }
  p {
    color: ${({ theme }) => theme.textColor.initial};
    font-size: 14px;
    font-family: 'Noto Serif KR';
  }
`;
export default function useFetchMore(
  loading = false
): [() => JSX.Element, number, Dispatch<SetStateAction<number>>] {
  const [page, setPage] = useState(0);

  const FetchMore = useCallback(() => {
    const fetchMoreTrigger = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) setPage(prev => prev + 1);
      });
      if (fetchMoreTrigger.current) {
        fetchMoreObserver.observe(fetchMoreTrigger.current);
      }
      return () => {
        if (fetchMoreTrigger.current) {
          fetchMoreObserver.unobserve(fetchMoreTrigger.current);
        }
      };
    }, []);

    return (
      <FetchMoreTriggerContainer
        id="fetchMore"
        className={loading ? 'loading' : ''}
        ref={fetchMoreTrigger}
      >
        {loading ? (
          <>
            <img src="/pencil_loading.gif" alt="loading..." />
            <p>불러오는중..</p>
          </>
        ) : (
          <p>모든 데이터를 불러왔습니다.</p>
        )}
      </FetchMoreTriggerContainer>
    );
  }, [loading]);

  return [FetchMore, page, setPage];
}
