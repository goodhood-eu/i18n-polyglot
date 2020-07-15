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
    jsx: 'I have come here to chew %{bubblegum} and kick %{ass}... and I\'m all out of %{bubblegum}. **begins to kick %{ass}**',
  },
};

const Wrapper = (props) => <International locale={locale} {...props} />;

export default { title: 'International Component' };

const WithSimpleTHook = () => {
  const t = useT();

  return (
    <div>
      <dl>
        <dt>Simple string:</dt>
        <dd>{t('hello')}</dd>

        <dt>Nested string:</dt>
        <dd>{t('nested.hello')}</dd>

        <dt>JSX:</dt>
        <dd>
          {t('jsx', {
            bubblegum: 'bubblegum',
            ass: <strong>ass</strong>,
          })}
        </dd>
      </dl>
    </div>
  );
};
export const HookT = () => (
  <Wrapper>
    <WithSimpleTHook />
  </Wrapper>
);
