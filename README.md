i18n-polyglot
=============

A React wrapper for [https://airbnb.io/polyglot.js/](node-polyglot).

## API:

### <International />

You need to use the `<International />` wrapper around your app to create a [https://airbnb.io/polyglot.js/](node-polyglot) instance and to provide context to your components.
```javascript
import International from 'i18n-polyglot';

const locale = {
  type: 'de',
  dictionary: {
    greeting: 'Hallo!',
  },
  // anything else locale related
};

<International locale={locale}>
  <App />
</International>
```
`<International />` component takes a `locale` object prop with following contents:
  - `type`: string, name of the locale, for possible values check (https://github.com/airbnb/polyglot.js/blob/master/index.js#L96)[here].
  - `dictionary`: object, same as `phrases` object one would pass to [https://github.com/airbnb/polyglot.js#translation](node-polyglot).
  - any other object props will be available to every component connected to the context. Use it to store locale specific configurations, like first day of the week.

### T

`T` is a component that allows for JSX within your substitutions options.

```javascript
import { T } from 'i18n-polyglot';

const locale = {
  dictionary: {
    substitution: 'I have come here to chew %{variable_1} and kick %{variable_2}... and I\'m all out of %{variable_1}.',
  },
};

const MyComponent = ({ t, locale }) => (
  <T
    id="substitution"
    variable_1={<strong onClick={() => alert('🍬')}>bubblegum</strong>}
    variable_2={<em onClick={() => alert('🍑')}>ass</em>}
  />
);
// => I have come here to chew bubblegum and kick ass... and I'm all out of bubblegum.
```

### useInternational, useLocale, useT

`useInternational`, `useLocale` and `useT` are hooks that allow access to the locale context. `useInternational` is the main hooks and `useLocale`/`useT` are convenience shortcuts.

```javascript
import { useInternational, useLocale, useT } from 'i18n-polyglot';

const MyComponent = ({ t, locale }) => {
  const { t, locale } = useInternational();
  const locale = useLocale();
  const t = useT();
  //...
};

```

### withLocale

`withLocale` is a HOC you can use to wrap your components to get access to the `t` translations function. It's considered legacy, it is preferrable to use hooks or the `T` component.

```javascript
import { withLocale } from 'i18n-polyglot';

const MyComponent = ({ t, locale }) => (
  //...
);

export default withLocale(MyComponent);
```


