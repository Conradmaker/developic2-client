import React from 'react';
import Image from 'next/image';
import { EmptyContentContainer } from './styles';

type EmptycontentPropsType = {
  message: string;
};

export default function EmptyContent({ message }: EmptycontentPropsType): JSX.Element {
  return (
    <EmptyContentContainer>
      <Image src="/empty_content.png" alt="not_found" width={80} height={121} />
      <div className="empty_message">{message}</div>
    </EmptyContentContainer>
  );
}
