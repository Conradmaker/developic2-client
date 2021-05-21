import Link from 'next/link';
import React from 'react';
import { MdArrowForward } from 'react-icons/md';
import useUser from '../../modules/user/hooks';
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
      { name: '새 글 작성', link: '/edit/content/new' },
      { name: '임시저장 글', link: '/user/drawer/save' },
    ],
  },
  {
    title: '내 서랍',
    content: [
      { name: '포토바인더', link: '/user/drawer/binder' },
      { name: '좋아요 목록', link: '/user/drawer/like' },
      { name: '최근 본 글', link: '/user/drawer/recent' },
    ],
  },
  {
    title: '설정',
    content: [
      { name: '계정정보', link: '/user/setting/info' },
      { name: '소개', link: '/user/setting/intro' },
      { name: '통계', link: '/user/setting/stats' },
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
        {data.content.map((navItem, index) => (
          <Link href={navItem.link} key={navItem.name + index}>
            <li>{navItem.name}</li>
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
  const { userData, logoutDispatch } = useUser();
  const closeMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  const onLogout = () => {
    logoutDispatch();
    onClose();
  };
  if (!userData) return <></>;
  return (
    <UserMenuContainer onClick={closeMenu}>
      <div className="user-menu__drawer">
        <h2>
          반가워요
          <br />
          <strong>{userData.nickname}</strong>님
        </h2>
        <Link href={`/${userData.id}/post`}>
          <p>
            <MdArrowForward /> <span>내 디벨로픽</span>
          </p>
        </Link>
        <ul>
          {navData.map(subMenuData => (
            <MenuNavItem data={subMenuData} key={subMenuData.title} />
          ))}

          <li>
            <h3 onClick={onLogout}>로그아웃</h3>
          </li>
        </ul>
      </div>
    </UserMenuContainer>
  );
}
