import { useInternational, useLocale, useT } from '../hooks';

export default { title: 'International' };

const WithInternationalHook = () => {
  const { t } = useInternational();

  return (
    <div>
      <dl>
        <dt>Simple string:</dt>
        <dd>{t('text')}</dd>

        <dt>Nested string:</dt>
        <dd>{t('nested.text')}</dd>

        <dt>Substitutions:</dt>
        <dd>
          {t('substitution', {
            variable_1: 'bubblegum',
            variable_2: 'ass',
          })}
        </dd>

        <dt>Missing value:</dt>
        <dd>
          {t('missing.value')}
        </dd>

        <dt>Empty call:</dt>
        <dd>
          {t()}
        </dd>
      </dl>
    </div>
  );
};

export const InternationalHook = () => <WithInternationalHook />;

const WithLocaleHook = () => {
  const locale = useLocale();

  return <pre>locale: {JSON.stringify(locale, null, 2)}</pre>;
};

export const LocaleHook = () => <WithLocaleHook />;


const WithTHook = () => {
  const t = useT();

  return (
    <div>
      <dl>
        <dt>Simple string:</dt>
        <dd>{t('text')}</dd>

        <dt>Nested string:</dt>
        <dd>{t('nested.text')}</dd>

        <dt>Substitutions:</dt>
        <dd>
          {t('substitution', {
            variable_1: 'bubblegum',
            variable_2: 'ass',
          })}
        </dd>

        <dt>Missing value:</dt>
        <dd>
          {t('missing.value')}
        </dd>

        <dt>Empty call:</dt>
        <dd>
          {t()}
        </dd>
      </dl>
    </div>
  );
};

export const THook = () => <WithTHook />;
