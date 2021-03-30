import React, { useState } from 'react';
import { NoticeListContainer } from './styles';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

type NoticeItemPropsType = {
  setContentOpenIndex: React.Dispatch<React.SetStateAction<number | null>>;
  contentOpenIndex: number | null;
  index: number;
  hasWriter: boolean;
};
function NoticeItem({
  contentOpenIndex,
  setContentOpenIndex,
  index,
  hasWriter,
}: NoticeItemPropsType): JSX.Element {
  const turnOnContent = () => {
    if (index === contentOpenIndex) setContentOpenIndex(null);
    else setContentOpenIndex(index);
  };
  return (
    <li onClick={turnOnContent}>
      <div className="icon">
        {contentOpenIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
      <div className="content">
        <h2>자자 공지가 왔어요 공지가!</h2>
        {contentOpenIndex === index && (
          <article>
            {hasWriter && (
              <div className="info">
                <span>2020.03.20 / 03시 55분</span>
                <span>- 운영자 픽픽few</span>
              </div>
            )}
            <p>
              모두 이 사이트를 탈퇴해 주세요.... 왜냐면 망가져 버렸어요 누가 고장을
              냈을까? 정답은 바로 아래에 있음. 함ㄴㅎㅁㄴ;험ㄴ;ㅎ
            </p>
          </article>
        )}
      </div>
    </li>
  );
}
type NoticeListPropsType = {
  hasWriter?: boolean;
};
export default function NoticeList({
  hasWriter = true,
}: NoticeListPropsType): JSX.Element {
  const [contentOpenIndex, setContentOpenIndex] = useState<null | number>(null);
  return (
    <NoticeListContainer>
      {Array.from({ length: 5 }).map((v, index) => (
        <NoticeItem
          index={index}
          setContentOpenIndex={setContentOpenIndex}
          contentOpenIndex={contentOpenIndex}
          hasWriter={hasWriter}
        />
      ))}
    </NoticeListContainer>
  );
}
