import PropTypes from 'prop-types';
import { NotifiStyle } from './Notification.styled';

export const Notification = ({ message }) => {
  return <NotifiStyle>{message}</NotifiStyle>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};