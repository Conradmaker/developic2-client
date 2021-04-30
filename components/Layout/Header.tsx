import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { HeaderContainer } from './styles';
import LoginModal from '../Modal/LoginModal';
import Toast from '../Result/ToastPopUp';
import { MdSearch } from 'react-icons/md';
import UserMenu from './UserMenu';
import useUser from '../../modules/user/hooks';
import useUI from '../../modules/ui/hooks';
// import SearchModal from '../Modal/SearchModal';

export function Logo(): JSX.Element {
  return (
    <Link href="/">
      <a className="logo">DEVELOPIC</a>
    </Link>
  );
}

export default function Header(): JSX.Element {
  const { userData, logout, login } = useUser();
  const { toastOpenDispatch, toastPopUp } = useUI();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  // const [searchOpen, setSearchOpen] = useState(false);

  const toggleUserMenu = useCallback(() => setUserMenuOpen(!userMenuOpen), [
    userMenuOpen,
  ]);
  const toggleLoginModal = useCallback(() => setLoginOpen(!loginOpen), [loginOpen]);
  // const toggleSearchModal = useCallback(() => setSearchOpen(!searchOpen), [searchOpen]);

  useEffect(() => {
    if (logout.data) {
      toastOpenDispatch('로그아웃 되었습니다.');
    }
    if (login.data) {
      toastOpenDispatch('로그인 되었습니다.');
    }
  }, [logout.data, login.data]);

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
              <Link href="/archive">
                <li>전시정보</li>
              </Link>
              <Link href="/search/1">
                <li>
                  <MdSearch />
                  {/* <MdSearch onClick={toggleSearchModal} /> */}
                </li>
              </Link>
            </ul>
          </div>
          <div className="header--right">
            {userData ? (
              <img
                src={`${process.env.NEXT_PUBLIC_SERVER_HOST}/image/avatar/${userData.avatar}`}
                alt=""
                onClick={toggleUserMenu}
              ></img>
            ) : (
              <span onClick={toggleLoginModal}>로그인</span>
            )}
          </div>
        </div>
      </HeaderContainer>
      {loginOpen && <LoginModal onClose={toggleLoginModal} />}
      {userMenuOpen && userData && <UserMenu onClose={toggleUserMenu} />}
      {/* {searchOpen && <SearchModal onClose={toggleSearchModal} />} */}
      {toastPopUp.open && <Toast />}
    </>
  );
}
