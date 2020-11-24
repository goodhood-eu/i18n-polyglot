import { forwardRef } from 'react';
import { useInternational } from './hooks';

const withLocale = (Component) => {
  const LocalizedComponent = (props, ref) => {
    const locale = useInternational();
    return <Component {...props} {...locale} ref={ref} />;
  };

  const displayName = Component.displayName || Component.name || 'Component';
  LocalizedComponent.displayName = `withLocale(${displayName})`;
  return forwardRef(LocalizedComponent);
};

export default withLocale;
