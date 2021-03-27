import Link from 'next/link';
import React from 'react';
import { UserMenuContainer } from './styles';

type navDataType = {
  title: string;
  content: {
    name: string;
    link: string;
  }[];
};
const navData: navDataType[] = [
  {
    title: '집필',
    content: [
      { name: '새 글 작성', link: '/' },
      { name: '임시저장 글', link: '/' },
    ],
  },
  {
    title: '내 서랍',
    content: [
      { name: '포토바인더', link: '/' },
      { name: '좋아요 목록', link: '/' },
      { name: '최근 본 글', link: '/' },
    ],
  },
  {
    title: '설정',
    content: [
      { name: '계정정보', link: '/' },
      { name: '소개', link: '/' },
      { name: '통계', link: '/' },
    ],
  },
];

type MenuNavItemPropsType = {
  data: navDataType;
};
function MenuNavItem({ data }: MenuNavItemPropsType): JSX.Element {
  return (
    <li>
      <h3>{data.title}</h3>
      <ul>
        {data.content.map((v, i) => (
          <Link href={v.link} key={v.name + i}>
            <li>{v.name}</li>
          </Link>
        ))}
      </ul>
    </li>
  );
}
type UserMenuPropsType = {
  onClose: () => void;
};
export default function UserMenu({ onClose }: UserMenuPropsType): JSX.Element {
  const closeMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return (
    <UserMenuContainer onClick={closeMenu}>
      <div className="user-menu__drawer">
        <h2>
          반가워요
          <br />
          <strong>누구누구</strong>님
        </h2>
        <ul>
          {navData.map(v => (
            <MenuNavItem data={v} key={v.title} />
          ))}

          <li>
            <h3>로그아웃</h3>
          </li>
        </ul>
      </div>
    </UserMenuContainer>
  );
}
