import React, { useCallback, useEffect, useState } from 'react';
import _throttle from 'lodash/throttle';
import Link from 'next/link';
import { MdSearch } from 'react-icons/md';
import { HeaderContainer } from './styles';
import LoginModal from '../Modal/LoginModal';

import UserMenu from './UserMenu';
import useUser from '../../modules/user/hooks';
import { ScrollTopBtn } from '../Button/FloatingBtn';

export function Logo(): JSX.Element {
  return (
    <Link href="/">
      <a className="logo">DEVELOPIC</a>
    </Link>
  );
}

export default function Header(): JSX.Element {
  const { userData } = useUser();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [headerActive, setHeaderActive] = useState(true);

  const toggleUserMenu = useCallback(() => setUserMenuOpen(!userMenuOpen), [
    userMenuOpen,
  ]);
  const toggleLoginModal = useCallback(() => setLoginOpen(!loginOpen), [loginOpen]);

  useEffect(() => {
    const onScroll = _throttle((e: WheelEvent) => {
      const top =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      if (top > 72) {
        e.deltaY < 0 ? setHeaderActive(true) : setHeaderActive(false);
      } else {
        setHeaderActive(true);
      }
    }, 300);

    window.addEventListener('wheel', onScroll);

    return () => window.removeEventListener('wheel', onScroll);
  }, []);
  return (
    <>
      <HeaderContainer active={headerActive}>
        <div className="inner">
          <div className="header--left">
            <Logo />
            <ul>
              <Link href="/feed">
                <li>피드</li>
              </Link>
              <Link href="/discovery">
                <li>탐색</li>
              </Link>
              <Link href="/archive">
                <li>전시정보</li>
              </Link>
              <Link href="/search/1">
                <li>
                  <MdSearch />
                </li>
              </Link>
            </ul>
          </div>
          <div className="header--right">
            {userData ? (
              <div className="user-menu__btn" onClick={toggleUserMenu}>
                <span>{userData.nickname}님</span>
                <img src={userData.avatar} alt="avatar"></img>
              </div>
            ) : (
              <span onClick={toggleLoginModal}>로그인</span>
            )}
          </div>
        </div>
      </HeaderContainer>
      <ScrollTopBtn setHeader={setHeaderActive} />
      {loginOpen && <LoginModal onClose={toggleLoginModal} />}
      {userMenuOpen && userData && <UserMenu onClose={toggleUserMenu} />}
    </>
  );
}
