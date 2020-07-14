import Polyglot from 'node-polyglot';

const warn = (...args) => console.error(...args);

const createTranslatorInstance = ({ type: locale, dictionary: phrases }) => {
  const polyglot = new Polyglot({ warn, locale, phrases });
  polyglot.t = polyglot.t.bind(polyglot);
  return polyglot;
};

export default createTranslatorInstance;
