import { useRef } from 'react';

function useDebounce<T extends any[]>(callback: (...params: T) => void, time: number) {
  // 여러개의 인자 받을 수 있게, callback과 time
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // timer를 useRef로, 리렌더링 되어도 timer가 초기화되는 현상 막음
  return (...params: T) => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      callback(...params);
      debounceTimer.current = null;
    }, time);
    // time 안에 함수가 한번 더 실행되면 앞의 작업 취소, time 지날 때까지 다시 호출되지 않으면 callback 실행
  };
}

export default useDebounce;
