import PropTypes from 'prop-types';

import { useT } from '../hooks';
import smartT from '../smart_t';

const T = ({ id, options }) => smartT(useT(), id, options);

T.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
};

export default T;
