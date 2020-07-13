export const connectLocale = (Component, options = {}) => {
  const LocalizedComponent = ({ forwardedRef, ...props }) => {
    const locale = useInternational();
    return <Component {...props} {...locale} ref={forwardedRef} />;
  };

  const displayName = getDisplayName('connectLocale', Component);
  if (options.forwardRef) return getForwardedComponent(displayName, LocalizedComponent);

  LocalizedComponent.displayName = displayName;
  return LocalizedComponent;
};
