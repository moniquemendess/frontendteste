
import PropTypes from 'prop-types';

const Title= ({nombre})=> {
      return (
    
        <p>Hello {nombre}</p>
        
  )
}
Title.propTypes = {
    nombre: PropTypes.string.isRequired // para permiter utilizar el nombre
  };
export default Title