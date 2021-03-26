import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { HeaderContainer } from './styles';
import LoginModal from '../Modal/LoginModal';
import { MdSearch } from 'react-icons/md';

export function Logo(): JSX.Element {
  return (
    <Link href="/">
      <a className="logo">DEVELOPIC</a>
    </Link>
  );
}

export default function Header(): JSX.Element {
  const [loginOpen, setLoginOpen] = useState(false);
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
            <span onClick={toggleLoginModal}>로그인</span>
          </div>
        </div>
      </HeaderContainer>
      {loginOpen && <LoginModal onClose={toggleLoginModal} />}
    </>
  );
}
