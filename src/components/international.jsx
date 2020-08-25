import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Polyglot from 'node-polyglot';
import { Provider } from '../context';

// Left like this for uglify to be able to clean up
const warn = (...args) => console.error(...args);

const editorT = (key) => `{{__phrase_${key}__}}`;

const createInstance = ({ type: locale, dictionary: phrases }) => {
  const polyglot = new Polyglot({ warn, locale, phrases });
  return polyglot.t.bind(polyglot);
};

const createDebug = () => ({ t: editorT });

const International = ({ locale, projectId, children }) => {
  const context = useMemo(() => {
    const t = projectId ? createDebug() : createInstance(locale || {});
    return { t, locale };
  }, [locale]);

  return <Provider value={context}>{children}</Provider>;
};

International.propTypes = {
  locale: PropTypes.shape({
    type: PropTypes.string,
    dictionary: PropTypes.object,
  }),
  projectId: PropTypes.string,
  children: PropTypes.node,
};

export default International;
