import React, { useMemo, useContext } from 'react';
import LocaleContext, { Provider, Consumer } from './context';
import { getDisplayName, getForwardedComponent } from '../utils';
import createTranslatorInstance from './setup';

const International = ({ locale, children }) => {
  const context = useMemo(() => {
    const { t } = createTranslatorInstance(locale);
    return { t, locale };
  }, []);

  return <Provider value={context}>{children}</Provider>;
};

export default International;
