import React, { Fragment } from 'react';

const t = (fn, key, options) => {
  if (typeof options !== 'object') return fn(key, options);

  const { jsx, props } = Object.keys(options).reduce((acc, prop) => {
    const value = options[prop];

    if (React.isValidElement(value)) acc.jsx.push(prop);
    else acc.props[prop] = value;

    return acc;
  }, { jsx: [], props: {} });

  const content = fn(key, props);

  if (!jsx.length) return content;

  const shards = content.split(new RegExp(`%{(?:${jsx.join('|')})}`, 'g'));

  const renderFragment = (shard, index) => {
    const node = options[jsx[index]];
    return <Fragment key={`${shard}:${index}`}>{shard}{node}</Fragment>;
  };

  return <>{shards.map(renderFragment)}</>;
};

export default t;
