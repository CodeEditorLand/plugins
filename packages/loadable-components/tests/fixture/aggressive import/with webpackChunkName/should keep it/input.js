loadable(
  (props) =>
    import(/* webpackChunkName: "pages/[request]" */ `./pages/${props.path}`),
);
