import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { HeaderContainer } from './styles';
import LoginModal from '../Modal/LoginModal';
import { MdSearch } from 'react-icons/md';
import UserMenu from './UserMenu';

export function Logo(): JSX.Element {
  return (
    <Link href="/">
      <a className="logo">DEVELOPIC</a>
    </Link>
  );
}

export default function Header(): JSX.Element {
  const [isLogin, setIsLogin] = useState(false);
  const toggleLogin = () => {
    setIsLogin(state => !state);
  };
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const toggleUserMenu = useCallback(() => setUserMenuOpen(!userMenuOpen), [
    userMenuOpen,
  ]);
  const toggleLoginModal = useCallback(() => setLoginOpen(!loginOpen), [loginOpen]);
  return (
    <>
      <HeaderContainer>
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
              <Link href="/exhibition">
                <li>전시전보</li>
              </Link>
              <Link href="/search/1">
                <li>
                  <MdSearch />
                </li>
              </Link>
            </ul>
          </div>
          <div className="header--right">
            {isLogin ? (
              <img
                src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                alt=""
                onClick={toggleUserMenu}
              ></img>
            ) : (
              <span onClick={toggleLoginModal}>로그인</span>
            )}
          </div>
        </div>
      </HeaderContainer>
      {loginOpen && <LoginModal onClose={toggleLoginModal} fakeLogin={toggleLogin} />}
      {userMenuOpen && <UserMenu onClose={toggleUserMenu} />}
    </>
  );
}
