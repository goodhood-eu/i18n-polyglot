import React, { Fragment } from 'react';

// https://github.com/airbnb/polyglot.js/blob/master/index.js#L148
// Could probably be written as /(%\{(?:[a-zA-Z_]+)\})/
const REGEX_VARIABLE = /(%\{(?:.+?)\})/;

const formatOptions = (options) => (
  Object.keys(options).reduce((acc, key) => {
    const value = options[key];
    const type = React.isValidElement(value) ? 'jsx' : 'regular';
    acc[type][key] = value;
    return acc;
  }, { jsx: {}, regular: {} })
);

const smartT = (polyglot, keyPath, options) => {
  // Options may be either a number or missing
  if (typeof options !== 'object') return polyglot.t(keyPath, options);

  const { jsx, regular } = formatOptions(options);
  const content = polyglot.t(keyPath, regular);

  if (!Object.keys(jsx).length) return content;

  const renderFragment = (shard, index) => {
    // `shard` is either a variable WITH syntax '%{variableName}' or a part of the string
    // We could use a regex to extract `variableName` but this is 100x faster
    // Syntax is preserved to avoid false positive replacements - part of the string matching a prop
    const node = options[shard.slice(2, -1)];
    return node ? <Fragment key={`${shard}:${index}`}>{node}</Fragment> : shard;
  };

  return content.split(REGEX_VARIABLE).map(renderFragment);
};

export default smartT;
