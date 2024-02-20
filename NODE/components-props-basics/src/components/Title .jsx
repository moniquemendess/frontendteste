
import PropTypes from 'prop-types';

const Title= ({nombre})=> {
      return (
    <div>
        <p>Hello {nombre}</p>
         </div>
  )
}
Title.propTypes = {
    nombre: PropTypes.string.isRequired // para permiter utilizar el nombre
  };
export default Title