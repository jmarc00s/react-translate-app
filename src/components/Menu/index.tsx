import React from 'react';
import { useTranslation } from 'react-i18next';
import MenuItem from './components/MenuItem';

const Menu = () => {
  const { t } = useTranslation();

  const menuItems = [
    {
      title: 'menu.home',
    },
    {
      title: 'menu.about',
    },
    {
      title: 'menu.contacts',
    },
  ];
  return (
    <ul className="flex">
      {menuItems.map(({ title }) => (
        <MenuItem key={title} title={t(title)} />
      ))}
    </ul>
  );
};

export default Menu;
