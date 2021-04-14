import React from 'react';
import { HashTagBox } from './styles';

type HashTagPropsType = {
  name: string;
};
export default function HashTag({ name }: HashTagPropsType): JSX.Element {
  return <HashTagBox>{`# ${name}`}</HashTagBox>;
}
