import PropTypes from 'prop-types';

import { useT } from '../hooks';

const T = ({ name, ...props }) => useT()(name, props);

T.propTypes = {
  name: PropTypes.string.isRequired,
};

export default T;
