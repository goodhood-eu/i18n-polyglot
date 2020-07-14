import React from 'react';
import International from './international';
import { useT } from '../hooks';

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

export default { title: '<International />' };

const WithSimpleTHook = () => {
  const t = useT();

  return (
    <dl>
      <dt>Simple string:</dt>
      <dd>{t('hello')}</dd>

      <dt>Nested string:</dt>
      <dd>{t('nested.hello')}</dd>
    </dl>
  );
};
export const HookT = () => (
  <Wrapper>
    <WithSimpleTHook />
  </Wrapper>
);
