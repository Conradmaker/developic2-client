import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

type Props = {
  href: string;
};
const ActiveLink = ({ href, children, ...otherProps }: Props) => {
  const router = useRouter();
  let className = children.props.className || '';
  if (router.pathname === href) {
    className = `${className} selected`;
  }
  return (
    <Link href={href} {...otherProps}>
      {React.cloneElement(children, { className })}
    </Link>
  );
};

export default ActiveLink;
