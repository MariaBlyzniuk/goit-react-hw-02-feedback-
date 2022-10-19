import PropTypes from 'prop-types';
import { StatisticsStyle, StatisticsItem } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
    return <StatisticsStyle>
            <StatisticsItem>Good: {good}</StatisticsItem>
            <StatisticsItem>Neutral: {neutral}</StatisticsItem>
            <StatisticsItem>Bad: {bad}</StatisticsItem>
                <StatisticsItem >Total: {total}</StatisticsItem>
            <StatisticsItem>Positive feedback: {percentage}%</StatisticsItem>
            </StatisticsStyle>
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};