import PropTypes from 'prop-types';

const Paragraph = ({h2Texto}) => {
  return (
    <p>{h2Texto}</p>
  )
 
}
Paragraph.propTypes = {
    h2Texto: PropTypes.string.isRequired 
};
export default Paragraph; 