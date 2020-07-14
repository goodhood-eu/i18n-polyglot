import React, { forwardRef } from 'react';

import { useInternational } from './hooks';

const getDisplayName = (wrapper, Component) => {
  const name = Component.displayName || Component.name || 'Component';
  return `${wrapper}(${name})`;
};

const withLocale = (Component) => {
  const LocalizedComponent = (props, ref) => {
    const locale = useInternational();
    return <Component {...props} {...locale} ref={ref} />;
  };

  LocalizedComponent.displayName = getDisplayName('withLocale', Component);
  return forwardRef(LocalizedComponent);
};

export default withLocale;
