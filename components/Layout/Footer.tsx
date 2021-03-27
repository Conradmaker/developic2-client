import React from 'react';
import {
  RiFacebookFill,
  RiGithubFill,
  RiInstagramLine,
  RiPinterestLine,
} from 'react-icons/ri';
import Link from 'next/link';
import { FooterContainer } from './styles';

export default function Footer(): JSX.Element {
  return (
    <FooterContainer>
      <div className="inner">
        <div className="menu__list">
          <span className="logo">DEVELOPIC</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <ul>
            <Link href="/">
              <li>홈페이지</li>
            </Link>
            <Link href="/">
              <li>문의</li>
            </Link>
            <Link href="/">
              <li>정책/약관</li>
            </Link>
          </ul>
        </div>
        <ul className="social__list">
          <li>
            <RiFacebookFill />
          </li>
          <li>
            <RiInstagramLine />
          </li>
          <li>
            <RiPinterestLine />
          </li>
          <li>
            <RiGithubFill />
          </li>
        </ul>
      </div>
    </FooterContainer>
  );
}
