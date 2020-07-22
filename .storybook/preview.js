import React from 'react';
import { addDecorator } from '@storybook/react';

import International from '../src';

const locale = {
  type: 'de',
  dictionary: {
    text: 'Hallo!',
    nested: {
      text: 'Hallo nochmal!',
    },
    substitution: 'I have come here to chew %{variable_1} and kick %{variable_2}... and I\'m all out of %{variable_1}.',
  },
};


const wrapper = (storyFn) => (
  <International locale={locale}>{storyFn({ locale })}</International>
);

addDecorator(wrapper);
