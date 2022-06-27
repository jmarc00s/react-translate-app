import React from 'react';

interface Props {
  title: string;
  onClick?: () => void;
}

const MenuItem = ({ title, onClick }: Props) => {
  return (
    <li className="px-2">
      <a className="hover:underline hover:cursor-pointer">{title}</a>
    </li>
  );
};

export default MenuItem;
