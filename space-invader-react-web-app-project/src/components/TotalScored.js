import React from 'react';
import PropTypes from 'prop-types';

const TotalScored = (props) => {
  const scoreStyle = {
    fontFamily: '"Share Tech Mono", monospace',
    fontSize: 120,
    fill: '#d6d33e',
  };

  return (
    <g filter="url(#shadow)">
      <text style={scoreStyle} x="1100" y="-890">
        {props.score}
      </text>
    </g>
  );
};

TotalScored.propTypes = {
  score: PropTypes.number.isRequired,
};

export default TotalScored;
