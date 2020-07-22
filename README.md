i18n-polyglot
=============

A React wrapper for [node-polyglot](https://airbnb.io/polyglot.js/).

## API:

### <International />

You need to use the `<International />` wrapper around your app to create a [node-polyglot](https://airbnb.io/polyglot.js/) instance and to provide context to your components.
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
`<International />` component takes a `locale` object prop with following:
  - `type`: string, name of the locale, for possible values check [here](https://github.com/airbnb/polyglot.js/blob/master/index.js#L96).
  - `dictionary`: object, same as `phrases` object one would pass to [node-polyglot](https://github.com/airbnb/polyglot.js#translation).
  - anything else you pass will be available to every component connected to the context. Use this object to store locale specific configurations, like first day of the week.

### T

`T` is a component that allows for JSX within your substitutions options. Use it when you need to use JSX or accessing `t` function is inconvenient.

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

### Hooks: useInternational, useLocale, useT

`useInternational`, `useLocale` and `useT` are hooks that allow access to the locale context. `useInternational` is the main hook, `useLocale` and `useT` are convenience shortcuts.

```javascript
import { useInternational, useLocale, useT } from 'i18n-polyglot';

const MyComponent = ({ t, locale }) => {
  const { t, locale } = useInternational();
  // or
  const locale = useLocale();
  // or
  const t = useT();
  // ...
};

```

### withLocale

`withLocale` is a HOC you can use to wrap your components to get access to the internationalization context. It's considered legacy and will be removed in the future versions. It is preferrable to use hooks or the `T` component.

```javascript
import { withLocale } from 'i18n-polyglot';

const MyComponent = ({ t, locale }) => (
  // ...
);

export default withLocale(MyComponent);
```


