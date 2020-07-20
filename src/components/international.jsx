import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Polyglot from 'node-polyglot';
import { Provider } from '../context';

// Left like this for uglify to be able to clean up
const warn = (...args) => console.error(...args);

const createInstance = ({ type: locale, dictionary: phrases }) => {
  const polyglot = new Polyglot({ warn, locale, phrases });
  return polyglot.t.bind(polyglot);
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
    type: PropTypes.string.isRequired,
    dictionary: PropTypes.object.isRequired,
  }),
  children: PropTypes.node.isRequired,
};

export default International;
