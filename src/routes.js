import React from 'react';

import { asyncComponent } from '@jaredpalmer/after';

export default [
  {
    path: '/',
    exact: true,
    component: asyncComponent({
      loader: () => import('./Home'),
      Placeholder: () => <div>...LOADING...</div>,
    }),
  },
  {
    path: '/about/:url_slug/',
    exact: true,
    component: asyncComponent({
      loader: () => import('./About'),
      Placeholder: () => <div>...LOADING...</div>,
    }),
  },
  {
    path: '/about2/:url_slug/',
    exact: true,
    component: asyncComponent({
      loader: () => import('./About2'),
      Placeholder: () => <div>...LOADING...</div>,
    }),
  },
];
