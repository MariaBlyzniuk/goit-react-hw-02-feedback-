import PropTypes from 'prop-types';
import { StyleBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map(option => (
        <StyleBtn
            type="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}>
            {option}</StyleBtn>
        
    ))
}


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),

  onLeaveFeedback: PropTypes.func.isRequired,
};