import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Polyglot from 'node-polyglot';
import { Provider } from '../context';
import smartT from '../smart_t';

const warn = (...args) => console.error(...args);

const createInstance = ({ type: locale, dictionary: phrases }) => {
  const polyglot = new Polyglot({ warn, locale, phrases });
  return (...args) => smartT(polyglot, ...args);
};

const International = ({ locale, children }) => {
  const context = useMemo(() => {
    const t = createInstance(locale);
    return { t, locale };
  }, [locale]);

  return <Provider value={context}>{children}</Provider>;
};

International.propTypes = {
  locale: PropTypes.shape({
    type: PropTypes.string,
    dictionary: PropTypes.object,
  }),
  children: PropTypes.node,
};

export default International;
