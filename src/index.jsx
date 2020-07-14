import React, { useMemo } from 'react';
import { Provider } from './context';
import createTranslatorInstance from './setup';

const International = ({ locale, children }) => {
  const context = useMemo(() => {
    const { t } = createTranslatorInstance(locale);
    return { t, locale };
  }, [locale]);

  return <Provider value={context}>{children}</Provider>;
};

export default International;
