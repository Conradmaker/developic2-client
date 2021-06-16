import React from 'react';
import { EmptyContentContainer } from './styles';

type EmptycontentPropsType = {
  message: string;
};

export default function EmptyContent({ message }: EmptycontentPropsType): JSX.Element {
  return (
    <EmptyContentContainer>
      <img src="/empty_content.png" alt="not_found" />
      <div className="empty_message">{message}</div>
    </EmptyContentContainer>
  );
}
