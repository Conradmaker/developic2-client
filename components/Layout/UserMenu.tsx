import Link from 'next/link';
import React from 'react';
import { MdArrowForward } from 'react-icons/md';

import { useUser } from 'hooks';
import { DarkModeBtn } from '../Button/FloatingBtn';
import { UserMenuContainer } from './styles';
import { userMenuNavData, UserMenuNavData } from 'utils/data';

type MenuNavItemPropsType = {
  data: UserMenuNavData;
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

  const closeMenu = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  }, []);

  const onLogout = React.useCallback(() => {
    logoutDispatch();
    onClose();
  }, []);

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
          {userMenuNavData.map(subMenuData => (
            <MenuNavItem data={subMenuData} key={subMenuData.title} />
          ))}

          <li>
            <h3 onClick={onLogout}>로그아웃</h3>
          </li>
        </ul>
        <DarkModeBtn />
        <div className="close__btn" onClick={onClose}>
          +
        </div>
      </div>
    </UserMenuContainer>
  );
}
