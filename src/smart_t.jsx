import React, { isValidElement, Fragment } from 'react';

// https://github.com/airbnb/polyglot.js/blob/master/index.js#L148
// Could probably be written as /(%\{(?:[a-zA-Z_]+)\})/
const REGEX_VARIABLE = /(%\{(?:.+?)\})/;

const groupOptions = (options) => (
  Object.keys(options).reduce((acc, key) => {
    const value = options[key];
    const type = isValidElement(value) ? 'jsx' : 'regular';
    acc[type][key] = value;
    return acc;
  }, { jsx: {}, regular: {} })
);

// Use in React environments only - returns an array of mixed strings/Fragment nodes
const smartT = (simpleT, keyPath, options) => {
  // Options could be either a number or missing
  if (typeof options !== 'object') return simpleT(keyPath, options);

  const { jsx, regular } = groupOptions(options);
  const content = simpleT(keyPath, regular);

  if (!Object.keys(jsx).length) return content;

  const renderFragment = (shard, index) => {
    // `shard` is either a variable WITH syntax '%{variableName}' or a part of the string
    // We could use a regex to extract `variableName` but this is 100x faster
    // Syntax is preserved to avoid false positive replacements when part of the string
    // is matching a substitution variable
    const node = options[shard.slice(2, -1)];
    return node ? <Fragment key={`${shard}:${index}`}>{node}</Fragment> : shard;
  };

  return content.split(REGEX_VARIABLE).map(renderFragment);
};

export default smartT;
