import React, { ReactElement } from 'react';

interface Props {
  children: ReactElement;
}

const Container = ({ children }: Props) => {
  return <main className="container mx-auto">{children}</main>;
};

export default Container;
