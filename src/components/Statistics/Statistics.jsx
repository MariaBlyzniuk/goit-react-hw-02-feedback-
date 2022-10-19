import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
    return <ul>
            <li>Good:{good}</li>
            <li>Neutral:{neutral}</li>
            <li>Bad:{bad}</li>
                <li >Total:{total}</li>
            <li>Positive feedback:{percentage}%</li>
            </ul>
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};