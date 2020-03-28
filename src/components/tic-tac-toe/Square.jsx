import React from 'react';
import PropTypes from 'prop-types';

class Square extends React.PureComponent {
  render() {
    const { value, onClick } = this.props;
    return (
      <button type="button" className="square" onClick={() => onClick()}>
        {value}
      </button>
    );
  }
}

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

Square.defaultProps = {
  value: '',
  onClick: () => {},
};

export default Square;
