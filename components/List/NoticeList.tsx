import React, { useState } from 'react';
import { NoticeListContainer } from './styles';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { FaqType, NoticeType } from '../../modules/cs';
import dayjs from 'dayjs';

const isNotice = (target: NoticeType | FaqType): target is NoticeType => {
  return (target as NoticeType).title !== undefined;
};

type NoticeItemPropsType = {
  contentOpenIndex: number | null;
  setContentOpenIndex: React.Dispatch<React.SetStateAction<number | null>>;
  data: NoticeType | FaqType;
};
function NoticeItem({
  contentOpenIndex,
  setContentOpenIndex,
  data,
}: NoticeItemPropsType): JSX.Element {
  const turnOnContent = React.useCallback(() => {
    if (data.id === contentOpenIndex) setContentOpenIndex(null);
    else setContentOpenIndex(data.id);
  }, [contentOpenIndex, data.id]);

  return (
    <li onClick={turnOnContent}>
      <div className="icon">
        {contentOpenIndex === data.id ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
      <div className="content">
        <h2>{isNotice(data) ? data.title : data.question}</h2>
        {contentOpenIndex === data.id && (
          <article>
            {isNotice(data) && (
              <div className="info">
                <span>{dayjs(data.createdAt).format('YYYY.MM.DD, hh:mm a')}</span>
                <span>{`- ${data.Admin.name}`}</span>
              </div>
            )}
            <p>{isNotice(data) ? data.content : data.answer}</p>
          </article>
        )}
      </div>
    </li>
  );
}

type NoticeListPropsType = {
  data: NoticeType[] | FaqType[] | null;
};
export default function NoticeList({ data }: NoticeListPropsType): JSX.Element {
  const [contentOpenIndex, setContentOpenIndex] = useState<null | number>(null);

  if (!data) return <></>;

  return (
    <NoticeListContainer>
      {data.map((v: NoticeType | FaqType) => (
        <NoticeItem
          key={v.id}
          contentOpenIndex={contentOpenIndex}
          setContentOpenIndex={setContentOpenIndex}
          data={v}
        />
      ))}
    </NoticeListContainer>
  );
}
