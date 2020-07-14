import React from 'react';
import International from './index';
import T from './t';

const locale = {
  type: 'de',
  dictionary: {
    hello: 'Hallo!',
    nested: {
      hello: 'Hallo nochmal!',
    },
  },
};

const Wrapper = (props) => <International locale={locale} {...props} />;

export default { title: 't' };

export const ComponentT = () => (
  <Wrapper>
    <dl>
      <dt>Simple string:</dt>
      <dd><T name="hello" /></dd>

      <dt>Nested string:</dt>
      <dd><T name="nested.hello" /></dd>
    </dl>
  </Wrapper>
);
