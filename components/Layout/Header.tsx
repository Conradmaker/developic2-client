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
  const { userData, logout, login, verification } = useUser();
  // const { toastOpenDispatch, toastPopUp } = useUI();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  // const [searchOpen, setSearchOpen] = useState(false);

  const toggleUserMenu = useCallback(() => setUserMenuOpen(!userMenuOpen), [
    userMenuOpen,
  ]);
  const toggleLoginModal = useCallback(() => setLoginOpen(!loginOpen), [loginOpen]);
  // const toggleSearchModal = useCallback(() => setSearchOpen(!searchOpen), [searchOpen]);

  // useEffect(() => {
  //   if (logout.data) {
  //     toastOpenDispatch('로그아웃 되었습니다.');
  //   }
  //   if (userData) {
  //     toastOpenDispatch('로그인 되었습니다.');
  //   }
  //   if (verification.data) {
  //     toastOpenDispatch('인증성공! 로그인해주세요.');
  //   } else if (verification.error) {
  //     toastOpenDispatch('올바른 인증번호를 입력해주세요.');
  //   }
  // }, [logout.data, login.data, userData]);

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
              <Link href="/search">
                <li>
                  <MdSearch />
                  {/* <MdSearch onClick={toggleSearchModal} /> */}
                </li>
              </Link>
            </ul>
          </div>
          <div className="header--right">
            {userData ? (
              <img src={userData.avatar} alt="" onClick={toggleUserMenu}></img>
            ) : (
              <span onClick={toggleLoginModal}>로그인</span>
            )}
          </div>
        </div>
      </HeaderContainer>
      {loginOpen && <LoginModal onClose={toggleLoginModal} />}
      {userMenuOpen && userData && <UserMenu onClose={toggleUserMenu} />}
      {/* {searchOpen && <SearchModal onClose={toggleSearchModal} />} */}
      {/* {toastPopUp.open && <Toast />} */}
    </>
  );
}
