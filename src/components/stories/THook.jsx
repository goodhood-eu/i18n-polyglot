import { useT } from '../../hooks';

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
