import React from 'react';
import International from './international';
import { useT } from '../hooks';
import testt from '../t';

const locale = {
  type: 'de',
  dictionary: {
    hello: 'Hallo!',
    nested: {
      hello: 'Hallo nochmal!',
    },
    replacement: 'Hello %{name} this is %{jsxtest} from the Horde. Zog-zog! Lass uns %{time} treffen!',
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
      </dl>

      {testt(t, 'replacement', { name: 'Mike', jsxtest: <span>kek</span>, time: <em>NIMMER</em> })}
    </div>
  );
};
export const HookT = () => (
  <Wrapper>
    <WithSimpleTHook />
  </Wrapper>
);
