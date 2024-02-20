
import PropTypes from 'prop-types';

const Title= ({nombre})=> {
      return (
    
        <h1> {nombre}</h1>
        
  )
}
Title.propTypes = {
    nombre: PropTypes.string.isRequired // para permiter utilizar el nombre
  };
export default Title