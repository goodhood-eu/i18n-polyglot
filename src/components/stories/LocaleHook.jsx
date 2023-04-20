import { useLocale } from '../../hooks';

const WithLocaleHook = () => {
  const locale = useLocale();

  return <pre>locale: {JSON.stringify(locale, null, 2)}</pre>;
};

export const LocaleHook = () => <WithLocaleHook />;
