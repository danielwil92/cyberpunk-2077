import React from 'react';
import './header.scss';
import Logo from '../logo/logo';
import Button from '../../ui-system/atoms/buttons/buttons';

export default function Header() {
  return (
    <header className="cyberpunk-header">
      <Logo />
      <Button href="https://www.cyberpunk.net/co/en/pre-order" label="Preorder" />
    </header>
  );
}
