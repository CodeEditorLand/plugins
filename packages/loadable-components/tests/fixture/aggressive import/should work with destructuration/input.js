loadable(({ foo }) => import(/* webpackChunkName: "Pages" */ `./${foo}`));
