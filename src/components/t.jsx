import PropTypes from 'prop-types';

import { useT } from '../hooks';
import smartT from '../smart_t';

const T = ({ id, ...options }) => smartT(useT(), id, options) || null;

T.propTypes = {
  id: PropTypes.string.isRequired,
};

export default T;
