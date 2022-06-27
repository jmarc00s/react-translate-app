import React from 'react';
import { AppContext } from '.';

export const useApp = () => React.useContext(AppContext);
