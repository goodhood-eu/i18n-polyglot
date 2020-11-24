/* eslint no-alert: "off" */
import T from './t';

export default { title: 'T' };

export const t = () => (
  <div>
    <dl>
      <dt>Simple string:</dt>
      <dd><T id="text" /></dd>

      <dt>Nested string:</dt>
      <dd><T id="nested.text" /></dd>

      <dt>Substitutions:</dt>
      <dd>
        <T
          id="substitution"
          variable_1={<strong onClick={() => alert('🍬')}>bubblegum</strong>}
          variable_2={<em onClick={() => alert('🍑')}>ass</em>}
        />
      </dd>

      <dt>Missing value:</dt>
      <dd>
        <T id="missing.value" />
      </dd>

      <dt>Empty call:</dt>
      <dd>
        <T />
      </dd>
    </dl>
  </div>
);
