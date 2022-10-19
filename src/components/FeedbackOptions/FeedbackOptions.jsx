import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map(option => (
        <button
            type="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}>
            {option}</button>
        
    ))
}


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),

  onLeaveFeedback: PropTypes.func.isRequired,
};