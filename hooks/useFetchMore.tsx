import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useRef, useEffect, useState, useCallback } from 'react';

const FetchMoreTriggerContainer = styled.div<{ loading: boolean }>`
  width: 100%;
  height: 80px;
  img {
    margin: 0 auto;
    display: none;
    height: 80px;
  }
  p {
    display: none;
    text-align: center;
    font-size: 14px;
    font-family: 'Noto Serif KR';
  }
  ${props =>
    props.loading &&
    css`
      img,
      p {
        display: block;
      }
    `}
`;
export default function useFetchMore(loading = false): [() => JSX.Element, number] {
  const [page, setPage] = useState(0);

  const FetchMore = useCallback(() => {
    const fetchMoreTrigger = useRef<HTMLDivElement>(null);
    const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) setPage(prev => prev + 1);
    });

    useEffect(() => {
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
        loading={loading}
        id="fetchMore"
        className={loading ? 'loading' : ''}
        ref={fetchMoreTrigger}
      >
        <img src="/pencil_loading.gif" alt="loading..." />
        <p>불러오는중..</p>
      </FetchMoreTriggerContainer>
    );
  }, []);

  return [FetchMore, page];
}
